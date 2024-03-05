let val="Y";
let n=-1
while(val=="Y")
{
    let num1=Math.floor(Math.random()*10+1)
    if(num1!=n){
        console.log(num1)
    }
    n=num1;
    val=prompt("enter Y for Continue else press anything:")
}