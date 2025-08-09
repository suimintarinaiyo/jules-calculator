const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Reactアプリケーションのビルド済みファイルを提供
app.use(express.static(path.join(__dirname, '../client/build')));

// APIルートなどをここに追加できます

// 他のすべてのGETリクエストに対してReactアプリを送信し、クライアントサイドのルーティングを処理させます
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
