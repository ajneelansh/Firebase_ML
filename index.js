const express  = require('express');
const app = express();

app.get("/health-checkup",function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username!="xyz" && password != "pqr"){
        res.status(400).json()
    }
    if(kidneyId != 1||kidneyId != 2){
        res.status(400).json()
    }
})


app.get("/kidney-checkup", function(req, res) {
    const kidneyId = req.headers.kidneyid;
    if (kidneyId !== "1" && kidneyId !== "2") {
        res.status(400).json();
    } else {
        // Perform kidney checkup logic here
        res.status(200).json({ message: "Kidney checkup successful" });
    }
});
app.listen(3000);