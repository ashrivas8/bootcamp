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
}

function $razor(selector) {
  // const selectedElements
  const elements = document.querySelectorAll(selector);
  // console.log(elements);
  return new SelectorUtils(elements);
};

$razor.setState = function(key, value, setInSession = false) {
  if(typeof key !== 'string') {
    throw new Error('Key should be a string!');
  }
  if (setInSession) {
    sessionStorage.setItem(key, value);
  }
  else {
    localStorage.setItem(key, value);
  }
};

$razor.getState = function(key, setInSession = false) {
  if(typeof key !== 'string') {
    throw new Error('Key should be a string!');
  }

  if (setInSession) {
    if (sessionStorage.getItem(key)) {
      return sessionStorage.getItem(key);
    }
    else
      throw new Error('Key not present in Session Storage');
  }
  else {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    }
    else
      throw new Error('Key not present in Local Storage');
  }
};