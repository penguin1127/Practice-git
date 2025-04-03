import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // 기본 스타일 적용
import '../../styles/Calendar.css'; // 커스텀 스타일 적용

const CalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택된 날짜 상태
  const [activeStartDate, setActiveStartDate] = useState(new Date()); // 달력 상단에 표시된 달 상태
  const [events, setEvents] = useState([
    { date: '2025-04-03', title: '팀 미팅' },
    { date: '2025-04-09', title: '경기 일정' },
    { date: '2025-04-15', title: '팀 인원 모집 마감' },
  ]); // 일정 데이터
  const [personalCalendarEvents] = useState([
    { date: '2025-04-04', title: '개인 일정 1' },
    { date: '2025-04-10', title: '개인 일정 2' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [newEvent, setNewEvent] = useState({ date: '', title: '' }); // 새 일정 데이터

  const handleDateChange = (date) => {
    setSelectedDate(date); // 날짜 선택 시 상태 업데이트
  };

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setActiveStartDate(activeStartDate); // 달력 상단에 표시된 달 업데이트
  };

  const handleAddEvent = () => {
    setEvents([...events, { date: newEvent.date, title: newEvent.title }]); // 새 일정 추가
    setNewEvent({ date: '', title: '' }); // 입력 필드 초기화
    setIsModalOpen(false); // 모달 닫기
  };

  const currentMonthEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getMonth() === activeStartDate.getMonth() &&
      eventDate.getFullYear() === activeStartDate.getFullYear()
    );
  });

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const currentMonth = activeStartDate.getMonth();
      const currentYear = activeStartDate.getFullYear();

      if (date.getMonth() !== currentMonth || date.getFullYear() !== currentYear) {
        return 'react-calendar__tile--other-month';
      }

      const today = new Date();
      if (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      ) {
        return 'react-calendar__tile--today';
      }

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
      <h2 className="text-2xl font-bold mb-4">캘린더</h2>
      <div className="flex">
        {/* 왼쪽: 캘린더 */}
        <div className="w-2/3">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="react-calendar"
            tileClassName={tileClassName}
            onActiveStartDateChange={handleActiveStartDateChange}
          />
          <div className="mt-4">
            <h3 className="text-lg font-bold">선택된 날짜</h3>
            <p>{selectedDate.toLocaleDateString()}</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
          >
            일정 추가
          </button>
        </div>

        {/* 선 */}
        <div className="border-l border-gray-300 mx-4"></div>

        {/* 오른쪽: 일정 */}
        <div className="w-1/3">
          <h2 className="text-xl font-bold mb-4">{`${activeStartDate.getMonth() + 1}월 일정`}</h2>
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
          <h2 className="text-xl font-bold mt-4">개인 일정</h2>
          <ul>
            {personalCalendarEvents.map((event, index) => (
              <li key={index}>
                <span>{event.date}</span>: {event.title}
              </li>
            ))}
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

export default CalendarSection;