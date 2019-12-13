function palindrome(event) {
  event.preventDefault();
  var str = document.getElementById('input').value;
  var front = 0
  var back = str.length - 1
  var results = document.getElementById('results');
      while (back > front) {
        if ( str[front].match(/[\W_]/) ) {
          front++
          continue
        }
        if ( str[back].match(/[\W_]/) ) {
          back--
          continue
        }
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) 
        {results.innerHTML = 'THIS IS NOT A PALINDROME!';
        front++
        back--
      }

      else {results.innerHTML = 'THIS IS A PALINDROME!';}
      
      return false;
      } 
}