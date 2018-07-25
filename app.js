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
var chart;

function ImageTracker(img) {
  this.name = img.split('.')[0];
  this.path = `img/${img}`;
  this.views = 0;
  this.clicks = 0;
}

for (var i = 0; i < imgs.length; i++) {
  imgObjects.push(new ImageTracker(imgs[i]));
}
// ImageTracker structure
//   name: 'name'
//   path: 'name.jpg'
//   views: 0
//   clicks: 0

var randomNum = function() { // creates a random number
  return Math.floor(Math.random() * Math.floor(imgObjects.length));
};

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
  getImageOne();
  getImageTwo();
  getImageThree();
  resetDupes();
  var imgUrl = imgObjects[imgOne].path;
  var imgTitle = imgObjects[imgOne].name;
  imgLeft.setAttribute('src', imgUrl);
  imgLeft.setAttribute('title', imgTitle);
  imgObjects[imgOne].views++;
  imgUrl = imgObjects[imgTwo].path;
  imgTitle = imgObjects[imgTwo].name;
  imgMid.setAttribute('src', imgUrl);
  imgMid.setAttribute('title', imgTitle);
  imgObjects[imgTwo].views++;
  imgUrl = imgObjects[imgThr].path;
  imgTitle = imgObjects[imgThr].name;
  imgRight.setAttribute('src', imgUrl);
  imgRight.setAttribute('title', imgTitle);
  imgObjects[imgThr].views++;
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
  for(var k = 0; k < imgObjects.length; k++) {
    if (event.target.title === imgObjects[k].name) {
      imgObjects[k].clicks++;
    }
  }
  totalClicks++; // bump score of total clicks (until 25)
  if (totalClicks > 24) { // should be 25 clicks
    alert('no more clicks');
    section.removeEventListener('click', handleClick, false); // stop listening for clciks
    document.getElementById('display').style.display = 'none'; // stop displaying pics
    var resultSection = document.getElementById('results');
    for (var m = 0; m < imgObjects.length; m++) {
      var pElement = document.createElement('p');
      pElement.textContent = `${imgObjects[m].clicks} votes for the ${imgObjects[m].name}`;
      resultSection.appendChild(pElement);
    }
    chartData();
    drawChart();
  }
  createImgs();
}

var itemList = [];
var clickList = [];

var chartData = function() {
  for (var n = 0; n < imgObjects.length; n++) {
    itemList[n] = imgObjects[n].name;
    clickList[n] = imgObjects[n].clicks;
  }
};

function drawChart() {
  var ctx = document.getElementById('chart');
  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: itemList,
      datasets: [{
        label: '# of Votes',
        data: clickList,
        backgroundColor: 'purple',
        borderColor: 'black',
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}