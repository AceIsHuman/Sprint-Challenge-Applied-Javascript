/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

class Carousel {
  constructor() {
    this.carousel = document.createElement('div');
    this.carousel.classList.add('carousel');

    this.leftButton = document.createElement('div');
    this.leftButton.classList.add('left-button');
    this.leftButton.innerText = '<';
    this.carousel.appendChild(this.leftButton);
    this.leftButton.addEventListener('click', this.previous.bind(this));

    this.img1 = document.createElement('img');
    this.img1.src = './assets/carousel/mountains.jpeg';
    this.img2 = document.createElement('img');
    this.img2.src = './assets/carousel/computer.jpeg';
    this.img3 = document.createElement('img');
    this.img3.src = './assets/carousel/trees.jpeg';
    this.img4 = document.createElement('img');
    this.img4.src = './assets/carousel/turntable.jpeg';
    this.allImages = [this.img1, this.img2, this.img3, this.img4];
    this.allImages.forEach(img => this.carousel.appendChild(img));

    this.rightButton = document.createElement('div');
    this.rightButton.classList.add('right-button');
    this.rightButton.innerText = '>';
    this.carousel.appendChild(this.rightButton);
    this.rightButton.addEventListener('click', this.next.bind(this));

    document.querySelector('.carousel-container').appendChild(this.carousel);

    this.prevIndex = this.allImages.length - 1;
    this.currIndex = 0;
    this.nextIndex = 1;

    this.prevImg = this.allImages[this.prevIndex];
    this.currImg = this.allImages[this.currIndex];
    this.nextImg = this.allImages[this.nextIndex];

    this.allImages.forEach(img => img.classList.add('slide-hidden'));
    this.displayImg(this.prevImg, 'slide-left');
    this.displayImg(this.currImg, 'slide-middle');
    this.displayImg(this.nextImg, 'slide-right');
  }

  increaseIdx(){
    if(this.currIndex === this.allImages.length-1) {
      this.prevIndex++;
      this.currIndex = 0;
      this.nextIndex++;
    } else if(this.prevIndex === this.allImages.length-1) {
      this.prevIndex = 0;
      this.currIndex++;
      this.nextIndex++;
    } else if(this.nextIndex === this.allImages.length-1) {
      this.prevIndex++;
      this.currIndex++;
      this.nextIndex = 0;
    } else {
      this.prevIndex++;
      this.currIndex++;
      this.nextIndex++;
    }
  }

  decreaseIdx(){
    if(this.currIndex === 0) {
      this.prevIndex--;
      this.currIndex = this.allImages.length - 1;
      this.nextIndex--;
    } else if(this.prevIndex === 0) {
      this.prevIndex = this.allImages.length - 1;
      this.currIndex--;
      this.nextIndex--;
    } else if(this.nextIndex === 0) {
      this.prevIndex--;
      this.currIndex--;
      this.nextIndex = this.allImages.length - 1;
    } else {
      this.prevIndex--;
      this.currIndex--;
      this.nextIndex--;
    }
  }

  getImages(){
    this.prevImg = this.allImages[this.prevIndex];
    this.currImg = this.allImages[this.currIndex];
    this.nextImg = this.allImages[this.nextIndex];
  }

  displayImg(image, position){
    image.classList.add(position);
    image.classList.remove('slide-hidden');
  }

  hideAll() {
    this.allImages.forEach(img => img.classList.add('slide-hidden'));
  }

  removeClasses(){
    this.prevImg.classList.remove('slide-left');
    this.currImg.classList.remove('slide-middle');
    this.nextImg.classList.remove('slide-right');
  }

  next(){
    this.hideAll();
    this.removeClasses();
    this.increaseIdx();
    this.getImages();
    this.displayImg(this.prevImg, 'slide-left');
    this.displayImg(this.currImg, 'slide-middle');
    this.displayImg(this.nextImg, 'slide-right');

  }

  previous(){
    this.hideAll();
    this.removeClasses();
    this.decreaseIdx();
    this.getImages();
    this.displayImg(this.prevImg, 'slide-left');
    this.displayImg(this.currImg, 'slide-middle');
    this.displayImg(this.nextImg, 'slide-right');

  }
}

new Carousel()