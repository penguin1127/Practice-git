const express = require('express');
const cors = require('cors');
const teamRecruitmentRoutes = require('./routes/teamRecruitment');

const app = express();
const PORT = 5000;

// 미들웨어 설정
app.use(cors()); // React와의 CORS 문제 해결
app.use(express.json()); // JSON 요청 본문 파싱

// 라우트 설정
app.use('/api/team-recruitment', teamRecruitmentRoutes);

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});