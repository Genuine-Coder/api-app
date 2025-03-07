const express = require("express");
const app = express();

app.use(express.json());
const cors = require('cors');
app.use(cors());
const PORT = 8000;

app.get("/",(req,res)=>{
    res.send("Yes dude, I am ready!");
});
app.get('/api/greet', (req, res) => {
    const name = req.query.name ;
    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});
app.listen(PORT,()=>{
    console.log(`Server is listing at ${PORT}`);

})