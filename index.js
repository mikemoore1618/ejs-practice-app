const 
    express = require('express'),
    app = express(),
    PORT = 3000


app.listen(PORT, (err) => {
    console.log(err || `SERVER RUNNING ON ${PORT} :)` )
})