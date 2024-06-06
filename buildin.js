
const fs=require("fs"
);
//synchronous
const a=fs.readFileSync("./sample.txt","utf-8")

//asynchronous 
fs.readFile("./sample.txt","utf-8",(err,data)=>{
    if(err){
        return err
    }
    console.log(data);
})
console.log(a);
console.log("i am first");



const b="this is made by nodejs"

// write the file or create the file

fs.writeFile("./sample2.txt",b,()=>{
    console.log("written");
});
