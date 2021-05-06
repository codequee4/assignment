let number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log( 'number:',number);
let array=number.reverse();
console.log('array:',array);
console.log(number[2]());
number[8]='Armstrong';



function temperaturetest(temperature){
    var results;
    if(temperature == 33){
        results = 'normal temperature';
    }
    else if (temperature >=35){
    results ='watch your temperature';
    }
   else if (temperature >37){
       results='test for covid 19';
   }
   else{
       results='covid 19 negative';
   }
   return results;
}
   