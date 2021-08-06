// create a class or function
class RazorSelector {
  constructor(elemList) {
    this.length = elemList.length;
  }
}

function $razor(className) {
  // const selectedElements
  const elements = document.getElementsByClassName(className);
  return new RazorSelector(elements);
};

// document.addEventListener('DOMContentLoaded', $razor);