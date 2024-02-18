function sayhello(){
    console.log("hello");
    }
sayhello();
var saybye = function(){
    console.log("bye");
}
saybye();

function sing(song){
    console.log(song);
}
sing("laa dee daaaa");
sing("heya heya");
function multiply(a, b){
    if (a>10 || b>10){
        return "that's to hard";
    }
    else{
        return a*b;
    }
}
/*alert(multiply(3, 5));this one will output as a pop up in the screen*/
multiply();

/*to create an object follow the following pattern */
var user={
    name:"jezeba",
    age: 23,
    hobby:"maleqes",
    ismarried: "wish he were"

}