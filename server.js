var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
  
   var articles={
   'article-one':{
title: 'Article one | mustakim kureshi',
heading: 'Article one',
date: 'Aug 16 2017',
content:`<p>
     This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first articlhis is the content for my first article. This is the content for my first article This is the content for my first articleThis is the content for my first article.This is the content for my first article.  
</p>
<p>
     2nd paragrapfh This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first articlhis is the content for my first article. This is the content for my first article This is the content for my first articleThis is the content for my first article.This is the content for my first article.  
</p>
<p>
    3rd paragraph This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first articlhis is the content for my first article. This is the content for my first article This is the content for my first articleThis is the content for my first article.This is the content for my first article.  
</p>`
},
   'article-two':{
title: 'Article Two | mustakim kureshi',
heading: 'Article Two',
date: 'Aug 17 2017',
content:`  <p>
This is the content for my second article.
</p>
<p>
2nd paragrapfh This is the content for my second article.
</p>`,
   },
   'article-three':{
title: 'Article Three| mustakim kureshi',
heading: 'Article Three',
date: 'Aug 18 2017',
content:` 
<p>
This is the content for my thierd article.
</p>
<p>
2nd paragrapfh This is the content for my third article.
</p>`,
   }
   
};   function createTemplate (data) {
       var title = data.title ;
       var date = data.date ;
       var heading = data.heading ;
       var content = data.content ;
       
   var htmlTemplate=`
    
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
       </div>
       ${content}
       </div>
    </body>
        
    </html>
  `;
  return htmlTemplate;
}
var counter=0;
 app.get('/counter',function(req,res){
 counter=counter + 1;
 res.send(counter.toString());
 });
  app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
  
  
app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
