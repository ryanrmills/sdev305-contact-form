import express from 'express';

const app = express();

app.use(express.static('public'));

const PORT = 3000;

app.get('/', (req, res) => {
    console.log('the meta dirname:', import.meta.dirname);
    res.sendFile(`${import.meta.dirname}/views/home.html`)
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})