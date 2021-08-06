// create a class or function
class RazorSelector {
  constructor(elemList) {
    this.length = elemList.length;
  }
}

function $razor(selector) {
  // const selectedElements
  const elements = document.querySelectorAll(selector);
  // console.log(elements);
  return new RazorSelector(elements);
};

// document.addEventListener('DOMContentLoaded', $razor);