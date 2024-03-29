
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

// reference to text area per time block
var textAreaNineInput = $("#text-area-9"); 
var textAreaTenInput = $("#text-area-10"); 
var textAreaElevenInput = $("#text-area-11"); 
var textAreaTwelveInput = $("#text-area-12"); 
var textAreaThirteenInput = $("#text-area-13"); 
var textAreaFourteenInput = $("#text-area-14"); 
var textAreaFifthteenInput = $("#text-area-15"); 
var textAreaSixteenInput = $("#text-area-16"); 
var textAreaSeventeenInput = $("#text-area-17"); 

// reference to each button per time block
var buttonNine = $("#button-9");
var buttonTen = $("#button-10");
var buttonEleven = $("#button-11");
var buttonTwelve = $("#button-12");
var buttonThirteen = $("#button-13");
var buttonFourteen = $("#button-14");
var buttonFifthteen = $("#button-15");
var buttonSixteen = $("#button-16");
var buttonSeventeen = $("#button-17");

// handle displaying the time
function displayTime() {
  var currentTime = dayjs().format('dddd, MMMM D');
  timeDisplayEl.text(currentTime);
}

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

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});

// local storage function to read data in local storage
function readDataFromStorage () {
  var data = localStorage.getItem('data');
  if (data) {
    data = JSON.parse(data);
  } else {
    data = [];
  }
  return data;
}

// function to save data to local storage
function saveDataToStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

// printing data from page and returning any saved data in local storage
function printEventData() {

  textAreaNineInput.empty();
  textAreaTenInput.empty();
  textAreaElevenInput.empty();
  textAreaTwelveInput.empty();
  textAreaThirteenInput.empty(); 
  textAreaFourteenInput.empty();
  textAreaFifthteenInput.empty();
  textAreaSixteenInput.empty();
  textAreaSeventeenInput.empty();

  colorCodeEachBlock();

  // Utilizes recall from local storage to repopulate last saved text based on corresponding key within the object
  var lastInputs = readDataFromStorage();
  console.log(lastInputs);
  if (lastInputs !== null) {
    textAreaNineInput.val(lastInputs.tNine);
    textAreaTenInput.val(lastInputs.tTen);
    textAreaElevenInput.val(lastInputs.tEleven);
    textAreaTwelveInput.val(lastInputs.tTwelve);
    textAreaThirteenInput.val(lastInputs.tThirteen);
    textAreaFourteenInput.val(lastInputs.tFourteen);
    textAreaFifthteenInput.val(lastInputs.tFifthteen);
    textAreaSixteenInput.val(lastInputs.tSixteen);
    textAreaSeventeenInput.val(lastInputs.tSeventeen);
  }

}

// function to color code each time block based on the present time of the day
function colorCodeEachBlock () {
  var timeBlocks = [ 9, 10, 11, 12, 13, 14, 15, 16, 17];
  var currentHour = dayjs().format('HH');
  console.log(currentHour);

  for (var i = 0; i < timeBlocks.length; i++) {  
    let hourDiv = document.getElementById(`hour-${timeBlocks[i]}`)
    console.log(hourDiv);
    if (currentHour > timeBlocks[i]) {
      hourDiv.setAttribute('class', 'row time-block past');
    } else if (currentHour === timeBlocks[i]) {
      hourDiv.setAttribute('class', 'row time-block present');
    } else {
      hourDiv.setAttribute('class', 'row time-block future');
    }
  }
}

// function for instructions when a button is clicked
function handleSaveButton(event) {
  event.preventDefault();   

  // code to erase all text inputs in time blocks
  var textNine = textAreaNineInput.val();
  var textTen = textAreaTenInput.val();
  var textEleven = textAreaElevenInput.val();
  var textTwelve = textAreaTwelveInput.val();
  var textThirteen = textAreaThirteenInput.val();
  var textFourteen = textAreaFourteenInput.val();
  var textFifthteen = textAreaFifthteenInput.val();
  var textSixteen = textAreaSixteenInput.val();
  var textSeventeen = textAreaSeventeenInput.val();
  
  // object formatted for better structure when data is saved in local storage
  var allBlocks = {
    tNine: textNine, 
    tTen: textTen,
    tEleven: textEleven,
    tTwelve: textTwelve,
    tThirteen: textThirteen,
    tFourteen: textFourteen,
    tFifthteen: textFifthteen,
    tSixteen: textSixteen,
    tSeventeen: textSeventeen,
  };

  var dataSave = readDataFromStorage();
  // dataSave.push(allBlocks);
  saveDataToStorage(allBlocks);
  console.log(allBlocks);

  printEventData(allBlocks);

};

// functions to call when a button is clicked
buttonNine.on('click', handleSaveButton);
buttonTen.on('click', handleSaveButton);
buttonEleven.on('click', handleSaveButton);
buttonTwelve.on('click', handleSaveButton);
buttonThirteen.on('click', handleSaveButton);
buttonFourteen.on('click', handleSaveButton);
buttonFifthteen.on('click', handleSaveButton);
buttonSixteen.on('click', handleSaveButton);
buttonSeventeen.on('click', handleSaveButton);

// functions called right away to print page (which includes retrieving data in local storage) and displaying updated time
displayTime(); 
printEventData();

// how do we use local storage to repost the object back into the correct timeBlocks?
// also, note that our local storage grows by a new array, how do we use the most recent object?