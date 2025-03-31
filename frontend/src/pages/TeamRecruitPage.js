import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import postsDB from '../data/postsDB';
import TeamRecruitCard from '../components/team/TeamRecruitCard';
import TeamFilter from '../components/team/TeamFilter';

function TeamRecruitPage() {
  const { id } = useParams();
  const [originalPosts] = useState(postsDB);
  const [posts, setPosts] = useState(postsDB);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('전체');
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    if (id) {
      setExpandedPostId(parseInt(id, 10));
    }
  }, [id]);

  const handleExpand = (postId) => {
    if (expandedPostId === postId) {
      setExpandedPostId(null);
      setPosts(originalPosts);
    } else {
      setExpandedPostId(postId);
      setPosts(() => {
        const clickedPost = originalPosts.find((post) => post.postId === postId);
        const otherPosts = originalPosts.filter((post) => post.postId !== postId);
        return [clickedPost, ...otherPosts];
      });
    }
  };

  const handleSearchChange = (query) => {
    console.log('Search query updated:', query); // 디버깅용 로그
    setSearchQuery(query);
  };

  const handleRegionChange = (region) => {
    console.log('Region changed:', region); // 디버깅용 로그
    setSelectedRegion(region);
  };

  const handleStatusChange = (status) => {
    console.log('Status changed:', status); // 디버깅용 로그
    setSelectedStatus(status);
  };

  const handleResetFilters = () => {
    console.log('Filters reset'); // 디버깅용 로그
    setSearchQuery('');
    setSelectedRegion('전체');
    setSelectedStatus('');
    setPosts(originalPosts);
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === '전체' || post.location.includes(selectedRegion);
    const matchesStatus =
      selectedStatus === '' ||
      (selectedStatus === '신청 가능' && post.status === '신청 가능') ||
      (selectedStatus === '마감 임박' && post.remaining > 0 && post.remaining <= 3) ||
      (selectedStatus === '마감' && post.status === '마감');

    return matchesSearch && matchesRegion && matchesStatus;
  });

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold mb-6">팀 모집</h1>

      <div className="mb-6">
        <TeamFilter
          selectedRegion={selectedRegion}
          onRegionChange={handleRegionChange} // 지역 필터 핸들러 전달
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange} // 검색어 변경 핸들러 전달
          selectedStatus={selectedStatus}
          onStatusChange={handleStatusChange} // 상태 필터 핸들러 전달
          onReset={handleResetFilters} // 초기화 핸들러 전달
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <TeamRecruitCard
            key={post.postId}
            post={post}
            isExpanded={post.postId === expandedPostId}
            onExpand={() => handleExpand(post.postId)}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamRecruitPage;