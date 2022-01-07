const fs=require('fs');
// fs.readFile("test.txt",'utf8',(err,data)=>{
// if(err){
//     console.log(err);
//     return;
// }
// console.log(data);
// });

const content="How are you"
fs.writeFile("test.txt",content,err =>{
    if(err){
        console.err;
        return;
    }
})