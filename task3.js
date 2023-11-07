const { log } = require('console');
const fs = require('fs');

fs.readFile('welcam.txt','utf-8',(err,data)=>{
    if (err) {
        console.log(err);
    }
    console.log(data);

}
)
console.log('second log');