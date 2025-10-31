import express from 'express';

const app = express();

app.use(express.static('public'));

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }));

let guests = [];

const PORT = 3002;

app.get('/', (req, res) => {
    // console.log('the meta dirname:', import.meta.dirname);
    // res.sendFile(`${import.meta.dirname}/views/home.html`)
    res.render('home')
})

app.post('/submit-form', (req, res) => {
    const guest = req.body;
    console.log(guest);
    guests.push(guest);
    res.render('confirm');
})

app.get('/admin', (req, res) => {
    res.render('admin', {guests})
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})