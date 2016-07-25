/// James' comments will have 3 slashes
/// Overall, you've overcome significant obstacles in getting the project this far!
/// I want congratulate you on your successes and also suggest areas to impove.
/// Please see the comments below for suggestions! 

$(document).ready(function(){
  console.log("JQuery is working.");

  /// I would just add this css code to the css, rather than adding it with jQuery
  $(".dinoNamesNotLearned").css({"width":"275px","font-size":"30px","font-family":"'Trocchi', serif","background":"rgba(18, 27, 38, 0.4)"});
  $(".dinoNamesLearned").css({"font-size":"30px","font-family":"'Trocchi', serif","background":"rgba(18, 27, 38, 0.4)"});
  $(".memorizedButton").css({"border-style":"outset","font-weight":"bold","color":"black","font-size":"30px","font-family":"'Trocchi', serif","background-color":"grey","border-color":"grey","margin":"20px","padding":"10px"});

//dinoDetails are objects in array with details on each of the dinos. Refering to it in if else.
//Dynamic data goes below for each card. Static is in HTML

///Excellent use of a data structure (an array of objects) to store all your project's data
  var dinoCards = [
    {
      name: "Tyrannosaurus Rex",
      question: "What did they eat?",
      correctAnswer: "The Tyrannosaurus Rex ate meat. They also weighed 8 tons and they were up to 40 feet long." + "</br>" + "</br>" + "The largest T-Rex tooth found was 12 inches long.",
      img: "trex.jpg"
    },
    {
      name: "Velociraptor",
      question: "In what period did the Velociraptor exist?",
      correctAnswer: "In the Cretaceous Period, which was about 73 million years ago."+ "</br>" + "</br>" +"Velociraptor's were about the size of a turkey.",
      img: "velociraptor.jpg"
    },
    {
      name: "Allosaurus",
      question: "Where in the world were the Allosaurus?",
      correctAnswer: "Allosaurus fossils have been mostly found in the western United States."+ "</br>" + "</br>" + "Allosaurus dinosaurs were meat eaters and had teeth with edges like saws.",
      img: "allosaurus.jpg"
    },
    {
      name: "Spinosaurus",
      question: "Where in the world did the Spinosaurus live?",
      correctAnswer: "The Spinosaurus lived in North Africa." + "</br>" + "</br>" + "The Spinosaurus may have been the largest meat eater.",
      img: "spinosaurus.jpg"
    },
    {
      name: "Deinonychus",
      question: "What does the name Deinonychus mean?",
      correctAnswer: "Deinonychus means terrible claw and it refers to the hooked claw found on their hind feet.",
      img: "deinonychus.jpg"
    },
    {
      name: "Apatosaurus",
      question: "What is another common name for Apatosaurus?",
      correctAnswer: "Brontosaurus. They had long tales that counter balanced their long necks.",
      img: "apatosaurus.jpg"
    },
    {
      name: "Diplodocus",
      question: "In what period did the Diplodocus live?",
      correctAnswer: "The Jurassic Period about 150 million years ago." + "</br>" + "</br>" + "Diplodocus had a long tail which contained around 80 vertebrae.",
      img: "diplodocus.jpg"
    },
    {
      name: "Brachiosaurus",
      question: "Where were the first fossils found?",
      correctAnswer: "The first fossils were found in the Colorado River." + "</br>" + "</br>" + "The weight of Brachiosaurus has been estimated between 30 and 45 metric tons.",
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
/// I'd remove this trailing comma below
    },
  ]


  //created a for loop. var i (i.e instance) is the starting point of the for loop.
  // Increase value (i++) each time code block in the loop has been executed.
  for (var i = 0; i < dinoCards.length; i++) {
    // set the data-dino-index to the same value taht we are looping through. i represents incrementing value in loop.
    var paraTags = $("<p class='dinosaur' data-dino-index='" + i + "'></p>")
    paraTags.append(dinoCards[i].name)
    $(".dinoNamesNotLearned").append(paraTags)
  }

  //adding the object to the card front and back so that it shows info:
  ///I would change the IthefunctionExpectParameter to something shorter-- think about what the purpose of the parameter that you are passing in here

  ///awesome use of the data structure you defined earlier
  function changeCard(IthefunctionExpectParameter) {
    $(".cardFront").html("<h1 class='heading'>"+ IthefunctionExpectParameter.name +"</h1>" + "<p class='question'>" + IthefunctionExpectParameter.question + "</p>" + "<img class='animals' src='" + IthefunctionExpectParameter.img + "'>" + "<p>Click card to learn...</p>")
    $(".cardBack").html("<h1 class='answer'>"+ IthefunctionExpectParameter.correctAnswer +"</h1>")
  }

/// This is functionally equivalent to var dinoIndex = 0
var dinoIndex = new Number;

//created function that clicks on the name of the dinosaur

/// good comment, but i would change "clicks" to "responds to click events"
  $("p.dinosaur").click(function (){
    console.log("dino clicked")
    dinoIndex = $(this).attr("data-dino-index")
    var hereIsTheInfoIPromisedYouFunction = dinoCards[dinoIndex]
    changeCard(hereIsTheInfoIPromisedYouFunction)
  })

  $(".memorizedButton").click(function() {
      $(".dinoNamesLearned").append("<p>" + dinoCards[dinoIndex].name + "</p>")

    /// Did you have the code below working when you presented?
    /// Since you've created a custom HTML attribute called "data-dino-index" whose values  correspond your dino ids, you can leverage that to append/remove or hide/show different dinosaurs

      // $("dinosaur").attr("data-dino-index").remove();
    })


//function created to flip the card and shw the answer:

/// since you're already inside of a document ready method i would take out this one
$(document).ready(function() {
  $('.flashCard').on('click', function() {
    $('.flashCard').toggleClass('flipped');
  });
});

});
