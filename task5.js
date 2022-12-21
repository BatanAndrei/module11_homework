const degree = (x, n) => {
  
    let result = x;
      
        for (let i = 1; i < n; i++) {
          
        result *= x;
      }
      console.log(result);      
    };
    
    degree(3,3);