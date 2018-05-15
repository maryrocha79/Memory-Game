

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




var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1000;

var total=0;
var totalClicks=document.getElementById("totalClicks")
var message='';


function cardDeck(){
  var cardsArrayConcat=cardsArray.concat(cardsArray);
  var gameGrid = cardsArrayConcat.sort(function () {
      return 0.5 - Math.random();
    });
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

  var grid=document.querySelector('.grid');
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});
}
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


function messageWin(){
    if((document.querySelectorAll('.match').length)===10){
  console.log(document.querySelectorAll('.match').length); 
  message='You are a Winner 🎉! You made '+total+' moves.';
  document.getElementById('message').innerText = message;
  
  document.getElementById('hideMessage').classList.add("show");
    }
 }

var startGame= document.getElementById('startGame');

startGame.addEventListener('click',function(){
  total=null;
  totalClicks.innerText= total;
  message='';
  document.getElementById('message').innerText = message;
  var cardsDelete=document.querySelectorAll('.card');
  for(var i=0;i<cardsDelete.length;i++)
  grid.removeChild(cardsDelete[i]);

  cardDeck() ;  
})

cardDeck() ;
 
var grid=document.querySelector('.grid');
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
      setTimeout(messageWin, 1600);
      setTimeout(match, delay);
      }
      setTimeout(clearGuesses, delay);
    }
    previousTarget = clicked;

  }
  
}); 


  
 





