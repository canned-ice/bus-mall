'use strict';

var imgs = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var imgObjects = [];
var noDupes = [];
var imgOne = 0;
var imgTwo = 0;
var imgThree = 0;
var section = document.getElementById('display');

function ImageTracker(img) {
  this.name = img.split('.')[0];
  this.path = 'img/' + img;
  this.totalClicks = 0;
}

for (var i = 0; i < imgs.length; i++) {
  imgObjects.push(new ImageTracker(imgs[i]));
}
// ImageTracker
//   name: 'name'
//   path: 'name.jpg'
//   totalClicks: 0

var randomNum = function(max) { // creates a random number
  return Math.floor(Math.random() * Math.floor(max));
};
console.log(randomNum(imgObjects.length));

var getImageOne = function() {
  imgOne = randomNum(imgObjects.length);
  noDupes.push(imgOne);
};
var getImageTwo = function() {
  imgTwo = randomNum(imgObjects.length);
  if (imgTwo === noDupes.includes(imgTwo)) {
    imgTwo = randomNum(imgObjects.length);
  } else {
    noDupes.push(imgTwo);
  }
};
var getImageThree = function() {
  imgThree = randomNum(imgObjects.length);
  if (imgThree === noDupes.includes(imgThree)) {
    imgThree = randomNum.length(imgObjects.length);
  } else {
    noDupes.push(imgThree);
  }
};

var resetDupes = function() { // reset noDupes function to remove first 3 in array
  for (var j = 0; j < 3; j++) {
    noDupes.shift();
  }
};

var createImgs = function() {
  var imgOneEl = document.createElement('img');
  var imgUrl = imgObjects[imgOne].path;
  imgOneEl.setAttribute('src', imgUrl);
  section.appendChild(imgOneEl);
  var imgTwoEl = document.createElement('img');
  imgUrl = imgObjects[imgTwo].path;
  imgTwoEl.setAttribute('src', imgUrl);
  section.appendChild(imgTwoEl);
  var imgThreeEl = document.createElement('img');
  imgUrl = imgObjects[imgThree].path;
  imgThreeEl.setAttribute('src', imgUrl);
  section.appendChild(imgThreeEl);
};

getImageOne();
getImageTwo();
getImageThree();
createImgs();