
function prime(number){
let factors=0;
for(let i=0;i<=number;i++)
{
  if(number%i==0)
{
  factor++;

}

if(facotrs==2){
   return true;
     }
      return false;
}

let answer=prime(13);
if(answer==true){
   console.log("prime");
}
else{
    console.log("Not prime"); 

