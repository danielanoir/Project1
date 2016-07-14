$(document).ready(function(){
  console.log("JQuery is working.");


  $(".dinoNamesNotLearned").css({"width":"275px","font-size":"30px","font-family":"'Trocchi', serif","background":"rgba(18, 27, 38, 0.4)"});
  $(".dinoNamesLearned").css({"font-size":"30px","font-family":"'Trocchi', serif","background":"rgba(18, 27, 38, 0.4)"});
  $(".memorizedButton").css({"border-style":"outset","font-weight":"bold","color":"black","font-size":"30px","font-family":"'Trocchi', serif","background-color":"grey","border-color":"grey","margin":"20px","padding":"10px"});

//dinoDetails are objects in array with details on each of the dinos. Refering to it in if else.
//Dynamic data goes below for each card. Static is in HTML
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
  }

  //adding the object to the card front and back so that it shows info:
  function changeCard(IthefunctionExpectParameter) {
    $(".cardFront").html("<h1 class='heading'>"+ IthefunctionExpectParameter.name +"</h1>" + "<p class='question'>" + IthefunctionExpectParameter.question + "</p>" + "<img class='animals' src='" + IthefunctionExpectParameter.img + "'>" + "<p>Click card to learn...</p>")
    $(".cardBack").html("<h1 class='answer'>"+ IthefunctionExpectParameter.correctAnswer +"</h1>")
  }

var dinoIndex = new Number;

//created function that clicks on the name of the dinosaur
  $("p.dinosaur").click(function (){
    console.log("dino clicked")
    dinoIndex = $(this).attr("data-dino-index")
    var hereIsTheInfoIPromisedYouFunction = dinoCards[dinoIndex]
    changeCard(hereIsTheInfoIPromisedYouFunction)
  })

  $(".memorizedButton").click(function() {
      $(".dinoNamesLearned").append("<p>" + dinoCards[dinoIndex].name + "</p>")
      // $("dinosaur").attr("data-dino-index").remove();
    })
//function created to flip the card and shw the answer:
$(document).ready(function() {

  $('.flashCard').on('click', function() {
    $('.flashCard').toggleClass('flipped');
  });
});

});
