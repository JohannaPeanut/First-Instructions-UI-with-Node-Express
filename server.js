const express = require('express');
const axios = require('axios');

const app = express();

const openaiUrl= 'https://api.openai.com/v1/engines';
const API_KEY = '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';
const ORG_ID = 'org-P533oUUjUCTr4feSPvlg7VKW';

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.locals.pageTitle = 'How to...';

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.render('index');
  });

app.get('/results', (req, res) => {
  //res.render('results')
  const term = "How to " + req.query.term;
  const urlHowToAI = 'http://3.68.197.29:8000/answers?user_prompt=' + term.replace(/ /g, "%20") + '&length=300';
  axios({
    url: urlHowToAI,
    method: 'get',
    headers: {'accept': 'application/json'},
  })
.then(function (response) {
  console.log('----- REQUEST -----' + response)
  console.log(response.status)
  console.log(response.statusText)
  console.log(response.data)
  res.render('results', { result : { resultAPI : response.data, question : req.query.term}})
});
});






function testHowToAI(term) {
  const urlHowToAI = 'http://3.68.197.29:8000/answers?user_prompt=' + term.replace(/ /g, "%20") + '&length=300';
  axios({
    url: urlHowToAI,
    method: 'get',
    headers: {'accept': 'application/json'},
  })
.then(function (response) {
  console.log('----- REQUEST -----' + response)
  console.log(response.status)
  console.log(response.statusText)
  console.log(response.data)
});
}

testHowToAI("make bread");

app.listen(process.env.PORT || 8080, () => console.log('All OK'));