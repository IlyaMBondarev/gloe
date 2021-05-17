
document.querySelector('.page').classList.add('loaded');

// set plan to center

let plan = document.querySelector('.plan');

let planItems = plan.querySelector('.plan__items');
let planItemsContainer = plan.querySelector('.plan__items-container');

if (planItems.scrollBy) {
  planItems.scrollBy( ( planItemsContainer.scrollWidth - planItems.offsetWidth + 20 ) / 2 , 0 );
}

// set scrolls

let scrollToInfo = document.querySelectorAll('._scrollToInfo');
let info = document.querySelector('.info');

for (let i = 0; i < scrollToInfo.length; i++) {
  scrollToInfo[i].addEventListener('click', function () {
    info.scrollIntoView({block: "start", behavior: "smooth"});
  })
}

let scrollToPlan = document.querySelectorAll('.services__view > button');
let planSwitcher = plan.querySelector('.plan__switcher-container');

for (let i = 0; i < scrollToPlan.length; i++) {
  scrollToPlan[i].addEventListener('click', function () {
    plan.scrollIntoView({block: "start", behavior: "smooth"});
    if (i <= scrollToPlan.length / 2) {
      planSwitcher.scrollIntoView({inline: "start", behavior: "smooth"});
    } else {
      planSwitcher.scrollIntoView({inline: "end", behavior: "smooth"});
    }
  })
}

let scrollToFooter = document.querySelectorAll('._scrollToFooter');
let footer = document.querySelector('.footer');

for (let i = 0; i < scrollToFooter.length; i++) {
  scrollToFooter[i].addEventListener('click', function () {
    footer.scrollIntoView({block: "start", behavior: "smooth"});
  })
}

let scrollToLibraries = document.querySelector('._toLibraries');
let libraries = document.querySelector('._libraries');

scrollToLibraries.addEventListener('click', function () {
  libraries.scrollIntoView({block: "start", behavior: "smooth"});
})

let scrollToBookStories = document.querySelector('._toBookStories');
let bookStories = document.querySelector('._bookStories');

scrollToBookStories.addEventListener('click', function () {
  bookStories.scrollIntoView({block: "start", behavior: "smooth"});
})

let scrollToEducationalEstablishments = document.querySelector('._toEducationalEstablishments');
let educationalEstablishments = document.querySelector('._educationalEstablishments');

scrollToEducationalEstablishments.addEventListener('click', function () {
  educationalEstablishments.scrollIntoView({block: "start", behavior: "smooth"});
})

let scrollToReaders = document.querySelector('._toReaders');
let readers = document.querySelector('._readers');

scrollToReaders.addEventListener('click', function () {
  readers.scrollIntoView({block: "start", behavior: "smooth"});
})


// popup closer

let thanksCloser = document.querySelectorAll('._thanks-closer');
let thanks = document.querySelector('.thanks');

for (let i = 0; i < thanksCloser.length; i++) {
  thanksCloser[i].addEventListener('click', function (event) {
    if (event.target === thanksCloser[i]) {
      thanks.classList.remove('active');
    }
  })
}

//validation

function isValid(input) {
    if (input.name === 'email') {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(input.value).toLowerCase());
    }
    if (input.name === 'message') {
        return !!input.value;
    }
    return true
}


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var forms = document.querySelectorAll('._form');

var _loop = function _loop(i) {
  var requiredInputs = forms[i].querySelectorAll('._req');

  var _loop2 = function _loop2(_i) {
    requiredInputs[_i].addEventListener('input', function () {
      requiredInputs[_i].classList.remove('_error');
    });
  };

  for (var _i = 0; _i < requiredInputs.length; _i++) {
    _loop2(_i);
  }

  forms[i].addEventListener('submit', formSend);

  function formSend(_x) {
    return _formSend.apply(this, arguments);
  }

  function _formSend() {
    _formSend = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      var errors, _i2, formData;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              errors = 0;

              for (_i2 = 0; _i2 < requiredInputs.length; _i2++) {
                if (!isValid(requiredInputs[_i2])) {
                  errors++;

                  requiredInputs[_i2].classList.add('_error');
                }
              }

              formData = new FormData(forms[i]);

              if (!errors) {
                //sending message

                /*
                 let response = await fetch('sendmail.php', {
                    method: 'POST',
                    body: formData
                });
                
                */
                if (
                /* response.ok */
                true) {
                  // let result = await response.json();
                  if (thanks) {
                    thanks.classList.add('active');
                  } else {
                    alert('Thank you for your interest in our company. We will contact you very soon');
                  }

                  forms[i].reset();
                } else {
                  alert('Error. Please, repeat again');
                }
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _formSend.apply(this, arguments);
  }
};

for (var i = 0; i < forms.length; i++) {
  _loop(i);
}