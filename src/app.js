
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/',routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
	console.log(`SERVER RUNNING ON PORT : ${PORT}`);
});