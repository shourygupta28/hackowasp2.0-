const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get('/',(req , res)=>{
	res.sendFile(__dirname + '/index.html');
});


const port = process.env.PORT || 3000;

app.listen(port , ()=>console.log(`running on ${port}`));
