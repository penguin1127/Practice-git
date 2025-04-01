import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TeamFilter from '../team/TeamFilter';

const PostListPage = ({ title, postsDB, CardComponent }) => {
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
    setSearchQuery(query);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('전체');
    setSelectedStatus('');
    setPosts(originalPosts);
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title && post.title.toLowerCase().includes(searchQuery.toLowerCase());
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
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      <div className="mb-6">
        <TeamFilter
          selectedRegion={selectedRegion}
          onRegionChange={handleRegionChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          selectedStatus={selectedStatus}
          onStatusChange={handleStatusChange}
          onReset={handleResetFilters}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <CardComponent
            key={post.postId}
            post={post}
            isExpanded={post.postId === expandedPostId}
            onExpand={() => handleExpand(post.postId)}
          />
        ))}
      </div>
    </div>
  );
};

export default PostListPage;