const express = require('express');
const cors = require('cors');
const mysqlConnection = require('./db/mysqlConnection');
const connectMongoDB = require('./db/mongoConnection');
const teamRecruitmentRoutes = require('./routes/teamRecruitment');
const userRoutes = require('./routes/users');

const app = express();
const PORT = 5000;

// MongoDB 연결
connectMongoDB();

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 라우트 설정
app.use('/api/team-recruitment', teamRecruitmentRoutes);
app.use('/api/users', userRoutes);

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});