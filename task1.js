function amountOddEven(){
  
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, null, undefined];
    
    console.log( `Чётные: ${numbers.filter(elem => elem % 2 == 0).length}` );
    console.log( `Не чётные: ${numbers.filter(elem => elem % 2 !== 0).length}` );
    };
    
    amountOddEven();