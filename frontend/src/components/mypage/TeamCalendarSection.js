import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // 기본 스타일 적용
import '../../styles/Calendar.css'; // 커스텀 스타일 적용

const TeamCalendarSection = ({ isTeamLeader, addToPersonalCalendar, addTeamCalendarEvent }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([
    { date: '2025-04-05', title: '팀 연습' },
    { date: '2025-04-12', title: '친선 경기' },
    { date: '2025-04-20', title: '팀 회의' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ date: '', title: '' });

  // 일정 추가 핸들러
  const handleAddEvent = () => {
    const eventToAdd = { date: newEvent.date, title: newEvent.title };
    setEvents([...events, eventToAdd]); // 로컬 상태 업데이트
    if (addTeamCalendarEvent) {
      addTeamCalendarEvent(eventToAdd); // 부모 컴포넌트의 함수 호출
    }
    setNewEvent({ date: '', title: '' });
    setIsModalOpen(false);
  };

  // 날짜 선택 핸들러
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // 현재 월의 일정 필터링
  const currentMonthEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getMonth() === selectedDate.getMonth() &&
      eventDate.getFullYear() === selectedDate.getFullYear()
    );
  });

  // 캘린더 타일에 클래스 추가
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const hasEvent = events.some(
        (event) =>
          new Date(event.date).getDate() === date.getDate() &&
          new Date(event.date).getMonth() === date.getMonth() &&
          new Date(event.date).getFullYear() === date.getFullYear()
      );
      if (hasEvent) {
        return 'react-calendar__tile--has-event';
      }
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">팀 캘린더</h2>
      <div className="flex">
        {/* 왼쪽: 캘린더 */}
        <div className="w-2/3">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="react-calendar"
            tileClassName={tileClassName}
          />
          <div className="mt-4">
            <h3 className="text-lg font-bold">선택된 날짜</h3>
            <p>{selectedDate.toLocaleDateString()}</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 ${
              isTeamLeader ? '' : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!isTeamLeader} // 팀장이 아니면 버튼 비활성화
          >
            일정 추가
          </button>
          {!isTeamLeader && (
            <p className="text-red-500 mt-2">※ 팀장만이 변경 가능합니다.</p>
          )}
          <button
            onClick={() => addToPersonalCalendar(events)}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
          >
            팀 일정 개인 캘린더에 추가
          </button>
        </div>

        {/* 선 */}
        <div className="border-l border-gray-300 mx-4"></div>

        {/* 오른쪽: 일정 */}
        <div className="w-1/3">
          <h2 className="text-xl font-bold mb-4">{`${selectedDate.getMonth() + 1}월 일정`}</h2>
          <ul>
            {currentMonthEvents.length > 0 ? (
              currentMonthEvents.map((event, index) => (
                <li key={index} className="mb-2">
                  <span className="font-bold">{new Date(event.date).toLocaleDateString()}</span>: {event.title}
                </li>
              ))
            ) : (
              <p>이번 달에는 일정이 없습니다.</p>
            )}
          </ul>
        </div>
      </div>

      {/* 일정 추가 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">새 일정 추가</h2>
            <label className="block mb-2 font-bold">날짜</label>
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              className="border rounded-lg p-2 w-full mb-4"
            />
            <label className="block mb-2 font-bold">일정 제목</label>
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="border rounded-lg p-2 w-full mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-black font-bold py-2 px-4 rounded mr-2"
              >
                취소
              </button>
              <button
                onClick={handleAddEvent}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              >
                추가
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCalendarSection;