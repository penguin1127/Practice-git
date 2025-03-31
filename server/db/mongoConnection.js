// filepath: c:\github\First-repo\server\db\mongoConnection.js
const mongoose = require('mongoose');

const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/team_management', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB에 성공적으로 연결되었습니다!');
  } catch (error) {
    console.error('MongoDB 연결 실패:', error);
    process.exit(1);
  }
};

module.exports = connectMongoDB;