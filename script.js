$(Document).ready(function(){
    $("button").click(function(){
        $("img").hide();
    });
    $("button").dblclick(function(){
        $("img").show();
    });
});

var name = 'scola';
var age = 27;
console.log(name +" "+age);
/*alert(name+" "+age);
prompt("what is your name");
function firstFunction(){
    var newAge=37
    document.write(name+" "+age + newAge);
};
function secondFunction(){
var name2 ="greetings";
document.getElementById("demo").innerHTML="Hello";
alert(name2);
prompt("how are you");
}*/
