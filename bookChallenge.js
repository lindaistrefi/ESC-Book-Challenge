/*
async function getChallenge() {
  const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
const data = await res.json();

let challengeId = data.challenges.forEach(challenge => {
  console.log(challenge.title)
});
  

button.addEventListener("click", function(){

  paraTitle.value = challengeId; 
  challengeId.innerHTML = "";
  
  
  });
};

*/


/*början

async function getAPI(){
  const url = 'https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=2023-11-20&challenge=3';
  const response = await fetch(url);
  const data = await response.json();


  
// get params from query string
  const params = new URLSearchParams('?date=2023-11-20&challenge=3');

  console.log(params.getAll("date"));
  console.log(params.get("challenge"));

// får ut tillhörande challenge
 let paramObj = {};

 for(var value of params.keys()) {
paramObj["date"] = params.getAll(value);

console.log(paramObj);


//// bättre 

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get('date'));
for (const param of searchParams) {
  console.log(param);
}



 }



  /*
  for (const key of urlParams.keys()) {
      console.log(key);
  }
*/
/*
 for (const value of urlParams.values()) {
      console.log(value);
  }
*/


//my variables
const button = document.querySelector("#btn1");
const modalOne = document.querySelector(".bookModal__stepOne");
const btnTwo = document.querySelector(".bookModal__stepOne--btn");
const modalTwo = document.querySelector(".bookModal__stepTwo");
const bookTitle = document.querySelector(".bookModal__stepOne p");
const paraTitle = document.querySelector(".title");
const spanTitle = document.querySelector(".bookModal__stepOne span");
const btnThree = document.querySelector(".bookModal__stepTwo--btn");
const modalThree = document.querySelector(".bookModal__stepThree");
const btnClose = document.querySelector(".bookModal__stepThree--btn");
const modals = document.querySelector(".bookModal");
const htmlDoc = document.querySelector("html");

//eventlistener and function to open step 1 modal

button.addEventListener("click", function () {
  htmlDoc.style.cssText = "z-index: -1;";
  modals.style.cssText = "visibility:visible; display:flex; ";
  modalOne.style.cssText = "visibility:visible; display:flex;";
});

//eventlistener and function to open step 2 modal, close step 1

btnTwo.addEventListener("click", function () {
  modalOne.style.cssText = "visibility:hidden; display:none;";
  modalTwo.style.cssText = "visibility:visible; display: block;";

  modalTwo.prepend(bookTitle, paraTitle, spanTitle); // to add the first "title" sections that is same for both steps

  spanTitle.innerHTML = "(Step 2)"; // changing span från step 1 to step 2

  htmlDoc.style.cssText = "z-index: -1;";
  const styleTitle = {
    // creating a style object for the titles
    display: "inline-flex",
    margin: "1rem 1rem 2rem 0",
  };

  Object.assign(bookTitle.style, styleTitle); //applying to the titles
  Object.assign(paraTitle.style, styleTitle);
  Object.assign(spanTitle.style, styleTitle);
});

// eventlistener and function to open step 3 modal, close step 2

btnThree.addEventListener("click", function () {
  modalThree.style.cssText = "visibility:visible; display: block;";
  modalTwo.style.cssText = "visibility:hidden; display: none;";
  htmlDoc.style.cssText = "z-index: -1;";




});

//eventlistener on a-element, function to close step 3 (thank you-window)

btnClose.addEventListener("click", function () {
  modalThree.style.cssText = "visibility:hidden; display:none;";
  htmlDoc.style.cssText = "z-index: 1;";
  modals.style.cssText = "visibility:hidden; display:none;";
});



let inputDate = document.querySelector("#dateId");
  
inputDate.value = "";
// changing date-format to YYYY-MM-DD 
inputDate.addEventListener("click", function() {
 inputDate = new Date().toISOString().slice(0, 10);
});






