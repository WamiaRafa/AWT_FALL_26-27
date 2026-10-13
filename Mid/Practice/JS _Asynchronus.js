//Asynchronus
console.log("Start")
setTimeout(() =>{
    console.log("Hello");

}, 3000);
 console.log("End");

//CallBack Function
function greet (name){
    console.log("Hello" +name);

}
function processUser(CallBack){
    CallBack("Rafa");
}    

processUser(greet);
//promise
let make= new Promise(function(resolve, reject){
resolve("Successful !");
});

make.then(function(result){
console.log(result);
})
 .catch(function(error){
    console.log(error);
 })

async  function  myfunction(){
    return "Hello JAVA SCRIPT";
}
