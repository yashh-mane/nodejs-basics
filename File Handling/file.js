const fs = require ('fs');


//Synchronous 
fs.writeFileSync('./test.txt', "Hey There")


//Async
fs.writeFile('./test.txt', "Hey There", (err) => {})


//Sync    
const read = fs.readFileSync('./test.txt', "utf-8");
console.log(read);    

//Async

fs.readFile("./test.txt", "utf-8" , (err , readData) => {
if(err){
         console.log(err);

     }
    else{
        console.log(readData);
    }
 })