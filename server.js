const express = require('express');
const axios = require('axios');

const app = express();

app.locals.pageTitle = 'Asís María';

app.use(express.static('public'));

  app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/index.html');
  });

//const answer = require('./api-fetch.js');


const openaiUrl= 'https://api.openai.com/v1/engines';
const API_KEY = '';
const ORG_ID = 'org-P533oUUjUCTr4feSPvlg7VKW';
const inputText = "Some horses like to be outside";
  

const answer = (input) => {
  axios({
      url: openaiUrl,
      method: 'get',
      headers: {'Authorization': 'Bearer ' + API_KEY,
      'OpenAI-Organization': ORG_ID},
      withCredentials: true, // default is false
      responseType: 'json', // default
      responseEncoding: 'utf8', // default
    })
  
  axios({
    method: 'post',
    url: 'https://api.openai.com/v1/engines/text-davinci-002/completions',
    headers: {
      'Authorization': 'Bearer ' + API_KEY,
      'Content-Type': 'application/json'},
    data : {
      prompt: input,
      temperature: 0,
      max_tokens: 6
    },
  })
  .then(function (response) {
    console.log('----- REQUEST -----' + response)
    console.log(response.status)
    console.log(response.statusText)
    console.log(input + response.data.choices[0].text)
    return response.data.choices[0].text;
  });
  
}

answer(inputText)

app.listen(process.env.PORT || 8080, () => console.log('All OK'));