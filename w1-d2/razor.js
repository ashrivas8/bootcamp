// create a class or function
class SelectorUtils {
  constructor(elemList) {
    this.elements = elemList;
    this.length = this.elements.length;
  }

  addClass(className) {
    this.elements.forEach(element => {
      element.classList.add(className);
    });
  }

  removeClass(className) {
    this.elements.forEach(element => {
      element.classList.remove(className);
    });
  }

  setStyle(styleObj) {
    this.elements.forEach(element => {
      Object.keys(styleObj).forEach(key => {
        element.style[key] = styleObj[key];
      });
    });

  }
}

function $razor(selector) {
  // const selectedElements
  const elements = document.querySelectorAll(selector);
  // console.log(elements);
  return new SelectorUtils(elements);
};

// document.addEventListener('DOMContentLoaded', $razor);