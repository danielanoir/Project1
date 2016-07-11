$(document).ready(function(){
console.log("JQuery is working.");

// first variable dinoNamesList is being pulled from HTML
// Created string of dino names instead of just referencing from HTML so I can append from JS.
var dinoNamesList = $("ul.dinoNamesNotLearned li")
var dinoNamesForEdits = ["Tyrannosaurus rex", "Velociraptor", "Allosaurus", "Spinosaurus", "Deinonychus", "Carnotaurus", "Apatosaurus", "Diplodocus", "Brachiosaurus", "Stegosaurus", "Ankylosaurus", "Triceratops", "Iguandon", "Parasaurolophus"]


console.log(dinoNamesForEdits);
//created a for loop. var i (i.e instance) is the starting point of the for loop.
// i < dinoNames.length defins the conditions for the for loop (i must be less than the length of the dinoNames)
//dinoNames.length needs to be more than the instance
// Increase value (i++) each time code block in the loop has been executed.
//dinoNames.eq(i) is basically calling the dinoNames. It's equivelant to dinoNames[]
for (var i = 0; i < dinoNamesForEdits.length; i++) {
//need to add the string so that it runs the names and not just the number.
  console.log(dinoNamesForEdits[i]);
}



$(".cardBack").hide();

$( ".multipleChoice" ).click(function() {
  var input = prompt("please type A or B");
  if (input == "A"){
    alert("You got it!");
    $(".cardBack").show();
    $(".flashCard").hide();
    //flip card to show details
  } else {
    alert("Sorry, that is incorrect.");
    $(".cardBack").show();
    $(".flashCard").hide();
    //flip card to show details
  }

});



});

 // create array of strings, each a dino name, so that I can write HTML from javascript (so we can append it to the html).
//  var allTheDinos = ["Tyrannosaurus rex", "Velociraptor", "Allosaurus", "Spinosaurus", "Deinonychus", "Carnotaurus", "Apatosaurus", "Diplodocus", "Brachiosaurus", "Stegosaurus", "Ankylosaurus", "Triceratops", "Iguandon", "Parasaurolophus"];
// console.log(allTheDinos[0]);

// $(".dinoNamesNotLearned").append(["Tyrannosaurus rex", "Velociraptor", "Allosaurus", "Spinosaurus", "Deinonychus,", "Carnotaurus", "Apatosaurus", "Diplodocus", "Brachiosaurus", "Stegosaurus", "Ankylosaurus", "Triceratops", "Iguandon", "Parasaurolophus"]);

  //first, make it so the for loop posts the flash card with the dinasaurs name
  //create for loop within each arrays string that goes through each multiple choice



// PSUEDO:
//
// All dino names are in learning section to start as arrays
// use for loops to go through array.
// create 4 buttons on each flashcard with multiple choice answers onclick.
// If user clicks on correct button, alert saying "You got it!"
//   then, card flips to show name and details of dino
//        need to have a card back
//        also, name of dino goes to memorized section
// Else user selects wrong answer, alert saying "Sorry, try again"
//   then, card flips to show name and details of dino
//   also, name of dino stays in learning section
//
//
