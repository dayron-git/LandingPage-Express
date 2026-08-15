const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, './views/index.html'));
})

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/about.html'));  
})

app.get('/shop',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/shop.html'));  
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname, './views/contact.html'));  
})