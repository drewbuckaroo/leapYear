$(document).ready(function(){
  $("#leapYear").submit(function(event) {
    event.preventDefault();
    let year = parseInt($("#year").val());
    if(isLeapYear(year)===true){
      $("#yes").show();
      $("#no").hide();
    }
    else if (isLeapYear(year)===false){
      $("#no").show();
      $("#yes").hide(); 
    }
    
  })
  function isLeapYear(num) {
    if ((num % 4 === 0) && (num % 100 !== 0) || (num % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
});