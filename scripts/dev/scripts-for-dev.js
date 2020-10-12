/* Service Worker */
/* Taken from https://pwa-workshop.js.org/2-service-worker/#registering-the-service-worker */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(serviceWorker => {
      console.log("Service Worker registered: ", serviceWorker);
    })
    .catch(error => {
      console.error("Error registering the Service Worker: ", error);
    });
}


/* StickyNav */
/* Taken from https://www.mattmorgante.com/technology/sticky-navigation-bar-javascript */

const nav = document.querySelector('#nav2');
const navTop = nav.offsetTop;

function stickyNavigation() {

  if (window.scrollY >= navTop) {
    // nav offsetHeight = height of nav
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', stickyNavigation);


/* Overlay */
/* Adapted from https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp */

function openNav() {
  document.getElementById("nav3").style.display = "block";
  const elements = ["skiptocontent", "title-div", "main", "manuscript-div", "journal-div", "credits-div", "credits1-div", "credits2-div", "footer-div"];
  for(const element of elements){
    if (document.getElementById(element) !== null) {document.getElementById(element).style.display = "none"};
  }
}

function closeNav() {
  document.getElementById("nav3").style.display = "none";
  const elements = ["skiptocontent", "title-div", "main", "manuscript-div", "journal-div", "credits-div", "credits1-div", "credits2-div", "footer-div"];
  for(const element of elements){
    if (document.getElementById(element) !== null) {document.getElementById(element).style.display = "block"};
  }
}

/* Keyboard Navigation for Dropdown Menus */
/* Adapted by Philip Allfrey for One More Voice from https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/js/MenubarItemLinks.js */

const menu = document.getElementById('nav1');
menu.addEventListener('keydown', handleKeydown);
menu.addEventListener('focusin', handleFocusIn);

const lastMenuItem = Array.from(menu.querySelectorAll('[role="menuitem"]')).pop();
const topLevelItems = Array.from(menu.querySelectorAll('[aria-haspopup]'));

function handleFocusIn(event){
  if(event.target.attributes['aria-haspopup']){
    // Find all popup toggles
    Array.from(
      menu.querySelectorAll('[aria-haspopup]')
    )
    // Exclude the toggle that has just been focussed
    .filter(x => x !== event.target)
    // Set all other toggles to false to hide their dropdowns
    .forEach(x => {
      x.checked = false;
    })

  }
}

function handleKeydown(event){
  const keyCode = Object.freeze({
    'TAB': 9,
    'RETURN': 13,
    'ESC': 27,
    'SPACE': 32,
    'PAGEUP': 33,
    'PAGEDOWN': 34,
    'END': 35,
    'HOME': 36,
    'LEFT': 37,
    'UP': 38,
    'RIGHT': 39,
    'DOWN': 40
  });

  const target = event.target;
  const char = event.keyCode;

  let currentItem = null;

  switch(char){

    case keyCode.DOWN:
      // Stop the browser moving the page
      event.preventDefault();

      // If we're on a top-level element
      if(target.attributes['aria-haspopup'] && target.attributes['aria-haspopup'].value === "true"){
        // If the popup has just been opened, move focus to first menu element
        if(target.checked){
          const firstMenuElement = target.parentElement.querySelector('[role="menuitem"]');
          firstMenuElement.focus();
        }
        // If popup is not opened, open it
        else{
          target.checked = true;
        }
      }
      // Otherwise move focus down one element
       else if(target.attributes['role'] && target.attributes['role'].value === "menuitem"){
        const menuItems = Array.from(
          target.closest('ul').querySelectorAll('[role="menuitem"]')
        );

        // Wrap around to the top if we reach the bottom of the dropdown
        const nextMenuItem = getNextElement(menuItems, target);
        nextMenuItem.focus();
      }
      break;

      case keyCode.UP:
        // Stop the browser from moving the page
        event.preventDefault();

        // If we're on an open top-level element
        if(target.attributes['aria-haspopup'] && target.attributes['aria-haspopup'].value === "true" && target.checked){
          target.checked = false;
        }
        // If we're in a dropdown
        else if(target.attributes['role'] && target.attributes['role'].value === "menuitem"){
          // Get list of elements in the dropdown
          const menuItems = Array.from(
            target.closest('ul').querySelectorAll('[role="menuitem"]')
          );

          // Check whether we're already at the top
          const prevMenuItem = getPreviousElement(menuItems, target);
          // Close the dropdown
          if(prevMenuItem === target){
            const topLevelItem = target.closest('.dropdown').querySelector('input');
            topLevelItem.checked = false;
            topLevelItem.focus();
          }
          // Move the focus up one element
          else {
            prevMenuItem.focus();
          }

        }
        break;

      case keyCode.LEFT:
        // Stop the browser moving the page
        event.preventDefault();

        // If we're on a top-level menu elements
        if(target.attributes['aria-haspopup']){
          currentItem = target;
        }
        // If we're inside a dropdown
         else if(target.attributes['role'] && target.attributes['role'].value === "menuitem"){
          currentItem = target.closest('.dropdown').querySelector('input');
        }
        // If neither applies, stop
        else{
          break;
        }


        const prevTopLevelItem = getPreviousElement(topLevelItems, currentItem);
        // Move focus to previous top-level item and open it if dropdown is open
        if(prevTopLevelItem.attributes['aria-haspopup'] && prevTopLevelItem.attributes['aria-haspopup'].value === "true"){
          prevTopLevelItem.checked = currentItem.checked;
        } else{
          prevTopLevelItem.checked = false;
        }

        prevTopLevelItem.focus();
        break;

      case keyCode.RIGHT:
        // Stop the browser moving the page
        event.preventDefault();

        // If we're on a top-level menu element
        if(target.attributes['aria-haspopup']){
          currentItem = target;
        }
        // If we're inside a dropdown
        else if(target.attributes['role'] && target.attributes['role'].value === "menuitem"){
          currentItem = target.closest('.dropdown').querySelector('input');
        }
        else{
          break;
        }

        const nextTopLevelItem = getNextElement(topLevelItems, currentItem);
        // Move focus to previous top-level item and open it if dropdown is open
        if(nextTopLevelItem.attributes['aria-haspopup'] && nextTopLevelItem.attributes['aria-haspopup'].value === "true"){
          nextTopLevelItem.checked = currentItem.checked;
        } else{
          nextTopLevelItem.checked = false;
        }
        nextTopLevelItem.focus();
        break;

      case keyCode.RETURN:
        // Open or close dropdown
        // Space also does this by default
        if(target.attributes['aria-haspopup'] && target.attributes['aria-haspopup'].value === "true"){
          target.checked = !target.checked;
        }
        break;

      case keyCode.TAB:
        if(event.target === lastMenuItem){
          // Close dropdown
          const lastDropdown = Array.from(
            menu.querySelectorAll('[aria-haspopup]')
          ).pop();
          lastDropdown.checked = false;
        }
        break;

      case keyCode.ESC:
        let parentPopup;
        // If we're on a top-level menu element
        if(target.attributes['aria-haspopup']){
          parentPopup = target;
        }
        // If we're inside a dropdown
        else if(target.attributes['role'] && target.attributes['role'].value === "menuitem"){
          parentPopup = target.closest('.dropdown').querySelector('input');
        }
        parentPopup.checked = false;
        parentPopup.focus();
        break;
  }

}

function getNextElement(items, currentItem){
  const currentIndex = items.findIndex(x => x == currentItem);
  return items[Math.min(currentIndex + 1, items.length - 1)];
}

function getPreviousElement(items, currentItem){
  const currentIndex = items.findIndex(x => x == currentItem);
  return items[Math.max(currentIndex - 1, 0)];
}