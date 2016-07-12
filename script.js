$(document).ready(function(){
  console.log("JQuery is working.");

  // first variable dinoNamesList is being pulled from HTML
  // Created string of dino names instead of just referencing from HTML so I can append from JS.
  var dinoNamesList = $("ul.dinoNamesNotLearned li")
  var dinoNamesForEdits = ["Tyrannosaurus rex", "Velociraptor", "Allosaurus", "Spinosaurus", "Deinonychus", "Carnotaurus", "Apatosaurus", "Diplodocus", "Brachiosaurus", "Stegosaurus", "Ankylosaurus", "Triceratops", "Iguandon", "Parasaurolophus"]


  $("h1").on("click", function(){
  $(".dinoNamesNotLearned").append([dinoNamesForEdits]);
  })

  var memorized = []

//dinoDetails are objects in array with details on each of the dinos. Refering to it in if else.
  var dinoDetails = [
    {
      name: "Tyrannosaurus rex",
      question: "What is the correct answer?",
      correctAnswer: "A"
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

  dinoDetails[0].name
  dinoDetails[0].correctAnswers
  dinoDetails[1].correctAnswer


  //created a for loop. var i (i.e instance) is the starting point of the for loop.
  // i < dinoNames.length defins the conditions for the for loop (i must be less than the length of the dinoNames)
  //dinoNames.length needs to be more than the instance
  // Increase value (i++) each time code block in the loop has been executed.
  //dinoNames.eq(i) is basically calling the dinoNames. It's equivelant to dinoNames[]
  console.log(dinoNamesForEdits);
  for (var i = 0; i < dinoNamesForEdits.length; i++) {
    console.log(dinoNamesForEdits[i]);
  }



  $(".trexcardBack").hide();
  $(".option").click(function() {
    console.log( input );
    var input = $(this).html();
    if (input == dinoDetails[0].correctAnswer) {
      alert("You got it!");
      $(".trexcardBack").show();
      $(".trexcardFront").hide();
      //flip card to show details
    } else {
      alert("Sorry, that is incorrect.");
      // $(".trexcardBack").show();
      // $(".trexcardFront").hide();
      //flip card to show details
    }
  });


      $(".velocardBack").hide();
      $(".option").click(function() {
        console.log( input );
        var input = $(this).html();
        if (input == dinoDetails[0].correctAnswer) {
          alert("You got it!");
          $(".velocardBack").show();
          $(".velocardFront").hide();
        } else {
          alert("Sorry, that is incorrect.");
        }
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
