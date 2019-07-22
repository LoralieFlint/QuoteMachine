// $(document).ready(function(){
//     let randomQuote;
//     let band;
//     let randomNum;
//     function getQuote(){
//         // list of artist quotes
//       let quotes = [
//         'Life is ours we live it our way all these words I dont just say and nothing else matters', 'You got mud on your face. you big disgrace. kickin your can all over the place', 'Keep listening to music, cause it gets you through everything, I promise.', 'If you dont live for something, youll die for nothing.', 'All I wanted to say was I love you and Im not afraid', 'When you cried, Id wipe away all of your tears, When youd scream, Id fight away all of your fears', 'Let the sky fall, when it crumbles we will stand tall face it all together.', 'Im learning to be brave in my beautiful mistakes.', 'Music to me is the air I breathe, its the blood that pumps through my veins that keeps me alive.', 'Life is good,  life is great, always love and never hate, break the rules, stand apart, ignore your head, and follow your heart.'
//    ]; 
//    // list of bands and artists
//    let bands = [
//      '-Metallica', '-Queen', '-Mitch Lucker', '-Hatebreed', '-Evanescence', '-evanescence', '-Adele', '-pink', '-Billie Joe Armstrong',  '-Ashley Purdy'
//    ];  
//    // using .floor and .random to pull randomly from the arrays
//    randomNum = Math.floor((Math.random()*quotes.length));
//      randomQuote = quotes[randomNum];
//      band = bands[randomNum];
    

//      // putting the given quote and artist into an element
//     $('.quote').text(randomQuote);
//     $('.band').text(band);
    
//     }

//     // tweet function
//      $("#tweet").on("click", function(){
//      window.open("https://twitter.com/intent/tweet?text="+randomQuote);
//    });
     
//    // generates a new quote
//    $("#newQuote").on("click", function(){
//        getQuote();
//      });
//    });



$(document).ready(function(){
  var randomQuote;
  let band;
  let randomNum;
  function getQuote(){
    var quotes = [
      'Life is ours we live it our way all these words I dont just say and nothing else matters', 'You got mud on your face. you big disgrace. kickin your can all over the place', 'Keep listening to music, cause it gets you through everything, I promise.', 'If you dont live for something, youll die for nothing.', 'All I wanted to say was I love you and Im not afraid', 'When you cried, Id wipe away all of your tears, When youd scream, Id fight away all of your fears', 'Let the sky fall, when it crumbles we will stand tall face it all together.', 'Im learning to be brave in my beautiful mistakes.', 'Music to me is the air I breathe, its the blood that pumps through my veins that keeps me alive.', 'Life is good,  life is great, always love and never hate, break the rules, stand apart, ignore your head, and follow your heart.'
 ];
 var bands = [
   '-Metallica', '-Queen', '-Mitch Lucker', '-Hatebreed', '-Evanescence', '-evanescence', '-Adele', '-pink', '-Billie Joe Armstrong',  '-Ashley Purdy'
 ];  
 randomNum = Math.floor((Math.random()*quotes.length));
   randomQuote = quotes[randomNum];
   band = bands[randomNum];
  
  $('.quote').text(randomQuote);
  $('.band').text(band);
  
  }
   $("#tweet").on("click", function(){
   window.open("https://twitter.com/intent/tweet?text=" + randomQuote);
 });
   
 $("#newQuote").on("click", function(){
     getQuote();
   });
 });