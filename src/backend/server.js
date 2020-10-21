const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3000;

app.use(express.static(path.join(__dirname, '../../build')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('index.html')
});

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.header('Content-Type'))
  res.json({isGood: true})
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})