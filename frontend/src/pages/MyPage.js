import React, { useState } from 'react';
import ProfileSection from '../components/mypage/ProfileSection';
import CalendarSection from '../components/mypage/CalendarSection';
import MercenarySection from '../components/mypage/MercenarySection';
import MatchRecruitSection from '../components/mypage/MatchRecruitSection';
import TeamSection from '../components/mypage/TeamSection';
import TeamCalendarSection from '../components/mypage/TeamCalendarSection';
import SettingsSection from '../components/mypage/SettingsSection';
import FAQSection from '../components/mypage/FAQSection';

const MyPage = () => {
  const [selectedSection, setSelectedSection] = useState('profile'); // 기본 선택: 내 정보
  const [isTeamMenuOpen, setIsTeamMenuOpen] = useState(false); // "나의 팀 & 경기" 하위 메뉴 상태
  const [personalCalendarEvents, setPersonalCalendarEvents] = useState([]); // 개인 캘린더 데이터

  // 팀 일정을 개인 캘린더로 추가하는 함수
  const addToPersonalCalendar = (teamEvents) => {
    const newEvents = teamEvents.map((event) => ({
      ...event,
      isTeamEvent: true, // 팀 일정임을 표시
    }));
    setPersonalCalendarEvents((prevEvents) => [...prevEvents, ...newEvents]);
    alert('팀 일정이 개인 캘린더에 추가되었습니다!');
  };

  // 팀 캘린더에 새 일정을 추가하는 함수 (예시)
  const addTeamCalendarEvent = (newEvent) => {
    console.log('새 팀 일정 추가:', newEvent);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'profile':
        return <ProfileSection />;
      case 'calendar':
        return (
          <div>
            <CalendarSection />
            <h2 className="text-xl font-bold mt-6">개인 일정</h2>
            <ul>
              {personalCalendarEvents.length > 0 ? (
                personalCalendarEvents.map((event, index) => (
                  <li key={index} className="mb-2">
                    <span className="font-bold">{new Date(event.date).toLocaleDateString()}</span>: {event.title}
                  </li>
                ))
              ) : (
                <p>개인 일정이 없습니다.</p>
              )}
            </ul>
          </div>
        );
      case 'mercenary':
        return <MercenarySection />;
      case 'teamManagement':
        return <TeamSection />;
      case 'matchRecruit':
        return <MatchRecruitSection />;
      case 'teamCalendar':
        return (
          <TeamCalendarSection
            isTeamLeader={true} // 팀장 여부
            addToPersonalCalendar={addToPersonalCalendar} // 개인 캘린더로 추가 함수 전달
            addTeamCalendarEvent={addTeamCalendarEvent} // 새 팀 일정 추가 함수 전달
          />
        );
      case 'settings':
        return <SettingsSection />;
      case 'faq':
        return <FAQSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* 왼쪽 사이드바 */}
      <div className="w-1/4 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold mb-6">마이 페이지</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setSelectedSection('profile')}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedSection === 'profile' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
              }`}
            >
              내 정보
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedSection('calendar')}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedSection === 'calendar' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
              }`}
            >
              캘린더
            </button>
          </li>
          <li>
            <button
              onClick={() => setIsTeamMenuOpen(!isTeamMenuOpen)}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedSection === 'teamManagement' ||
                selectedSection === 'matchRecruit' ||
                selectedSection === 'teamCalendar'
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              나의 팀 & 경기
            </button>
            {isTeamMenuOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedSection('teamManagement')}
                    className={`w-full text-left px-4 py-2 rounded ${
                      selectedSection === 'teamManagement' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    ⚽ 나의 팀 관리
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedSection('matchRecruit')}
                    className={`w-full text-left px-4 py-2 rounded ${
                      selectedSection === 'matchRecruit' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    📋 경기 모집 관리
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedSection('teamCalendar')}
                    className={`w-full text-left px-4 py-2 rounded ${
                      selectedSection === 'teamCalendar' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    🗓️ 팀 캘린더
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => setSelectedSection('mercenary')}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedSection === 'mercenary' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
              }`}
            >
              내 용병 신청
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedSection('settings')}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedSection === 'settings' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
              }`}
            >
              설정
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedSection('faq')}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedSection === 'faq' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
              }`}
            >
              공지사항
            </button>
          </li>
        </ul>
      </div>

      {/* 오른쪽 메인 패널 */}
      <div className="w-3/4 p-6">{renderSection()}</div>
    </div>
  );
};

export default MyPage;