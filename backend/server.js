 const express = require('express');
 const app = express();
 PORT = 3000;

 app.use(express.json());

let data = ['narita']

// app.get('/', (req, res) =>{
//     res.send('ยินดีต้อนรับสู่เซิร์ฟเวอร์ของเรา!');
// } );

 app.get('/snackslist', (req, res) =>{
     res.send('รายการขนม: ข้าวเกรียบ, มันฝรั่งทอด, ลูกอม, ช็อกโกแลต');
 } );

 app.get('/dashboard', (req, res) =>{
    res.send('เย้ เย้ เย้!');
} );

 app.get('/api/data', (req, res) =>{
    console.log(' this one was for data ')
    res.send(data);
} );

 app.post('/api/data', (req, res) => {
    const newEntry = req.body
    res.sendStatus(201)
    data.push(newEntry.name)
} )


 app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
 });
