
const cardsArray = [{
    'name': 'Trex',
    'img': 'https://bit.ly/16wDy9h',
  },
  {
    'name': 'gastonia',
    'img': 'https://bit.ly/2GbFXYl',
  },
  {
    'name': 'dimetrodon',
    'img': 'https://bit.ly/2jQLkDL',
  },
  {
    'name': 'carnotaurus',
    'img': 'https://bit.ly/2rEPlzi',
  },
  {
    'name': 'triceraptos',
    'img': 'https://bit.ly/2jS5o8F',
  },

];

var cardsArrayConcat=cardsArray.concat(cardsArray);
var gameGrid = cardsArrayConcat.sort(function () {
    return 0.5 - Math.random();
  });
 

  var firstGuess = '';
  var secondGuess = '';
  var count = 0;
  var previousTarget = null;
  var delay = 1000;

  var total=0;
  var totalClicks=document.getElementById("totalClicks")
  var message='';
  
  

  var game = document.getElementById('game');
  var grid = document.createElement('section');
  grid.setAttribute('class', 'grid');
  game.appendChild(grid);
  
 gameGrid.forEach(function (item) {
    var name = item.name,
        img = item.img;

    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;
  
    var front = document.createElement('div');
    front.classList.add('front');
  
    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = 'url(' + img + ')';
  
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });
  
  var match = function match() {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.add('match');
    });
  };

  var clearGuesses = function resetGuesses() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.remove('selected');
    });
  };
  
   grid.addEventListener('click', function (event) {
    var clicked = event.target;
    
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
      return;
    }
  
    if (count < 2) {
      count++;
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add('selected');
      } else {
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
      }

      if (clicked.parentNode.classList.contains('selected')){
        total+=1;
        }

        totalClicks.innerText= total;

      if (firstGuess && secondGuess) {
        if (firstGuess === secondGuess) {
          setTimeout(match, delay);

          if((document.querySelectorAll('.match').length)===8){
          console.log(document.querySelectorAll('.match').length); 
          message='You are a Winner! You made '+total+' moves.';
          document.getElementById('message').innerText = message;
          }
        }
        setTimeout(clearGuesses, delay);
      }
      previousTarget = clicked;

    }
    
  }); 
  

  document.getElementById('btn').addEventListener('click',function(){
    
    total=null;
    totalClicks.innerText= total;
    message='';
    document.getElementById('message').innerText = message;

    var removeClass= document.querySelectorAll('.card');
    removeClass.forEach(function(card){
      card.classList.remove('match');
      card.classList.remove('selected');
    });  

    
     

    
   gameGrid.sort(() => 0.5 - Math.random());
  
   
  }); 

  
  
  
 