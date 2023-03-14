// Unregisters all service workers
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
  var $defaultHeight = 300;
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

// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
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
  document.getElementsByTagName("html")[0].style.background = "#595959";
  document.getElementById("nav2").setAttribute("style", "margin-right: 210px; display: block; visibility: visible;");
  document.getElementById('overlay-menu').style.width = '210px';
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


// Link cache buster: Takes all site links, changes them from relative to absolute links (if relative in the first place; absolute links stay absolute), adds a random string to the end.
// Note: Add random string bit currently disabled.
RandomiseHref();

function RandomiseHref(){
		var links = document.querySelectorAll("a:not([href^='http']):not([href*='#']):not([href^='mailto']):not([onclick]):not([class='trans-return']):not([class='art-return'])");
		for(var i = 0; i < links.length; i++){
			// var randomString = Math.floor(Math.random()*1000000);
			// links[i].href = links[i].href + "?=" + randomString;
			links[i].href = links[i].href;
		}
};


// Prevents the title attribute from appearing in a tooltip on mouseover on images
// Adapted from https://spigotdesign.com/hide-title-attribute-hover-dont-remove/
$("img").hover(function(){
	var title = $(this).attr("title");
	$(this).attr("tmp_title", title);
	$(this).attr("title","");	
});

$("img").click(function(){
	var title = $(this).attr("tmp_title");
	$(this).attr("title", title);
});


// Increases site security
// Adapted from https://social.technet.microsoft.com/Forums/en-US/809eaecb-fc3b-40e2-ae0b-f2d79feb58b0/need-easy-way-to-force-all-links-to-open-in-new-tab
AddRelNoopener();

function AddRelNoopener(){
  var links = document.querySelectorAll("a");
  for(var i = 0; i < links.length; i++){
    links[i].setAttribute("rel","noopener");
  }
};


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
  if (window.location.href.indexOf("html/zoomcasts") > -1) {	
    document.getElementById("zoomcasts").setAttribute("class","current");
  };
  if (window.location.href.indexOf("html/lesson_plans") > -1) {	
    document.getElementById("lesson_plans").setAttribute("class","current");
  };
  if (window.location.href.indexOf("html/syllabi") > -1) {	
    document.getElementById("syllabi").setAttribute("class","current");
  };
  // if (window.location.href.indexOf("html/assessments") > -1) {	
  //   document.getElementById("syllabi").setAttribute("class","current");
  // };
  if (window.location.href.indexOf("html/about") > -1) {	
    document.getElementById("about").setAttribute("class","current");
  };
};