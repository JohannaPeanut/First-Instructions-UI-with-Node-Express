# 1st Instructions - How To text Generator UI

Link: https://how-to-generator.herokuapp.com/

About: The project with the working title "1st Instructions" deals with questions of human and machine learning, with artificial intelligence and aspects of "becoming human".

Enter a "How to"-question and an AI will generate a tutorial text in real time.

Text generation based on fine-tuend GTP2 model with a Database of scraped tutorials (from wikiHow) and YouTube tutorials (text via subtitles).

UI using JavaScript, Handlebars, Express.js, Node.js, HTML, CSS, REST API
Other technolgies used in the project: Python, PyTorch, GTP2, Youtube API among others

### Pages

Each is going to render a view. One template per page.

- / - Home page. Displays an empty frame, button, info-link
- /results - displays fetched image from database

### Route Handlers

- GET - '/' - render Home page
- POST - '/results'
  - API call to hosted fine-tuned GTP2 - generates new text
  - displays this text
