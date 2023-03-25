// Unregisters all service workers
if ("serviceWorker" in navigator) {
	navigator.serviceWorker.getRegistrations().then(function (registrations) {
				for (let registration of registrations) {
					registration.unregister()
				}
	})
};


// Adds border to sticky nav after scroll down
// Original coding improved by ChatGPT (https://chat.openai.com/chat) by adding a transition to the border so that it doesn't appear suddenly when the user scrolls down.
$(window).scroll(function () {
  var $heightScrolled = $(window).scrollTop();
  var $defaultHeight = 300;
  var $borderHeight = 50; // the height of the border in pixels
  if ($heightScrolled < $defaultHeight) {
    $('#nav1').removeClass("borderBottom");
  }
  else {
    var $borderOpacity = ($heightScrolled - $defaultHeight) / $borderHeight;
    $borderOpacity = Math.min($borderOpacity, 1);
    $('#nav1').addClass("borderBottom").css("border-bottom-color", "rgba(0, 0, 0, " + $borderOpacity + ")");
  }
});


//Scroll to top button
//Adapted from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// Original coding improved by ChatGPT (https://chat.openai.com/chat) by making the scroll smooth instead of sudden.

// Get the button
var mybutton = document.getElementById("topButton");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
    mybutton.style.visibility = "visible";
  } 
  else {
    mybutton.style.display = "none";
    mybutton.style.visibility = "hidden";
  }
}

// When the user clicks on the button, smoothly scroll to the top of the document
function topFunction() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(topFunction);
    window.scrollTo(0, currentScroll - (currentScroll / 8));
  }
}


// Overlay
// Adapted from https://blog.avada.io/css/sidebar-menus/#animated-sidebar-menu-ephraim-sangma
function openSlideMenu () {
  document.getElementsByTagName("html")[0].style.background = "#595959";
  document.getElementById("nav2").setAttribute("style", "margin-right: 210px; display: block; visibility: visible;");
  document.getElementById('overlay-menu').style.width = '210px';
  const elements = ["nav0", "nav1", "header", "main", "footer"];
  for(const element of elements){
    if (document.getElementById(element) !== null) {
      document.getElementById(element).style.display = "none";
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
      document.getElementById(element).style.display = "inherit";
      document.getElementById(element).style.visibility = "visible";
      document.getElementById(element).style.opacity = "1";
      document.getElementById(element).style.transition = "visibility 0s linear 0s, opacity 1000ms";
    };
  }
};


// Trap Focus in Overlay
// Adapted from https://www.taraprasad.com/trap-focus-inside-an-element/
// Also see https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element
// Original coding improved by ChatGPT (https://chat.openai.com/chat) by checking whether the element is focusable before setting focus on it.
jQuery(document).ready(function () {
  var $focusableElements = jQuery('#overlay-first, #overlay-last').find('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');

  jQuery('#overlay-last').on('keydown', function (e) {
    var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
    if (!isTabPressed) {
      return;
    }
    if (e.shiftKey) {
      return;
    } else {
      var $nextElement = $focusableElements.eq(0);
      if ($nextElement.length) {
        $nextElement.focus();
      }
      e.preventDefault();
    }
  });
  
  jQuery('#overlay-first').on('keydown', function (e) {
    var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
    if (!isTabPressed) {
      return;
    }
    if (e.shiftKey) {
      var $prevElement = $focusableElements.eq($focusableElements.length - 1);
      if ($prevElement.length) {
        $prevElement.focus();
      }
      e.preventDefault();
    } else {
      return;
    }
  });
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


// Increases site security
// Adapted from https://social.technet.microsoft.com/Forums/en-US/809eaecb-fc3b-40e2-ae0b-f2d79feb58b0/need-easy-way-to-force-all-links-to-open-in-new-tab
// Original coding improved by ChatGPT (https://chat.openai.com/chat) by implementing more security measures, such as using HTTPS, enabling Content Security Policy (CSP), and using secure cookies.
function AddRelNoopener() {
  var links = document.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    // Set rel="noopener" to prevent the target page from accessing the window.opener object, which can be a security risk.
    links[i].setAttribute("rel", "noopener");

    // Set href to use HTTPS if it's not already.
    var url = new URL(links[i].href);
    if (url.protocol !== "https:") {
      url.protocol = "https:";
      links[i].href = url.toString();
    }
  }

  // Enable Content Security Policy (CSP) to restrict which resources can be loaded on the page.
  var csp = "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self';";
  document.head.appendChild(document.createElement('meta')).setAttribute('http-equiv', 'Content-Security-Policy');
  document.head.querySelector('[http-equiv="Content-Security-Policy"]').setAttribute('content', csp);

  // Use secure cookies to prevent session hijacking.
  var secureCookieOptions = { secure: true, sameSite: 'strict' };
  document.cookie = "cookieName=cookieValue; " + Object.entries(secureCookieOptions).map(([k, v]) => `${k}=${v}`).join('; ');
}



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
  if (window.location.href.indexOf("html/assessments") > -1) {	
    document.getElementById("assessments").setAttribute("class","current");
  };
  if (window.location.href.indexOf("html/about") > -1) {	
    document.getElementById("about").setAttribute("class","current");
  };
};