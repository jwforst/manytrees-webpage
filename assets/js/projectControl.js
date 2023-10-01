
// MEDIA VIEWPORT WIDTH CHECK (and initialization)
// The ViewportDoc editor has four left-slideout asides (stacked one on top of the other by using z-positions 0, 1, 2, 3). During initial program start (or a change from landscape to portrait), this code determines if the asides (specifically asideZ3) should display by default based on the viewport size. If the viewport width is > 994px, asideZ3 will display open and asideZ2, asideZ1, and asideZ0 will slide left out of the viewport. If width is =< 994px, (smallViewport = true) all asides will remain closed as the default state.

// Boolean state variables for:
let asideZ0Closed; 
let asideZ1Closed; 
let asideZ2Closed; 
let asideZ3Closed; 

// Stores the boolean state for viewport size. If smallViewport = true, The aside is closed.
let smallViewport = window.matchMedia("(max-width: 994px)").matches;

if (smallViewport === true) {
  // All asides are hidden 
  document.getElementById("asideZ0").style.marginLeft = "-300px";
  asideZ0Closed = true;
  document.getElementById("asideZ1").style.marginLeft = "-300px";
  asideZ1Closed = true;
  document.getElementById("asideZ2").style.marginLeft = "-300px";
  asideZ2Closed = true;
  document.getElementById("asideZ3").style.marginLeft = "-300px";
  asideZ3Closed = true;

} else {
  // display asideZ3 as the default open aside
  document.getElementById("asideZ0").style.marginLeft = "-300px";
  asideZ0Closed = true;
  document.getElementById("asideZ1").style.marginLeft = "-300px";
  asideZ1Closed = true;
  document.getElementById("asideZ2").style.marginLeft = "-300px";
  asideZ2Closed = true;
  document.getElementById("asideZ3").style.marginLeft = "0px";
  asideZ3Closed = false;
}

// The asideZ0 button toggle response
function asideZ0BtnClick() {
  if (asideZ0Closed === true) {
    // then open it, close others
    document.getElementById("asideZ0").style.marginLeft = "0px";
    asideZ0Closed = false;

    document.getElementById("asideZ1").style.marginLeft = "-300px";
    asideZ1Closed = true;

    document.getElementById("asideZ2").style.marginLeft = "-300px";
    asideZ2Closed = true;

    document.getElementById("asideZ3").style.marginLeft = "-300px";
    asideZ3Closed = true;
  } else {
    // then close it
    document.getElementById("asideZ0").style.marginLeft = "-300px";
    asideZ0Closed = true;
  }
}

// The asideZ1 button toggle response
function asideZ1BtnClick() {
  if (asideZ1Closed === true) {
    // then open it, close others
    document.getElementById("asideZ1").style.marginLeft = "0px";
    asideZ1Closed = false;

    document.getElementById("asideZ2").style.marginLeft = "-300px";
    asideZ2Closed = true;

    document.getElementById("asideZ3").style.marginLeft = "-300px";
    asideZ3Closed = true;

    document.getElementById("asideZ0").style.marginLeft = "-300px";
    asideZ0Closed = true;
  } else {
    // close it
    document.getElementById("asideZ1").style.marginLeft = "-300px";
    asideZ1Closed = true;
  }
}

// The asideZ2 button toggle response
function asideZ2BtnClick() {
  if (asideZ2Closed === true) {
    // then open it, close others
    document.getElementById("asideZ2").style.marginLeft = "0px";
    asideZ2Closed = false;

    document.getElementById("asideZ3").style.marginLeft = "-300px";
    asideZ3Closed = true;

    document.getElementById("asideZ0").style.marginLeft = "-300px";
    asideZ0Closed = true;

    document.getElementById("asideZ1").style.marginLeft = "-300px";
    asideZ1Closed = true;
  } else {
    // close it
    document.getElementById("asideZ2").style.marginLeft = "-300px";
    asideZ2Closed = true;
  }
}

// The asideZ3 button toggle response
function asideZ3BtnClick() {
  if (asideZ3Closed === true) {
    // then open it, close others
    document.getElementById("asideZ3").style.marginLeft = "0px";
    asideZ3Closed = false;

    document.getElementById("asideZ0").style.marginLeft = "-300px";
    asideZ0Closed = true;
    
    document.getElementById("asideZ1").style.marginLeft = "-300px";
    asideZ1Closed = true;

    document.getElementById("asideZ2").style.marginLeft = "-300px";
    asideZ2Closed = true;
  } else {
    // close it
    document.getElementById("asideZ3").style.marginLeft = "-300px";
    asideZ3Closed = true;
  }
}

// MANAGE PERSISTENT STORAGE, FONT FAMILY AND COLOR THEME
// COLOR THEME & FONT FAMILY MANAGEMENT OVERVIEW ===== ===== ===== ===== =====  
// Data stored in the browser localStorage remains valid and accessible across browser sessions. For this reason, initial startup values, and user-selected default values for the color theme and the font family are stored in localStorage which is persistent.

