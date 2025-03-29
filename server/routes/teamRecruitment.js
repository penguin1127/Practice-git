const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// 팀 모집 공고 목록 가져오기
router.get('/', (req, res) => {
  connection.query('SELECT * FROM team_recruitment', (err, results) => {
    if (err) {
      console.error('데이터 가져오기 실패:', err);
      res.status(500).send('서버 오류');
    } else {
      res.json(results);
    }
  });
});

// 새 팀 모집 공고 추가
router.post('/', (req, res) => {
  const { title, details, location, time, max_members, created_by } = req.body;
  const query = `
    INSERT INTO team_recruitment (title, details, location, time, max_members, created_by)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  connection.query(query, [title, details, location, time, max_members, created_by], (err, results) => {
    if (err) {
      console.error('데이터 삽입 실패:', err);
      res.status(500).send('서버 오류');
    } else {
      res.status(201).json({ id: results.insertId, ...req.body });
    }
  });
});

module.exports = router;