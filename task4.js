const intervalNumders = function(a, b){
  
    const intervalID = setInterval(function(){
      console.log(a);
      if(a == b){
        clearInterval(intervalID)
      }else {
        a++
      }
    }, 1000)
  }
  
  intervalNumders(5,15);