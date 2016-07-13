$(document).ready(function(){
  console.log("JQuery is working.");


  $(".dinoNamesNotLearned").css({"width":"275px","font-size":"30px","font-family":"'Comic Sans MS', cursive, sans-serif","background":"rgba(18, 27, 38, 0.4)"});
  $(".dinoNamesLearned").css({"font-size":"30px","font-family":"'Comic Sans MS', cursive, sans-serif","background":"rgba(18, 27, 38, 0.4)"});
  $(".memorizedButton").css({"border-style":"outset","font-weight":"bold","color":"black","font-size":"40px","font-family":"'Comic Sans MS', cursive, sans-serif","background-color":"#ddbd3e","border-color":"grey","margin":"20px","padding":"10px"});

//dinoDetails are objects in array with details on each of the dinos. Refering to it in if else.
//Dynamic data goes below for each card. Static is in HTML
  var dinoCards = [
    {
      name: "Tyrannosaurus rex",
      question: "What is the correct answer?",
      correctAnswer: "A",
      options:[],
      img: "trex.jpg"
    },
    {
      name: "Velociraptor",
      question: "What is the correct answer?",
      correctAnswer: "D",
      img: "velociraptor.jpg"
    },
    {
      name: "Allosaurus",
      question: "What is the correct answer?",
      correctAnswer: "C",
      img: "allosaurus.jpg"
    },
    {
      name: "Spinosaurus",
      question: "What is the correct answer?",
      correctAnswer: "C",
      img: "spinosaurus.jpg"
    },
    {
      name: "Deinonychus",
      question: "What is the correct answer?",
      correctAnswer: "A",
      img: "deinonychus.jpg"
    },
    {
      name: "Apatosaurus",
      question: "What is the correct answer?",
      correctAnswer: "D",
      img: "apatosaurus.jpg"
    },
    {
      name: "Diplodocus",
      question: "What is the correct answer?",
      correctAnswer: "C",
      img: "diplodocus.jpg"
    },
    {
      name: "Brachiosaurus",
      question: "What is the correct answer?",
      correctAnswer: "B",
      img: "brachiosaurus.jpg"
    },
    {
      name: "Stegosaurus",
      question: "What is the correct answer?",
      correctAnswer: "A",
      img: "stegosaurus.jpg"
    },
    {
      name: "Ankylosaurus",
      question: "What is the correct answer?",
      correctAnswer: "B",
      img: "ankylosaurus.jpg"
    },
    {
      name: "Triceratops",
      question: "What is the correct answer?",
      correctAnswer: "B",
      img: "triceratops.jpg"
    },
    {
      name: "Iguandon",
      question: "What is the correct answer?",
      correctAnswer: "C",
      img: "iguandon.jpg"
    },
    {
      name: "Parasaurolophus",
      question: "What is the correct answer?",
      correctAnswer: "D",
      img: "parasaurolophus.jpg"
    },

  ]

  //created a for loop. var i (i.e instance) is the starting point of the for loop.
  // i < dinoNames.length defins the conditions for the for loop (i must be less than the length of the dinoNames)
  //dinoNames.length needs to be more than the instance
  // Increase value (i++) each time code block in the loop has been executed.
  // added the array of dino names to the dino names not learned section using append, and then added a space in between each.

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
  //adding the object to the card front and back so that it shows info:
  function changeCard(dinoCard) {
    console.log(dinoCard)
    $(".cardFront").html("<h1 class='heading'>"+ dinoCard.name +"</h1>" + "<p class='question'>" + dinoCard.question + "</p>" + "<img class='animals' src='" + dinoCard.img + "'>")
    $(".cardBack").html("<h1 class='answer'>"+ dinoCard.correctAnswer +"</h1>")
  }



  $(".memorizedButton").click(function() {
    if ($(".cardFront h1").text() === dinoCards[0].name) {
      $(".dinoNamesLearned").append("<p>Tyrannosaurus rex</p>")
      $("dinosaur").attr("data-dino-index").remove();
    }
  })
  $(".memorizedButton").click(function() {
    if ($(".cardFront h1").text() === dinoCards[1].name) {
      $(".dinoNamesLearned").append("<p>Velociraptor</p>")
      $("dinosaur").attr("data-dino-index").remove();
    }
  })
  $(".memorizedButton").click(function() {
    if ($(".cardFront h1").text() === dinoCards[2].name) {
      $(".dinoNamesLearned").append("<p>Allosaurus</p>")
      $("dinosaur").attr("data-dino-index").remove();
    }
  })
  $(".memorizedButton").click(function() {
    if ($(".cardFront h1").text() === dinoCards[3].name) {
      $(".dinoNamesLearned").append("<p>Spinosaurus</p>")
      $("dinosaur").attr("data-dino-index"[0]).removeAttr();
    }
  })
  $(".memorizedButton").click(function() {
    if ($(".cardFront h1").text() === dinoCards[4].name) {
      $(".dinoNamesLearned").append("<p>Deinonychus</p>")
      $("dinosaur").attr("data-dino-index").remove();
    }
  })
  $(".memorizedButton").click(function() {
    if ($(".cardFront h1").text() === dinoCards[5].name) {
      $(".dinoNamesLearned").append("<p>Apatosaurus</p>")
      $("dinosaur").attr("data-dino-index").remove();
    }
  })
  $(".memorizedButton").click(function() {
    if ($(".cardFront h1").text() === dinoCards[6].name) {
      $(".dinoNamesLearned").append("<p>Diplodocus</p>")
      $("dinosaur").attr("data-dino-index").remove();
    }
  })
  $(".memorizedButton").click(function() {
    if ($(".cardFront h1").text() === dinoCards[7].name) {
      $(".dinoNamesLearned").append("<p>Brachiosaurus</p>")
      $("dinosaur").attr("data-dino-index").remove();
    }
  })
  $(".memorizedButton").click(function() {
    if ($(".cardFront h1").text() === dinoCards[8].name) {
      $(".dinoNamesLearned").append("<p>Stegosaurus</p>")
      $("dinosaur").attr("data-dino-index").remove();
    }
  })
  $(".memorizedButton").click(function() {
    if ($(".cardFront h1").text() === dinoCards[9].name) {
      $(".dinoNamesLearned").append("<p>Ankylosaurus</p>")
      $("dinosaur").attr("data-dino-index").remove();
    }
  })
  $(".memorizedButton").click(function() {
    if ($(".cardFront h1").text() === dinoCards[10].name) {
      $(".dinoNamesLearned").append("<p>Triceratops</p>")
      $("dinosaur").attr("data-dino-index").remove();
    }
  })
  $(".memorizedButton").click(function() {
    if ($(".cardFront h1").text() === dinoCards[11].name) {
      $(".dinoNamesLearned").append("<p>Iguandon</p>")
      $("dinosaur").attr("data-dino-index").remove();
    }
  })
  $(".memorizedButton").click(function() {
    if ($(".cardFront h1").text() === dinoCards[12].name) {
      $(".dinoNamesLearned").append("<p>Parasaurolophus</p>")
      $("dinosaur").attr("data-dino-index").remove();
    }
  })

//function created to flip the card and shw the answer:
$(document).ready(function() {
  $('.flashCard').on('click', function() {
    $('.flashCard').toggleClass('flipped');
  });
});


});
