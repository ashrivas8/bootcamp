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
    
    return this;
  }

  removeClass(className) {
    this.elements.forEach(element => {
      element.classList.remove(className);
    });

    return this;
  }

  setProps(attr, value) {
    this.elements.forEach(element => {
      element.setAttribute(attr, value);
    });

    return this;
  }
}

function $razor(selector) {
  // const selectedElements
  const elements = document.querySelectorAll(selector);
  // console.log(elements);
  return new SelectorUtils(elements);
};

// document.addEventListener('DOMContentLoaded', $razor);