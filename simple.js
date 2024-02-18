var database=[
    {username:"sega ferfer",
     password:"amerohyeqer"
    },
    {username:"sega",
    password:"ameroh"
   },
   {username:"ferfer",
   password:"yeqer"
  }
];
var newsfeed=[
    {username:"shenkute",timeline:"letegna"},
    {username:"abebe",timeline:"how to eat beso"}
];

var usernameprompt=prompt("what is your username?");
var passwordprompt=prompt("what is your password?");

function isvalid(username, password){
    for(var i=0; i<database.length; i++){
        if(database[i].username===username && database[i].password===password){
              return true;
        }
    }
return false;    
}

function signin(user,password){
    if(isvalid(user, password)){
        console.log(newsfeed);
    }
       else {
        alert("sorry wrong username and password");
       }

}
signin (usernameprompt,passwordprompt);
