(()=>{var __webpack_modules__={"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/()=>{eval("document.addEventListener('DOMContentLoaded', function () {});\n\n//# sourceURL=webpack://internet-shop/./src/js/main.js?")},"./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/()=>{eval("var currentIndex = 0;\nvar items = document.querySelectorAll('.carousel-item');\nvar totalItems = items.length;\nvar dotsContainer = document.querySelector('.carousel-dots');\nfunction showSlide(index) {\n  if (index < 0) {\n    currentIndex = totalItems - 1;\n  } else if (index >= totalItems) {\n    currentIndex = 0;\n  } else {\n    currentIndex = index;\n  }\n  var newTransformValue = -currentIndex * 100 + '%';\n  document.querySelector('.carousel-container').style.transform = 'translateX(' + newTransformValue + ')';\n  updateDots();\n}\nfunction nextSlide() {\n  showSlide(currentIndex + 1);\n}\nfunction prevSlide() {\n  showSlide(currentIndex - 1);\n}\nfunction updateDots() {\n  var dots = document.querySelectorAll('.dot');\n  dots.forEach(function (dot, index) {\n    dot.classList.toggle('active', index === currentIndex);\n  });\n}\nfunction createDots() {\n  var _loop = function _loop(i) {\n    var dot = document.createElement('div');\n    dot.classList.add('dot');\n    dot.addEventListener('click', function () {\n      return showSlide(i);\n    });\n    dotsContainer.appendChild(dot);\n  };\n  for (var i = 0; i < totalItems; i++) {\n    _loop(i);\n  }\n  updateDots();\n}\ncreateDots();\n\n// function toggleMenu() {\n//     const wrapMenu = document.querySelector('.wrap-menu');\n//     const menuItems = document.querySelector('.menu-items');\n//     const burgerIcon = document.querySelector('.burger-icon');\n//     menuItems.classList.toggle('active');\n//     wrapMenu.classList.toggle('active');\n//     burgerIcon.classList.toggle('active');\n// }\n\n//# sourceURL=webpack://internet-shop/./src/js/script.js?")}};__webpack_modules__["./src/js/main.js"]();var __webpack_exports__={};__webpack_modules__["./src/js/script.js"]()})();
//# sourceMappingURL=script.js.map