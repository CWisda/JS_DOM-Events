console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

const newNode1 = document.getElementById("node1");
newNode1.textContent = 'I used getElementById("node1") method to access this';

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

const newNode2 = document.getElementsByClassName("node2");
newNode2[0].textContent =
  'I used the getElementByClassName("node2") method to access this';

 // key valued pair - need to get it at the index 

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

const newH3 = document.getElementsByTagName("h3");
    for(let item of newH3) {
        item.textContent = 'I used the getElementByTagName("h3") method to access all of these'
    }

    //another option
        // for(let i = 0; i < newH3.length; i++);
            // newH3[i].textContent = "I used the get......."

    //iterate over all the h3 elements and change each one's text

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
 
     let newParagraph = document.createElement("p");
     newParagraph.textContent =
       "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method

   let parentDiv = document.querySelector("#parent");
   parentDiv.appendChild(newParagraph);

  //could also use document.getElementById("parent")

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
// BONUS: Add a link href to the <a>

        let newA = document.createElement("a");  //create new element
        newA.textContent = "I am a <a> tag"; // including text
          newA.href =
            "https://https://google.com"; // add href link with element
          newA.target = "_blank"; // adding link to open in new tab
        parentDiv.insertBefore(newA, newParagraph);  // insertBefore must have two parameters (new element (newA),  previous element(newParagrapch)) -  must be linked to the parent (ex parent.insertBefore)





/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

    let exercise3Container = document.querySelector("#exercise-container3");
    let oldChild = document.querySelector("#N1");

    let newChildNode = document.createElement("p");
    newChildNode.textContent = "New Child Node";

    exercise3Container.replaceChild(newChildNode, oldChild);

// TODO: Remove the "New Child Node"

// receive a call back fuction and time in milliseconds - delay
// calls the function later
    setTimeout(() => {
        exercise3Container.removeChild(newChildNode);
    }, 5000)


    // another option 
        //newChildNode.remove();

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element
const parentOfList = document.getElementById("container");
let ul = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) => {
  let li = document.createElement("li"); // create
  li.textContent = item; // modify
  // TODO: Append the new list items to the unordered list element
  ul.appendChild(li); // append the item
})
// TODO: Append the unordered list to the `div#container` under exercise 4
document.querySelector("#container").appendChild(ul);

/*
//another way of doing this: 

const parentOfList = document.getElementById("container");
let ul = document.createElement("ul");
for (let i = 0; list.length; i++) {
    let li = document.createElement("li");
    li.textContent = list[i];
    ul.append(li);
}
parentOfList.append(ul);
*/


/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show () {
        let modalContainer = document.createElement("div");
    //clicking button add onClick to alert user
        let modalCard = document.createElement("div");
        // add content to modal and modal card
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let closeBtn = document.createElement("div");
        h2.textContent = "This is Totally Modalur Dude";
        p.textContent = "Role Modal Life";
        closeBtn.textContent = "CLOSE";

        // add event listener to close button to remove modal container
        closeBtn.addEventListener("click", () => {
            document.body.removeChild(modalContainer);
        });

        modalCard.append(h2, p, closeBtn);
        //add css
        modalCard.classList.add("modal-card");

        modalContainer.appendChild(modalCard);
        //add css
        modalContainer.id = "modal";
          
        document.body.appendChild(modalContainer);
}
    let button = document.querySelector("#btn");
    button.addEventListener("click", show);


// div modal Container -> div modal Card -> modal




    /*
    steps in JS
    1. select the button
    2. Add an event listner to the button (see previous lecture)
    3. when the button gets clicked, do the following:
        4. create a div
        5.give that div an id of "modal"
        6. create a second div
        7. give that second div a class of modal-card(.classList.add())
        8.create a paragraph tag
        9.give that paragraph some text
        10. append the paragraph in the second div
        11. append the second div into the first div
        12. append the first div onto the page (wherever you'd like)


    */