
function myFunction() {
    document.getElementById("demo").innerHTML = "I have changed!";
  };
var mess=document.getElementById("demo");
var a = 'Hai rat dep troai';
var b = a.length;
mess.innerHTML= a;
function start(){
    setInterval(function(){
        
        
        mess.innerHTML=a.slice(0,b); ;
        console.log('Hai rat dep troaii')
        console.log(a)
        b=b-1;
        if (b==0){
            a='Hai rat dep troai';
            b=a.length+1;
        };
    },300)

    
};
