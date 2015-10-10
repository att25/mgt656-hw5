var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! Yes.');
});
app.get('/nickname', function(request, response){
    response.send('cautious-hedgehog');
});

app.listen(process.env.PORT || 4000);