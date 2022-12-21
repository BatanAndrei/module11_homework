function intervalNumbers(a, b) {
    let start = a;
  
    let timerId = setInterval(function() {
      console.log(start);
      if (start == b) {
        clearInterval(timerId);
      }
      start++;
    }, 1000);
  }

  intervalNumbers(5, 10);