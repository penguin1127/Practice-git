// 임시 데이터베이스
const tempDB = {
  teams: [
    { id: 1, title: "서울 강남구 조기축구 모집", location: "서울 강남구", time: "07:00", remaining: 3, status: "신청 가능" },
    { id: 2, title: "부산 해운대구 조기축구 모집", location: "부산 해운대구", time: "08:30", remaining: 0, status: "마감" },
    { id: 3, title: "서울 송파구 조기축구 모집", location: "서울 송파구", time: "06:30", remaining: 5, status: "신청 가능" },
    { id: 4, title: "대구 중구 조기축구 모집", location: "대구 중구", time: "09:00", remaining: 2, status: "신청 가능" },
    { id: 5, title: "인천 남동구 조기축구 모집", location: "인천 남동구", time: "07:30", remaining: 4, status: "신청 가능" },
    { id: 6, title: "광주 서구 조기축구 모집", location: "광주 서구", time: "08:00", remaining: 1, status: "마감" },
    { id: 7, title: "대전 유성구 조기축구 모집", location: "대전 유성구", time: "06:00", remaining: 3, status: "신청 가능" },
    { id: 8, title: "울산 남구 조기축구 모집", location: "울산 남구", time: "09:30", remaining: 0, status: "마감" },
    { id: 9, title: "서울 종로구 조기축구 모집", location: "서울 종로구", time: "07:00", remaining: 2, status: "신청 가능" },
    { id: 10, title: "부산 북구 조기축구 모집", location: "부산 북구", time: "08:00", remaining: 5, status: "신청 가능" },

    // 추가된 팀 데이터
    { id: 11, title: "서울 강남구 조기축구 모집 (오전)", location: "서울 강남구", time: "06:00", remaining: 1, status: "마감" },
    { id: 12, title: "서울 강남구 조기축구 모집 (저녁)", location: "서울 강남구", time: "19:00", remaining: 4, status: "신청 가능" },
    { id: 13, title: "부산 해운대구 조기축구 모집 (오전)", location: "부산 해운대구", time: "06:30", remaining: 2, status: "신청 가능" },
    { id: 14, title: "부산 해운대구 조기축구 모집 (저녁)", location: "부산 해운대구", time: "20:00", remaining: 0, status: "마감" },
    { id: 15, title: "서울 송파구 조기축구 모집 (주말)", location: "서울 송파구", time: "10:00", remaining: 3, status: "신청 가능" },
    { id: 16, title: "서울 송파구 조기축구 모집 (평일)", location: "서울 송파구", time: "18:00", remaining: 0, status: "마감" },
    { id: 17, title: "대구 중구 조기축구 모집 (오전)", location: "대구 중구", time: "07:00", remaining: 5, status: "신청 가능" },
    { id: 18, title: "대구 중구 조기축구 모집 (저녁)", location: "대구 중구", time: "19:30", remaining: 1, status: "마감" },
    { id: 19, title: "서울 강남구 조기축구 모집 (심야)", location: "서울 강남구", time: "23:00", remaining: 2, status: "신청 가능" },
    { id: 20, title: "서울 강남구 조기축구 모집 (새벽)", location: "서울 강남구", time: "05:00", remaining: 0, status: "마감" },
  ],
  regions: [
    { id: 1, name: "서울" },
    { id: 2, name: "부산" },
    { id: 3, name: "대구" },
    { id: 4, name: "인천" },
    { id: 5, name: "광주" },
    { id: 6, name: "대전" },
    { id: 7, name: "울산" },
  ],
};

export default tempDB;