// All CSS colorTheme classes are defined in theme.css.

// The initial startup session values are: sessionColorTheme = colorTheme2 and sessionFontFamily = fontFamily2. sessionColorTheme and sessionFontFamily are CSS class attributes assigned to the root element (<HTML>) when the browser gets this webpage. This JavaScript then updates these classes by assigning colorTheme2 and fontFamily2 as defaults in the DOM. the JavaScript also manages user-selected themes and fonts. 

// The variable "localStorage.persistentColorTheme" stores the default color theme selector name. The user can select and store colorTheme1 through colorTheme6 as a persistent color theme.

// The variable "localStorage.persistentFontFamily" stores the default font family. The user can select and store fontFamily1 through fontFamily3 as a persistent  font family.

// INTIALIZE COLOR THEME AND FONT FAMILY ===== ===== ===== =====
// The code below tests if the persistentColorTheme does not exist. If this test is true, it indicates this page is running in this browser for the first time, and both persistentColorTheme and persistentFontFamily must be created and set to "colorTheme2" and "fontFamily2" respectively. Both are the initial default values until the user selects and applies a preferred theme.

// Initializes the CSS selector/radio button id when editor is run for the first time in a browser.
let initialFontFamily = "fontFamily0"; 
let initialColorTheme = "colorTheme0";

// Contains CSS selector/radio button id used during this browser session.
let sessionColorTheme;
let sessionFontFamily;

// FIRST TIME INITIALIZATION
// if persistentColorTheme does not exist...
if (!localStorage.getItem("persistentColorTheme")) {
  console.log("First time initialization ====================" );
  
  // ...create and initialize it...
  localStorage.persistentColorTheme = initialColorTheme;
  console.log("persistentColorTheme = " + localStorage.persistentColorTheme);
  
  // ...and assign the persistentColorTheme as the sessionColorTheme to use during this session...
  sessionColorTheme = localStorage.persistentColorTheme;
    
  // ...and assign the "checked" attribute to the colorTheme2 radio button to show it as the selected color theme in the settings display.
  document.getElementById(sessionColorTheme).checked = true;
  
  // Also, persistentFontFamily does not exist, so create and initialize it...
  localStorage.persistentFontFamily = initialFontFamily;
  console.log("persistentFontFamily = " + localStorage.persistentFontFamily);
    
  // ...and assign the persistentFontFamily as the sessionFontFamily to use with this session...
  sessionFontFamily = localStorage.persistentFontFamily;
    
  // ...and assign the "checked" attribute to the colorTheme2 radio button to show it as the selected theme in the settings display.
  document.getElementById(sessionFontFamily).checked = true;

} else {

  // The persistentColorTheme and persitentFontFamily already exists. Assign the persistentColorTheme as the sessionColorTheme to use with this session... 
  sessionColorTheme = localStorage.persistentColorTheme;
  
  // ...and assign the "checked" attribute to the associated colorTheme radio button to show it as the selected color theme in the settings display.
  document.getElementById(sessionColorTheme).checked = true;
    
  // ...and assign the persistentFontFamily as the sessionFontFamily to use with this session...
  sessionFontFamily = localStorage.persistentFontFamily;
    
  // ...and assign the "checked" attribute to the associated fontFamily radio button to show it as the selected font family in the settings display.
  document.getElementById(sessionFontFamily).checked = true;
}

// Update the DOM root element class list (Used by <html id="rootElement"> in index.html)
// Add the sessionColorTheme and the sessionFontFamily names to the rootElement class list. This is the initial class list setup as the browser loads this page.
document.getElementById("rootElement").classList.add(sessionFontFamily, sessionColorTheme);

console.log("before user click changes =======================");
console.log("Initial classList = " + document.getElementById("rootElement").classList);

// APPLY USER-SELECTED FONT FAMILY
function fontFamilyClicked(n) {
  console.log("User onchange font family click ====================");
  console.log("old classList (font family click) = " + document.getElementById("rootElement").classList);

  let oldFontFamily = sessionFontFamily;
  sessionFontFamily = "fontFamily" + n;
  localStorage.persistentFontFamily = sessionFontFamily;

  document.getElementById("rootElement").classList.replace(oldFontFamily, sessionFontFamily);

  console.log("classList after font family update = " + document.getElementById("rootElement").classList);
  console.log(" ");
}

// APPLY USER-SELECTED COLOR THEME ===== ===== ===== ===== =====
function colorThemeClicked(n) {
  console.log("User onchange color theme click ====================");
  console.log("old classList (color theme click) = " + document.getElementById("rootElement").classList);

  let oldColorTheme = sessionColorTheme;
  sessionColorTheme = "colorTheme" + n;
  localStorage.persistentColorTheme = sessionColorTheme;

  document.getElementById("rootElement").classList.replace(oldColorTheme, sessionColorTheme);

  console.log("classList after color theme update = " + document.getElementById("rootElement").classList);
  console.log(" ");
}
console.log("End of all functions ====================" );
console.log("classList at end of any update = " + document.getElementById("rootElement").classList);
console.log();
