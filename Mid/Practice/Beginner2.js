<script>
//before arrow funtion 
const multiply =function(a,b){ return a, b }
//after array function
const multiply =(a,b) => a*b

const hello=() =>"Hello World !";

//problem1
 const person ={
    name : "John";
    greet:()=>{
        return this.name;

    }
 };
 console.log(person.greet()) ;


 //problem2
 greet:function(){
    return this.name;
 }




</script>