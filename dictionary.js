
//Get element from HTML.
const text = document.getElementById("text");
const resultDiv = document.getElementById("resultDiv");
//stile the result div
resultDiv.style.maxWidth = "550px"
resultDiv.style.overflowY = "auto";

const button = document.getElementById("button");
const parent = document.getElementById("parent");



//Store the words inside of a object call dictionary
const dictionary = {
    //put the words that the dictionary gonna have inside of objects. 
   yes:{
        partOfSpeech: "noun",
        definitions: ["Used to give an affirmative response.","Used as a response to someone addressing one or otherwise trying to attract one's attention."],
   },
   panacea:{
        partOfSpeech: "noun",
        definitions: ["An answer or solution for all problems or difficulties."],
   },
   concatenation:{
        partOfSpeech: "noun",
        definitions: ["A series of interconnected or interdependent things or events."],
   },
   saw:{
        partOfSpeech: "verb",
        definitions:["Cut (something) using a saw.","Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."],
   },
   found:{
        partOfSpeech: "adjetive",
        definitions: ["Having been discovered by chance or unexpectedly.","(of a ship) Equipped; Supplied."],
   },
   crane:{
        partOfSpeech: "verb",
        definitions: ["Stretch out one's body or neck in order to see something.","Move (a heavy object) with a crane."],
   },
   minute:{
        partOfSpeech: "noun",
        definitions: ["A period of time equal to sixty seconds or a sixtieth of an hour.","A sixtieth of a degree of angular measurement (symbol: ʹ)."],
   },
   grotesque:{
        partOfSpeech: "adjetive",
        definitions: ["Comically or repulsively ugly or distorted."],
   },
   label:{
        partOfSpeech: "noun",
        definitions: ["A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."],
   },
   debacle:{
          partOfSpeech: "noun",
          definitions: ["A sudden and ignominious failure; a fiasco."],
   },
   //Add for me.
   element:{
          partOfSpeech: "noun",
          definitions: ["A part or aspect of something abstract, especially one that is essential or characteristic.","Each of more than one hundred substances that cannot be chemically interconverted or broken down into simpler substances and are primary constituents of matter. Each element is distinguished by its atomic number, i.e. the number of protons in the nuclei of its atoms."],
   },
   index:{
          partOfSpeech: "noun",
          definitions: ["An alphabetical list of names, subjects, etc., with references to the places where they occur, typically found at the end of a book.","An indicator, sign, or measure of something."],   
   },
   array:{
     partOfSpeech: "noun",
     definitions: ["An impressive display or range of a particular type of thing.","An ordered series or arrangement."],
   },
   variable:{
     partOfSpeech: "noun",
     definitions: ["A name storage location in programming.","A factor that can change in a experiment."],
   },
   class:{
     partOfSpeech: "noun",
     definitions: ["A blueprint for creating objects in programming.","A group of students learning together."],
   },
   function:{
     partOfSpeech: "noun",
     definitions: ["A block of code designed to perform a particular task.","A relationship or expression involving one or more variables."],
   },
   loop: {
     partOfSpeech: "noun",
     definitions: ["A programing construct that repeats a block of code.","A circular path or route."],
   },
   object:{
     partOfSpeech: "noun",
     definitions: ["A data structure that contains properties and methods.","A tangible item that can be perceived by the senses."],
   },
   string:{
     partOfSpeech: "noun",
     definitions: ["A sequence of characters used in programming.","A thin piece of material, like cord or thread."],
   },
   parameter:{
     partOfSpeech: "noun",
     definitions: ["A variable used to pass information into a function.","A limit or boundary that defines a system."],
   },
   repository:{
     partOfSpeech: "noun",
     definitions: ["A storage location for software packages or code.","A place where data is stored and managed."],
   },
   output:{
     partOfSpeech: "noun",
     definitions: ["The result produced by a program after processing input.","Data that is sent from a computer to a device or user."]
   },
   test:{
     partOfSpeech: "noun",
     definitions: ["A procedure to determine the quality, performance, or reliability of something.","An examination to assess knowledge or skill."],
   },
   attribute:{
     partOfSpeech: "noun",
     definitions: ["A characteristic or property of an HTML element, defined in the opening tag.","A quality or feature regarded as a characteristic of someone or something."],
   },
   style:{
     partOfSpeech: "noun",
     definitions: ["A set of CSSrules applied to HTML elements to define their appearence.","A manner of doing something, especially in a distinctive way."],
   },
   container:{
     partOfSpeech: "noun",
     definitions: ["An element that wraps around other elements to manage layout and style.","A structure used to hold and organize content."],
   },
   event:{
     partOfSpeech: "noun",
     definitions: ["An action or occurrence that is detected by the program.","An incident or occurrence that happens at a specific time."],
   },
   loop:{
     partOfSpeech: "noun",
     definitions: ["A programming construct that repeats a block of code.","A circular path or route."],
   },
   console:{
     partOfSpeech: "noun",
     definitions: ["An interface fo loggong information and debugging in JavaScript.","A terminal or command line interface used for rxecuting commands."],
   },
   integers:{
    partOfSpeech: "noun",
    definitions: ["A number that is not a fraction; a whole number.","A thing complete in itself."],
   },
   doubles:{
    partOfSpeech: "noun",
    definitions: ["any number with a decimal, can be negative or positive.","A thing which is twice as large as usual or is made up of two standard units or things."],
   },
}


//search for a word in the dictionary
function LookForWord (){
  
  //get the word from the user and convert it to lowercase
  let word = text.value.toLowerCase();

  //clear previous search results
  resultDiv.innerHTML = "";


  //check if the word is in the dictionary
  if(dictionary.hasOwnProperty(word)){
    let wordInfo = dictionary[word]; ///get the word's info from the dictionary
    
    //when the information apper the parent div make more big;
    parent.style.height = "auto";
    
    // create p element to store the part of speech of the word
    let partOfSpeech = document.createElement("p");
    partOfSpeech.style.textAlign = "left"; //align the text to the left.
    partOfSpeech.style.paddingLeft = "36px"; //add some padding for aesthetics.

    partOfSpeech.textContent = wordInfo.partOfSpeech; //Set the part of speech as the text
    resultDiv.appendChild(partOfSpeech); //Append the part of speech to result div.


    //create a list that show the definitions
    let definitionList = document.createElement("ul");
    definitionList.style.textAlign = "left"; //aline the text to the left
    definitionList.style.listStyleType = "none"; //delete the bullet points and just let the numbers
    
    //loop through the word's definitions and add each definiitions to the list.
    for (let i = 0; i <wordInfo.definitions.length; i++){
      let listItem = document.createElement("li"); //create a element to store each definition.
      //style the li element
      listItem.style.width = "600px";
      listItem.style.marginTop = "12px";

      listItem.textContent = (i + 1) + ". " + wordInfo.definitions[i]; //set the definitions text and put a pont next to the number.
      definitionList.appendChild(listItem); // Append each list item to the definition list.
    }

    resultDiv.appendChild(definitionList); // Append the entire definition list to result div.


  }
  else{
    //If the word is not found in the dictionary, display a message.
    let noWordMessage = document.createElement("p"); //create a p element to store the menssage
    //Set the inner HTML of the p element to include the message. The + is used to append the value of the "word" to the string
    noWordMessage.innerHTML = "Sorry, the word " + word + " is not in the dictionary";
    resultDiv.appendChild(noWordMessage);// This add the menssage to the result div and the user can see the menssage on the screen.
    
  }

}
//Add an event listener to the button so that the lookForWord funcion is called when clicked.
button.addEventListener("click", LookForWord );