function rk(){

var a=document.getElementById("uu").value
var c="rkrajaganapathy@gmail.com";
var b=document.getElementById("yy").value
var d="rk25543183"



    if(a===c){
    
        console.log("corret");
        document.getElementById("ii").innerText=" Your user name is correct"
        document.getElementById("ii").style.color="green"
        document.getElementById("uu").style.border="2px solid green"
   }
   else{
        console.log("not cottet");
        document.getElementById("ii").innerText=" your user name not correct"
        document.getElementById("ii").style.color="red"
        document.getElementById("uu").style.border="2px solid red"
   }

   if(d===b){
    
    console.log("corret");
    document.getElementById("ij").innerText="your password correct"
    document.getElementById("ij").style.color="green"
    document.getElementById("yy").style.border="2px solid green"
}
  else{
    console.log("not cottet");
    document.getElementById("ij").innerText=" your password not correct"
    document.getElementById("ij").style.color="red"
    document.getElementById("yy").style.border="2px solid red"
}
}