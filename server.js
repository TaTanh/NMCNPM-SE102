const express = require('express');
const path = require('path');

const app = express();

// Cho phép truy cập thư mục public như web root
app.use(express.static(path.join(__dirname, 'public')));

// Trang mặc định: tự mở login
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pages/login.html'));
});

// Chạy server ở port 3000
app.listen(3000, () => {
  console.log('Server đang chạy tại http://localhost:3000');
});
