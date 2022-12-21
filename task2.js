let data = 10;

function nNumber(n){
  
  if(n >= 2 && n < 1000){
    
for(var i = 2; i < n; i++){
  
    if(n % i === 0){
      
      return 'Не простое число';
    }
  return 'Простое число';
    }
  }
   else if(n > 1000 || n < 2){
     
    return 'Данные не верны';
  }
}
  
console.log(nNumber(data));