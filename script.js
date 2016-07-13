$(document).ready(function(){
  console.log("JQuery is working.");

  // first variable dinoNamesList is being pulled from HTML
  // Created string of dino names instead of just referencing from HTML so I can append from JS.
  var dinoNamesList = $("ul.dinoNamesNotLearned li")

  // var button = .eq(dinoNamesForEdits)
  $(".dinoNamesNotLearned").css("width", "275px");
  // car handleClickEvent = function(){
  //   console.log("it was clicked!")
  // }
  // button.on("click", handleClickEvent);


  var memorized = []

//dinoDetails are objects in array with details on each of the dinos. Refering to it in if else.
//Dynamic data goes below for each card. Static is in HTML
  var dinoCards = [
    {
      name: "Tyrannosaurus rex",
      question: "What is the correct answer?",
      correctAnswer: "A",
      options:[],
      img: "url"
    },
    {
      name: "Velociraptor",
      question: "What is the correct answer?",
      correctAnswer: "D"
    },
    {
      name: "Allosaurus",
      question: "What is the correct answer?",
      correctAnswer: "C"
    },
    {
      name: "Spinosaurus",
      question: "What is the correct answer?",
      correctAnswer: "C"
    },
    {
      name: "Deinonychus",
      question: "What is the correct answer?",
      correctAnswer: "A"
    },
    {
      name: "Carnotaurus",
      question: "What is the correct answer?",
      correctAnswer: "D"
    },
    {
      name: "Apatosaurus",
      question: "What is the correct answer?",
      correctAnswer: "D"
    },
    {
      name: "Diplodocus",
      question: "What is the correct answer?",
      correctAnswer: "C"
    },
    {
      name: "Brachiosaurus",
      question: "What is the correct answer?",
      correctAnswer: "B"
    },
    {
      name: "Stegosaurus",
      question: "What is the correct answer?",
      correctAnswer: "A"
    },
    {
      name: "Ankylosaurus",
      question: "What is the correct answer?",
      correctAnswer: "B"
    },
    {
      name: "Triceratops",
      question: "What is the correct answer?",
      correctAnswer: "B"
    },
    {
      name: "Iguandon",
      question: "What is the correct answer?",
      correctAnswer: "C"
    },
    {
      name: "Parasaurolophus",
      question: "What is the correct answer?",
      correctAnswer: "D"
    },

  ]




  //created a for loop. var i (i.e instance) is the starting point of the for loop.
  // i < dinoNames.length defins the conditions for the for loop (i must be less than the length of the dinoNames)
  //dinoNames.length needs to be more than the instance
  // Increase value (i++) each time code block in the loop has been executed.
  // added the array of dino names to the dino names not learned section using append, and then added a space in between each.

  // console.log(dinoNamesForEdits);

  for (var i = 0; i < dinoCards.length; i++) {
    // set the data-dino-index to the same value taht we are looping through. i represents incrementing value in loop.
    var paraTags = $("<p class='dinosaur' data-dino-index='" + i + "'></p>")
    paraTags.append(dinoCards[i].name)
    $(".dinoNamesNotLearned").append(paraTags)
    //$(this) is selecting the p tags, which is the object the event listener is attached to.
    // paraTags.click(function () {
    //   console.log(dinosaur.name);
    //   console.log(i + "?");
    //   changeCard(dinosaur)
    //   console.log($(this).html());
    //  $(this).detach();
    //  $(".dinoNamesLearned").append($(this))
    // })

  }
//created function that clicks on the name of the dinosaur
  $("p.dinosaur").click(function (){
    console.log("dino clicked")
    var dinoIndex = $(this).attr("data-dino-index")
    var dinoCard = dinoCards[dinoIndex]
    changeCard(dinoCard)
  })

  $(".memorizedButton").click(function (){
    console.log(" clicked")
    var dinoIndex = $(this).attr("data-dino-index")
    var dinoCard = dinoCards[dinoIndex]
    // moveMemorizedDino($(".dinoNamesLearned"))
  })

console.log($(".dinoNamesLearned"));
// function moveMemorizedDino($(".dinoNamesLearned")) {
//   console.log($(".dinoNamesLearned"))
// }
//create a function that moves dinasour name (p.dinosaur) to memorized section. need to first create a button saying something like, I memorized this.


//adding the object to the card front and back so that it shows info:
function changeCard(dinoCard) {
  console.log(dinoCard)
  $(".cardFront").html("<h1>"+ dinoCard.name +"</h1>" + "<p>" + dinoCard.question + "</p>")
  $(".cardBack").html("<h1>"+ dinoCard.correctAnswer +"</h1>")

}

//function created to flip the card and shw the answer:
$(document).ready(function() {
  $('.flashCard').on('click', function() {
    $('.flashCard').toggleClass('flipped');
  });
});


});

    // $(".").hide();
    // $(".").click(function() {
    //   var input = $(this).html();
    //   console.log( input );
    //   if (input == dinoDetails[0].correctAnswer) {
    //     alert("You got it!");
    //     $(".").show();
    //     $(".").hide();
    //   } else {
    //     alert("Sorry, that is incorrect.");
    //   });
    //
    //   $(".").hide();
    //   $(".").click(function() {
    //     var input = $(this).html();
    //     console.log( input );
    //     if (input == dinoDetails[0].correctAnswer) {
    //       alert("You got it!");
    //       $(".").show();
    //       $(".").hide();
    //     } else {
    //       alert("Sorry, that is incorrect.");
    //     });
    //
    //     $(".").hide();
    //     $(".").click(function() {
    //       var input = $(this).html();
    //       console.log( input );
    //       if (input == dinoDetails[0].correctAnswer) {
    //         alert("You got it!");
    //         $(".").show();
    //         $(".").hide();
    //       } else {
    //         alert("Sorry, that is incorrect.");
    //       });
    //
    //       $(".").hide();
    //       $(".").click(function() {
    //         var input = $(this).html();
    //         console.log( input );
    //         if (input == dinoDetails[0].correctAnswer) {
    //           alert("You got it!");
    //           $(".").show();
    //           $(".").hide();
    //         } else {
    //           alert("Sorry, that is incorrect.");
    //         });
    //
    //         $(".").hide();
    //         $(".").click(function() {
    //           var input = $(this).html();
    //           console.log( input );
    //           if (input == dinoDetails[0].correctAnswer) {
    //             alert("You got it!");
    //             $(".").show();
    //             $(".").hide();
    //           } else {
    //             alert("Sorry, that is incorrect.");
    //           });
    //
    //           $(".").hide();
    //           $(".").click(function() {
    //             var input = $(this).html();
    //             console.log( input );
    //             if (input == dinoDetails[0].correctAnswer) {
    //               alert("You got it!");
    //               $(".").show();
    //               $(".").hide();
    //             } else {
    //               alert("Sorry, that is incorrect.");
    //             });
    //
    //             $(".").hide();
    //             $(".").click(function() {
    //               var input = $(this).html();
    //               console.log( input );
    //               if (input == dinoDetails[0].correctAnswer) {
    //                 alert("You got it!");
    //                 $(".").show();
    //                 $(".").hide();
    //               } else {
    //                 alert("Sorry, that is incorrect.");
    //               });
    //
    //
