var imgs = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var imgObjects = [];

function ImageTracker(img) {
  this.name = img.split('.')[0];
  this.path = img;
  this.totalClicks = 0;
}

for (var i = 0; i < imgs.length; i++) {
  imgObjects.push(new ImageTracker(imgs[i]));
}
// ImageTracker
//   name: 'name'
//   path: 'name.jpg'
//   totalClicks: 0

