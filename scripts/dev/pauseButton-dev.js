/* Taken from https://www.w3.org/TR/wai-aria-practices-1.1/examples/carousel/carousel-1.html */
/*  Implements the pause button for the carousel widget */

var PauseButton = function (domNode, carouselObj) {
  this.domNode = domNode;

  this.carousel = carouselObj;
};

PauseButton.prototype.init = function () {
  this.domNode.addEventListener('click', this.handleClick.bind(this));
};

/* EVENT HANDLERS */

PauseButton.prototype.handleClick = function () {
  this.carousel.toggleRotation();
};
