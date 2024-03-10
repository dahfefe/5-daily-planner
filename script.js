
// save reference to important DOM elements
var timeDisplayEl = $('#currentDay');
var nineEl = $('#hour-9');
var tenEl = $('#hour-10');
var elevenEl = $('#hour-11');
var twelveEl = $('#hour-12');
var thirteenEl = $('#hour-13');
var fourteenEl = $('#hour-14');
var fifthteenEl = $('#hour-15');
var sixteenEl = $('#hour-16');
var seventeenEl = $('#hour-17');

var textAreaNineInput = $("#text-area-9"); 
var textAreaTenInput = $("#text-area-10"); 
var textAreaElevenInput = $("#text-area-11"); 
var textAreaTwelveInput = $("#text-area-12"); 
var textAreaThirteenInput = $("#text-area-13"); 
var textAreaFourteenInput = $("#text-area-14"); 
var textAreaFifthteenInput = $("#text-area-15"); 
var textAreaSixteenInput = $("#text-area-16"); 
var textAreaSeventeenInput = $("#text-area-17"); 

// handle displaying the time
function displayTime() {
  var rightNow = dayjs().format('dddd, MMMM D');
  timeDisplayEl.text(rightNow);
}

/*
var projectDate = dayjs(project.Date);
var dueDateday = dayjs(projectDate); 
var daysBetween = dueDateDay.diff(today, "day");

if (daysBetween <= 0) {
  newRow.addClass("past");
  newRow.addClass("present");
  newRow.addClass("future");
}

*/

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

function handleSaveButton(event) {

  event.preventDefault();   

  var textNine = textAreaNineInput.val();
  var textTen = textAreaTenInput.val();
  var textEleven = textAreaElevenInput.val();
  var textTwelve = textAreaTwelveInput.val();
  var textThirteen = textAreaThirteenInput.val();
  var textFourteen = textAreaFourteenInput.val();
  var textFifthteen = textAreaFifthteenInput.val();
  var textSixteen = textAreaSixteenInput.val();
  var textSeventeen = textAreaSeventeenInput.val();

};

displayTime(); 