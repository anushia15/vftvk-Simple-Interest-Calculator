function compute()
{
    
    var a = document.getElementById("principal").value;
    var p= parseInt(a);
    if(p<0){
      alert(" please enter a positive number");
      //document.getElementById("error").innerHTML=" please enter a positive number";
    }
    else if(a!=""){
      document.getElementById("error").innerHTML="";
    var x = document.getElementById("rate").value;
    var t= document.getElementById("time").value;

    var total= [(p*x*t)/100];
    console.log(total);
    var year= 202+t;

    
     var op="If you deposit  "+p+",<br/> at an interest rate of "+x+"%."
            +"<br/>You will receive an amount of "+total+",<br/>in the year "+year+"<br/>";

    document.getElementById("result").innerHTML = op;
    }
    else{
      alert(" please enter amount");
        
    }
}
 
function ranges(){
    
  var x = document.getElementById("rate").value;
  console.log(x);
  document.getElementById("val").innerHTML = x+'%';
}
