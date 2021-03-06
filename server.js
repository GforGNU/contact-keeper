const express = require('express');
const connectDB = require('./config/db');


const app = express();
//connect database 
connectDB();


//init middleware

app.use(express.json({ extended: false }));



app.get('/', (req,res)=>res.json({msg:'welcome to API'}));

//define our routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/profile', require('./routes/profile'));


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));