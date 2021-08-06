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
    // return this.elements.classList;
  }

  removeClass(className) {
    this.elements.forEach(element => {
      element.classList.remove(className);
    });
  }

  on(event, cb) {
    this.elements.forEach(element => {
      element.addEventListener(event, cb);
    });
  }

  off(event, cb) {
    this.elements.forEach(element => {
      element.removeEventListener(event, cb)
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