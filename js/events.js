//define functions here
function getIt() {
  $('p').on('click', function () {
    alert('Hey!')
  })
}

function frameIt() {
  var img = $('img')
  $('img').on('load', function () {
    img.addClass('tasty')
  });
}

function pressIt() {
  $("form").on("keydown", function(key) {
    if (key.which == 71){
      alert('The G key was pressed');
    }
  });
}

function submit() {
  
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
});
