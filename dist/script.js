// Keep track of the last sibling element
var currentSibling = null;

function scrollToNextSibling(element) {
  // Get the current element
  var currentElement = element.parentNode;

  // Get the next sibling element
  var nextSibling = null;
  if (currentSibling === null) {
    // If no last sibling is set, get the first next sibling
    nextSibling = currentElement.nextElementSibling;
  } else if (
    currentSibling.nextElementSibling != null &&
    currentSibling.nextElementSibling.className == "chat"
  ) {
    // If a last sibling is set, get the next sibling of the last sibling
    nextSibling = currentSibling.nextElementSibling;
  }

  if (nextSibling != null && nextSibling.className == "chat") {
    // Scroll to the next sibling element
    nextSibling.scrollIntoView({ behavior: "smooth" });
    // Save the last sibling element
    currentSibling = nextSibling;
  }
}

function scrollToPreviousSibling(element) {
  // Get the current element
  var currentElement = element.parentNode;

  // Get the previous sibling element
  var previousSibling = null;
  if (currentSibling === null) {
    // If no last sibling is set, get the first previous sibling
    previousSibling = currentElement.previousElementSibling;
  } else if (currentSibling.previousElementSibling.className == "chat") {
    // If a last sibling is set, get the previous sibling of the last sibling
    previousSibling = currentSibling.previousElementSibling;
  }
  if (previousSibling != null && previousSibling.className == "chat") {
    // Scroll to the previous sibling element
    previousSibling.scrollIntoView({ behavior: "smooth" });
    // Save the last sibling element
    currentSibling = previousSibling;
  }
}