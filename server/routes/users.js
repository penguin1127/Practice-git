const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// 모든 회원 가져오기 (GET 요청)
router.get('/', (req, res) => {
  connection.query('SELECT id, name, email, created_at FROM users', (err, results) => {
    if (err) {
      console.error('회원 데이터를 가져오는 중 오류 발생:', err);
      res.status(500).send('서버 오류');
    } else {
      res.json(results);
    }
  });
});

// 새 회원 추가 (POST 요청)
router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send('모든 필드를 입력해야 합니다.');
  }

  // 중복 이메일 확인
  const checkQuery = 'SELECT * FROM users WHERE email = ?';
  connection.query(checkQuery, [email], (err, results) => {
    if (err) {
      console.error('중복 확인 중 오류 발생:', err);
      return res.status(500).send('서버 오류');
    }

    if (results.length > 0) {
      return res.status(409).send('이미 사용 중인 이메일입니다.');
    }

    // 중복이 없으면 새 회원 추가
    const insertQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    connection.query(insertQuery, [name, email, password], (err, results) => {
      if (err) {
        console.error('회원 추가 중 오류 발생:', err);
        return res.status(500).send('서버 오류');
      }

      res.status(201).json({ id: results.insertId, name, email });
    });
  });
});

module.exports = router;