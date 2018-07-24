'use strict';

var imgs = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var imgObjects = [];
var noDupes = [];
var imgLeft = document.getElementById('left');
var imgMid = document.getElementById('mid');
var imgRight = document.getElementById('right');
var imgOne = 0;
var imgTwo = 0;
var imgThr = 0;
var section = document.getElementById('display');
var totalClicks = 0;

function ImageTracker(img) {
  this.name = img.split('.')[0];
  this.path = `img/${img}`;
  this.totalDisplays = 0;
  this.allClicks = 0;
}

for (var i = 0; i < imgs.length; i++) {
  imgObjects.push(new ImageTracker(imgs[i]));
}
// ImageTracker structure
//   name: 'name'
//   path: 'name.jpg'
//   totalDisplays: 0
//   totalClicks: 0

var randomNum = function() { // creates a random number
  return Math.floor(Math.random() * Math.floor(imgObjects.length));
};
console.log(randomNum());

var getImageOne = function() {
  imgOne = randomNum();
  if (noDupes.includes(imgOne)) {
    imgOne = randomNum();
    return getImageOne();
  } else {
    noDupes.push(imgOne);
  }
};
var getImageTwo = function() {
  imgTwo = randomNum();
  if (noDupes.includes(imgTwo)) {
    imgTwo = randomNum();
    return getImageTwo();
  } else {
    noDupes.push(imgTwo);
  }
};
var getImageThree = function() {
  imgThr = randomNum();
  if (noDupes.includes(imgThr)) {
    imgThr = randomNum();
    return getImageThree();
  } else {
    noDupes.push(imgThr);
  }
};

var resetDupes = function() { // reset noDupes function to remove first 3 in array
  for (var j = 0; j < 3; j++) {
    noDupes.shift();
  }
};

var createImgs = function() {
  var imgUrl = imgObjects[imgOne].path;
  imgLeft.setAttribute('src', imgUrl);
  imgUrl = imgObjects[imgTwo].path;
  imgMid.setAttribute('src', imgUrl);
  imgUrl = imgObjects[imgThr].path;
  imgRight.setAttribute('src', imgUrl);
};

getImageOne();
getImageTwo();
getImageThree();
createImgs();

section.addEventListener('click', handleClick, false);

function handleClick(event) {
  if (event.target.id === 'container') {
    return alert('click images');
  }

  console.log(event.target.title);
  for(var k =0; k < imgObjects.length; k++) {
    if (event.target.title === imgObjects[k].name) {
      imgObjects[k].allClicks++;
      console.log('imgObjects[k]', imgObjects[k].allClicks);
    }
  }

  totalClicks++;
  console.log(totalClicks, 'total clicks');
  if (totalClicks > 2) {
    section.removeEventListener('click', handleClick, false);
    return alert('no more clicks');
  }
  console.log(event.target, 'was clicked');
  createImgs();
}