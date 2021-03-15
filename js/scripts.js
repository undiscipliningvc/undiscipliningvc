// Removes service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister()
    }
  })
};


// Adds border to sticky nav after scroll down
$(window).scroll(function () {
  var $heightScrolled = $(window).scrollTop();
  var $defaultHeight = 400;
  if ($heightScrolled < $defaultHeight) {
    $('#nav1').removeClass("borderBottom")
    // $('#nav2').addClass("a")
  }
  else {
      $('#nav1').addClass("borderBottom")
  }
});


//Scroll to top button
//Adapted from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

//Get the button
var mybutton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.style.visibility = "visible";
  } 
  else {
    mybutton.style.display = "none";
    mybutton.style.visibility = "hidden";
  }
};
			
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
};


// Overlay
// Adapted from https://blog.avada.io/css/sidebar-menus/#animated-sidebar-menu-ephraim-sangma
function openSlideMenu () {
  document.getElementsByTagName("html")[0].style.background = "#4E494A";
  document.getElementById("nav2").setAttribute("style", "margin-right: 180px; display: block; visibility: visible;");
  document.getElementById('overlay-menu').style.width = '180px';
  const elements = ["nav0", "nav1", "header", "main", "footer"];
  for(const element of elements){
    if (document.getElementById(element) !== null) {
      document.getElementById(element).style.visibility = "hidden";
      document.getElementById(element).style.opacity = "0";
      document.getElementById(element).style.transition = "visibility 0s linear 300ms, opacity 300ms";
    };
  }
};

function closeSlideMenu () {
  document.getElementsByTagName("html")[0].style.background = "#fff";
  document.getElementById("nav2").setAttribute("style", "margin-right: 0; display: none; visibility: hidden;");
  document.getElementById('overlay-menu').style.width = '0';
  const elements = ["nav0", "nav1", "header", "main", "footer"];
  for(const element of elements){
    if (document.getElementById(element) !== null) {
      document.getElementById(element).style.visibility = "visible";
      document.getElementById(element).style.opacity = "1";
      document.getElementById(element).style.transition = "visibility 0s linear 0s, opacity 1000ms";
    };
  }
};


// Trap Focus in Overlay
// Adapted from https://www.taraprasad.com/trap-focus-inside-an-element/
// Also see https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element
jQuery(document).ready(function () {
  jQuery('#overlay-last').on('keydown', function (e) {
    var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
    if (!isTabPressed) {
      return
    }
    if (e.shiftKey) {
      return
    } else {
      jQuery('#overlay-first').focus();
      e.preventDefault()
    }
  });
  jQuery('#overlay-first').on('keydown', function (e) {
    var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
    if (!isTabPressed) {
      return
    }
    if (e.shiftKey) {
      jQuery('#overlay-last').focus();
      e.preventDefault()
    } else {
      return
    }
  })
});


// Highlights users current section in navigation
// Adapted from https://stackoverflow.com/a/21718316
checkUrl();
						
function checkUrl () {
  if(location.pathname == "/" && 
    location.hash.length <= 1 && 
    location.search.length <= 1) {
      document.getElementById("home").setAttribute("class","current");
  }
  if (window.location.href.indexOf("index") > -1) {	
    document.getElementById("home").setAttribute("class","current");
  };
  if (window.location.href.indexOf("zoomcasts") > -1) {	
    document.getElementById("zoomcasts").setAttribute("class","current");
  };
  if (window.location.href.indexOf("lesson_plans") > -1) {	
    document.getElementById("lesson_plans").setAttribute("class","current");
  };
  if (window.location.href.indexOf("syllabi") > -1) {	
    document.getElementById("syllabi").setAttribute("class","current");
  };
  if (window.location.href.indexOf("faq") > -1) {	
    document.getElementById("faq").setAttribute("class","current");
  };
  if (window.location.href.indexOf("about") > -1) {	
    document.getElementById("about").setAttribute("class","current");
  };
};


// Increases site security
// Adapted from https://social.technet.microsoft.com/Forums/en-US/809eaecb-fc3b-40e2-ae0b-f2d79feb58b0/need-easy-way-to-force-all-links-to-open-in-new-tab
AddRelNoopener();

function AddRelNoopener(){
  var links = document.querySelectorAll("a");
  for(var i = 0; i < links.length; i++){
    links[i].setAttribute("rel","noopener");
  }
};