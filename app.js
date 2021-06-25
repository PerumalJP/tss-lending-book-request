const express = require('express');

const app = express();
app.use(express.static('build'));

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})