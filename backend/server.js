import express from 'express';
const app = express();
import data from './data.js'

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get("/", (req,res) => {
    res.send("server is ready")
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})