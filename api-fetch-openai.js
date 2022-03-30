const API_KEY = '';
const ORG_ID = 'org-P533oUUjUCTr4feSPvlg7VKW';

const input = "Say that I like Asis";



//const ai = require('openai');

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: ORG_ID,
    apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion("text-davinci-002", {
    prompt: input,
    temperature: 0,
    max_tokens: 8,
  });


const  answer = response.data.choices[0].text;
console.log(input + response.data.choices[0].text);

// if "type": "module", is inclued in package.json it works because it is treated like a module