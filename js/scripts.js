$(document).ready(function(){
  $("#leapYear").submit(function(event) {
    event.preventDefault();
    let year = parseInt($("#year").val());
    
    
  })
  function isLeapYear(year){
    return false;
  }
 alert(isLeapYear(1993));
});