 var brojac=0;
      var inputn=document.getElementById("n");
inputn.addEventListener("keyup", function(event){
  if(event.keyCode===13){
  var vrijednostn=inputn.value;
  var djelioci = [];
  function divisors(n){
  for(i=1;i<=Math.sqrt(n);i++){
    if(n%i==0){
      if(n/i==i){ djelioci[brojac]=i; 
      brojac++;
      }else{ 
        
         djelioci[brojac]=i;
         djelioci[brojac+1]=n/i;
        brojac+=2;
      }
    }
  }
  return djelioci;
  };
 divisors(vrijednostn);
 djelioci.sort(function(a, b){return a - b});
 document.getElementById("ispis*").innerHTML+=1;
 var sigma=0;
 for(i=1;i<brojac;i++){
 document.getElementById("ispis*").innerHTML+=", "+djelioci[i];
 sigma+=djelioci[i];
}
document.getElementById("suma").innerHTML+=sigma;

document.getElementById("num").innerHTML+=brojac;
  };
});