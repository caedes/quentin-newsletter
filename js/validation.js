$(document).ready(function() {
  $("button").click(function() {
    if(input.value === " ") {
      $("button").css("border-color", "#FF0000");
      $("button").css("display", "block");
    } else if (input.value)

    $(this).css("border-color","#FF0000");

  });


});

/* STRUCTURE

quand je clique sur boutton :

  if(email === " ") {
    ("mon-id").style.display = "block";
    ("mon-id").style.border = "red";
    action du bouton : false;

  } else if (email !=== /[A-Z]*[1-9]@) {

    ("mon-id").style.display = "block";
    ("mon-id").style.border = "red";
    action du bouton : false;

  } else if (email : deja abo) {

    ("mon-id").style.display = "block";
    ("mon-id").style.border = "red";
    action du bouton : false;

  } else {

}
