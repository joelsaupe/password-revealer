(function(){

  revealPasswords();

  /**
  * Grabs all inputs and if the input type is set to 'password', then
  * it changes it to text so the user can see what is masked.
  */
  function revealPasswords() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type.toLowerCase() == 'password') {
        inputs[i].type = 'text';
      }
    }
  }

})();
  
