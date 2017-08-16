var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
  
   var articleone=
   {
       title: 'Article one | mustakim kureshi',
       heading: 'Article one',
       date: 'Aug 16 2017',
       content:`  <p>
            This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first articlhis is the content for my first article. This is the content for my first article This is the content for my first articleThis is the content for my first article.This is the content for my first article.  
    </p>
    <p>
           2nd paragrapfh This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first articlhis is the content for my first article. This is the content for my first article This is the content for my first articleThis is the content for my first article.This is the content for my first article.  
    </p>
    <p>
            3rd paragraph This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first articlhis is the content for my first article. This is the content for my first article This is the content for my first articleThis is the content for my first article.This is the content for my first article.  
    </p>`
    };
    
   function createTemplate(data){
       var titile = data.title;
       var date = data.date;
       var heading = data.heading;
       var conten = data.cntent;
       
       
    var htmlTemlate =`
        <html>
    <head>
        <title>
          ${title}
        </title>
      <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
        <a href="/">HOME</a>
        </div>
       <hr>
        <h3>
       ${heading}
       </h3>
       <div>
       ${date}
       </div>f
       ${content}
       </div>
    </body>
        
    </html>
  `;
  return htmlTemplet;
   }
app.get('/artical-one', function (req,res){

  res.send(createTemplet(articleOne));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
