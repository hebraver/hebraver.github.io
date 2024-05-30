function date() {
    alert("Please make sure to put in a valid date that is not in the past")
    var bookDate=prompt("What day would you like to book us? Ex: 5/17/24")
    if (bookDate=="5/17/24" || bookDate==6/12/24 || bookDate==6/13/24) {
      alert("We are booked this day, try another")
    }
    else {
      alert("We will see you on "+bookDate)
    }
  }
  date()
  function address() {
    alert("We are only available within the state of Illinois, please look for other services if you are outside Illinois")
    var bookAddress=prompt("Where will we be DJing? Ex. 1989 North Example Street")
    alert("We will show up to "+bookAddress)
  }
  address()
 function tiempo(){
    alert("We will show up one hour in advance to set up");
    var time=prompt("What time does the party start? Ex: 8:00 pm");
    alert("The minimum hours we DJ for is 3 and our maximum amount of hours is 8");
    var hours=parseInt(prompt("How many hours will we DJ for? Ex: 4"));
    alert("We will show up an hour before "+time+" and DJ for "+hours+" hours");
    cost(hours)
 }
tiempo()
function cost(hours){
  alert("We have a $300 base charge plus 75 dollars for every hour we DJ");
  var cost=300+(75*hours);
  alert("Your total is "+cost);
}
cost(hours)