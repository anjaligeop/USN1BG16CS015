
function billtip(b)
{
    if(b<50){
tip=(20/100)*b;
    }
    else if(b>=50 && b<=200){
        tip=(15/100)*b;
    }
    else{
        tip=(10/100)*b;
    }
    return tip;
}
var tip1=billtip(124);
var bill1=124+tip1;
var tip2=billtip(48);
var bill2=48+tip2;
var tip3=billtip(268);
var bill3=268+tip3;

names=[tip1,tip2,tip3];
console.log(names);

billtot=[bill1,bill2,bill3];
console.log(billtot);