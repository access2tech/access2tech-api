const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.route('/')
  .get((req, res) => {
  res.send('home')
});

app.route('/inquire')
  .get((req, res) => {
    res.send('inquire')
  })
  .post((req, res) => {
    let inquiry = req.body
    // {data: Company name, company address, pickup address (if different), contact person, contact phone number, contact email, brief description of request}
    // {todo: post inquiry in db}
    res.redirect('/')
  });

app.listen(PORT, () => console.log(`APPLICATION LIVE ON ${PORT}`));
