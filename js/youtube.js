
// YouTube player taken from https://webdesign.tutsplus.com/tutorials/how-to-lazy-load-embedded-youtube-videos- -cms-26743 [remove space between two dashes]
// Add a custom start time to HTML:
// 	<div class="youtube" data-embed="AqcjdkPMPJA" data-starttime="25">
// and change the following line of javascript:
// 	iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1&playsinline=1&start="+ this.dataset.starttime +"");
var player; //current video player object
(function () {

  var youtube = document.querySelectorAll(".youtube");

  for (var i = 0; i < youtube.length; i++) {

    // var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/hqdefault.jpg";
    var source = "/img/zoomcasts/" + youtube[i].dataset.id + "-663px.jpg"; // uses local image
    title = youtube[i].getAttribute("data-title");
    alt = youtube[i].getAttribute("data-alt");

    var image = new Image();
    image.src = source;
    image.setAttribute("title", title);
    image.setAttribute("alt", alt);
    image.addEventListener("load", function () {
      youtube[i].appendChild(image);
    }(i));

    var playerDiv = document.createElement("div");
    playerDiv.id = 'player-' + youtube[i].getAttribute("data-embed");
    youtube[i].appendChild(playerDiv);

    var eventList = ["click", "keydown"];
    for (event of eventList) {
      youtube[i]
        .addEventListener(event, function (ev) {
          var iframe = this.querySelector('iframe');
          var isClick = ev.type === 'click' || (ev.type === 'keydown' && (ev.keyCode === 13 || ev.keyCode === 32)); // space or enter
          var isSkipLink = ev.target.parentNode.classList.contains('skipcontrols');

          if (!iframe && isClick) {
            ev.preventDefault();
            player = new YT.Player('player-' + this.dataset.embed, {
              height: '390', // Dimensions are overridden by CSS
              width: '640',
              title: 'Embedded YouTube video. ' + title,
              frameborder: 0,
              videoId: this.dataset.embed,
              events: {
                'onReady': onPlayerReady
              }
            });
            const skipLink = this.querySelector('nav > a');
            if(skipLink) skipLink.setAttribute("tabindex", 0); // Make "skip to next" link tabbable only after video has been loaded
          } else if (isClick && !isSkipLink) {
            ev.preventDefault();
            if (player.getPlayerState() == YT.PlayerState.PLAYING) {
              player.pauseVideo();
            } else {
              player.playVideo();
            }
          } else if (isClick && isSkipLink) {
            // perform default action, i.e. Enter activates the skip link
            // NB space bar scrolls the page but doesn't shift focus
          }
        });
    };
  };

})();


// Load YouTube IFrame API asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag
  .parentNode
  .insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  // Required function, but we don't need to do anything as we have multiple videos
}

function onPlayerReady(event) {
  // Make video start playing once it has loaded
  event
    .target
    .playVideo();
}