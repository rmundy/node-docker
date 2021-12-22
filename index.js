const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Hi Logan');
});

app.listen(8081, () => {
    console.log('Listening on 8081')
});