var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' :{
        title:   'article one i aashish jain',
        heading: 'article one',
        date:    'march 21 2018',
        contant:`                                             
                     
                     <p>
                        this is the convient for my one this is the convient for my one  this is the convient for my one  this is the convient for my one this is the convient for my one this is the convient for my one this is the convient for my one this is the convient for my one. 
                    
                    </p>
                    <p>
                        this is the convient for my one this is the convient for my one  this is the convient for my one  this is the convient for my one this is the convient for my one this is the convient for my one this is the convient for my one this is the convient for my one. 
                    
                    </p>
                    <p>
                        this is the convient for my one this is the convient for my one  this is the convient for my one  this is the convient for my one this is the convient for my one this is the convient for my one this is the convient for my one this is the convient for my one. 
                    
                    </p>`
                   },
    'article-two' : {
        title:   'article two i aashish jain',
        heading: 'article two',
        date:    'march 22 2018',
        contant:`                                             
                     
                     <p>
                        this is the convient for my two
                    </p>
                   `
                   },
    'article-three' : { 
        title:   'article three i aashish jain',
        heading: 'article three',
        date:    'march 23 2018',
        contant:`                                             
                     
                     <p>
                        this is the convient for my one this is the convient for my one  this is the convient for my one  this is the convient for my one this is the convient for my one this is the convient for my one this is the convient for my one this is the convient for my one. 
                    
                    </p>
                    `
                   }
};
function createTemplate (data) {
    var title   = data.title;
    var date    = data.date;
    var heading = data.heading;
    var contant = data.contant;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" contant="width=device-width,intial-scale=1"/>
             <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                <o href="/">Home</o>
                </div>
                <hr/>
                <h3>
                     ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                 ${contant}
                </div>
            </div>
        </body>
    </html>
    
     `;
      return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:article-Name',function(req,res) {
    //articleName==article-one
    //articles[articleName]== {} contant object for article one
    var articleName = req.parans.articleName;
    res.send(createTemplate(articles[articleName]));
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
