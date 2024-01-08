const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, 'build')));

// 静态文件服务

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 通配符路由
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
