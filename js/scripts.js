$(document).ready(function(){
  $("#leapYear").submit(function(event) {
    event.preventDefault();
    let year = parseInt($("#year").val());
    
    
  })
  function isLeapYear(year) {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }
  alert(isLeapYear(1993));
});