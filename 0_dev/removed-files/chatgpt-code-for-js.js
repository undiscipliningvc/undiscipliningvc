// Script to unregister service workers: It could be improved by adding a confirmation message to inform the user that service workers will be unregistered, giving them the opportunity to cancel the action if they accidentally click on the button.
 // Script to prevent the title attribute from appearing on mouseover on images: It's a good script, but it could be improved by using the 'alt' attribute instead of the 'title' attribute to provide a description of the image, as the 'alt' attribute is used by screen readers for accessibility.
 // Script to randomise href: It's a good script, but it could be improved by making the random string generation more secure.


// Script to add border to sticky nav: It's a good script, but it could be improved by adding a transition to the border so that it doesn't appear suddenly when the user scrolls down.
// 
// border to sticky nav
// $(window).scroll(function () {
//   var $heightScrolled = $(window).scrollTop();
//   var $defaultHeight = 300;
//   var $borderHeight = 50; // the height of the border in pixels
//   if ($heightScrolled < $defaultHeight) {
//     $('#nav1').removeClass("borderBottom");
//   }
//   else {
//     var $borderOpacity = ($heightScrolled - $defaultHeight) / $borderHeight;
//     $borderOpacity = Math.min($borderOpacity, 1);
//     $('#nav1').addClass("borderBottom").css("border-bottom-color", "rgba(0, 0, 0, " + $borderOpacity + ")");
//   }
// });


// Script to scroll to top button: It's a good script, but it could be improved by making the scroll smooth instead of sudden.
// 
// scroll to top
// Get the button
// var mybutton = document.getElementById("topButton");
// 
// // When the user scrolls down 300px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};
// 
// function scrollFunction() {
//   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//     mybutton.style.display = "block";
//     mybutton.style.visibility = "visible";
//   } 
//   else {
//     mybutton.style.display = "none";
//     mybutton.style.visibility = "hidden";
//   }
// }
// 
// // When the user clicks on the button, smoothly scroll to the top of the document
// function topFunction() {
//   var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
//   if (currentScroll > 0) {
//     window.requestAnimationFrame(topFunction);
//     window.scrollTo(0, currentScroll - (currentScroll / 8));
//   }
// }


// Script for overlay: It could be improved by making the overlay keyboard accessible by using the 'aria-modal' attribute.
// overlay
function openSlideMenu() {
  const elements = ["nav0", "nav1", "header", "main", "footer"];
  elements.forEach(element => {
    const el = document.getElementById(element);
    if (el) {
      el.setAttribute('aria-hidden', true);
      el.style.opacity = "0";
      el.style.transition = "opacity 300ms";
    }
  });
  document.getElementsByTagName("html")[0].style.background = "#595959";
  document.getElementById("nav2").style.cssText = "margin-right: 210px; display: block; visibility: visible;";
  document.getElementById('overlay-menu').style.width = '210px';
  document.body.setAttribute('aria-modal', true);
};

function closeSlideMenu() {
  const elements = ["nav0", "nav1", "header", "main", "footer"];
  elements.forEach(element => {
    const el = document.getElementById(element);
    if (el) {
      el.removeAttribute('aria-hidden');
      el.style.opacity = "1";
      el.style.transition = "opacity 1000ms";
    }
  });
  document.getElementsByTagName("html")[0].style.background = "#fff";
  document.getElementById("nav2").style.cssText = "margin-right: 0; display: none; visibility: hidden;";
  document.getElementById('overlay-menu').style.width = '0';
  document.body.removeAttribute('aria-modal');
};


// Script to trap focus in overlay: It's a good script, but it could be improved by checking whether the element is focusable before setting focus on it.
// trap focus in overlay
// jQuery(document).ready(function () {
//   var $focusableElements = jQuery('#overlay-first, #overlay-last').find('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
// 
//   jQuery('#overlay-last').on('keydown', function (e) {
//     var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
//     if (!isTabPressed) {
//       return;
//     }
//     if (e.shiftKey) {
//       return;
//     } else {
//       var $nextElement = $focusableElements.eq(0);
//       if ($nextElement.length) {
//         $nextElement.focus();
//       }
//       e.preventDefault();
//     }
//   });
//   
//   jQuery('#overlay-first').on('keydown', function (e) {
//     var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
//     if (!isTabPressed) {
//       return;
//     }
//     if (e.shiftKey) {
//       var $prevElement = $focusableElements.eq($focusableElements.length - 1);
//       if ($prevElement.length) {
//         $prevElement.focus();
//       }
//       e.preventDefault();
//     } else {
//       return;
//     }
//   });
// });


// Script to increase site security: It could be improved by implementing more security measures, such as using HTTPS, enabling Content Security Policy (CSP), and using secure cookies.
// increase security
// function AddRelNoopener() {
//   var links = document.querySelectorAll("a");
//   for (var i = 0; i < links.length; i++) {
//     // Set rel="noopener" to prevent the target page from accessing the window.opener object, which can be a security risk.
//     links[i].setAttribute("rel", "noopener");
// 
//     // Set href to use HTTPS if it's not already.
//     var url = new URL(links[i].href);
//     if (url.protocol !== "https:") {
//       url.protocol = "https:";
//       links[i].href = url.toString();
//     }
//   }
// 
//   // Enable Content Security Policy (CSP) to restrict which resources can be loaded on the page.
//   var csp = "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self';";
//   document.head.appendChild(document.createElement('meta')).setAttribute('http-equiv', 'Content-Security-Policy');
//   document.head.querySelector('[http-equiv="Content-Security-Policy"]').setAttribute('content', csp);
// 
//   // Use secure cookies to prevent session hijacking.
//   var secureCookieOptions = { secure: true, sameSite: 'strict' };
//   document.cookie = "cookieName=cookieValue; " + Object.entries(secureCookieOptions).map(([k, v]) => `${k}=${v}`).join('; ');
// }




