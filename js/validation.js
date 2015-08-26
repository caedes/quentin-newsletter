$(document).ready(function() {
  var $email = $('input[name=EMAIL]');

  $email.focus(function(){
    $(this).removeClass('error');
  });

  $('form').on('submit', function(){
    var $empty = $('#empty');
    var $wrong = $('#wrong');

    var validated = true;

    // RESET ERRORS
    $empty.hide();
    $wrong.hide();

    var email = $email.val();

    switch (true) {
      case (email === ''):
        validated = false;
        $email.addClass('error');
        $('#empty').show();
        break;

      case (!/(.*)@(.*)\.(.*)/.test(email)):
        validated = false;
        $email.addClass('error');
        $('#wrong').show();
        break;
    }

    return validated;
  });
});
