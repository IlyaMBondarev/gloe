

document.querySelector('.page').classList.add('loaded');

// event input for switcher

let plan = document.querySelector('.plan');

let switchers = plan.querySelectorAll('input[name="plan"]');
let switcherActive = plan.querySelector('input[name="plan"][checked]');

let currentPlan = plan.querySelector("._plan-".concat(switcherActive.id));
currentPlan.classList.add('plan__items-active');
currentPlan.style.maxHeight = "".concat(currentPlan.scrollHeight, "px");
currentPlan.style.marginTop = '40px';

var _loop5 = function _loop5(i) {
  switchers[i].addEventListener('change', function () {
    var activePlan = plan.querySelector('.plan__items-active');
    activePlan.classList.remove('plan__items-active');
    activePlan.style.maxHeight = '';
    activePlan.style.marginTop = '';
    var currentPlan = plan.querySelector("._plan-".concat(switchers[i].id));
    currentPlan.classList.add('plan__items-active');
    currentPlan.style.maxHeight = "".concat(currentPlan.scrollHeight, "px");
    currentPlan.style.marginTop = '40px';
    switcherActiveText = switchers[i].value;
  });
};

for (var i = 0; i < switchers.length; i++) {
  _loop5(i);
}

// set plan to center

let planItems = plan.querySelectorAll('.plan__items');

for (let i = 0; i < planItems.length; i++) {
  let planItemsContainer = planItems[i].querySelector('.plan__items-container');
  if (planItems[i].scrollBy) {
    planItems[i].scrollBy( ( planItemsContainer.scrollWidth - planItems[i].offsetWidth ) / 2 , 0 );
  }
}

let planSwitcher = plan.querySelector('.plan__switcher');
let planSwitcherContainer = planSwitcher.querySelector('.plan__switcher-container');

if (planSwitcher.scrollBy && document.documentElement.offsetWidth > 576) {
  planSwitcher.scrollBy( ( planSwitcherContainer.scrollWidth - planSwitcher.offsetWidth ) / 2 , 0 );
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

for (let i = 0; i < scrollToPlan.length; i++) {
  scrollToPlan[i].addEventListener('click', function () {
    plan.scrollIntoView({block: "start", behavior: "smooth"});
    switchers[i].scrollIntoView({inline: "start", behavior: "smooth"});
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


// popups

let thanksCloser = document.querySelectorAll('._thanks-closer');
let thanks = document.querySelector('.thanks');

var _loop3 = function _loop8(i) {
  thanksCloser[i].addEventListener('click', function (event) {
    if (event.target === thanksCloser[i]) {
      thanks.classList.remove('active');
    }
  });
};

for (var i = 0; i < thanksCloser.length; i++) {
  _loop3(i);
}

let popupPlanCloser = document.querySelectorAll('._popup-plan-closer');
let popupPlanOpener = document.querySelectorAll('._popup-plan-opener');
"use strict";

var popupPlan = document.querySelector('.popup-plan');

var _loop7 = function _loop9(i) {
  popupPlanOpener[i].addEventListener('click', function (event) {
    for (var j = 0; j < switchers.length; j++) {
      if (switchers[j].checked) {
        var _ret = function () {
          popupPlan.querySelector('#switcherValue').innerHTML = switchers[j].value;
          var options = document.querySelectorAll("._".concat(switchers[j].id, " h5"));
          var selectContent = "\n        <input id=\"services0\" class=\"__select__input\" type=\"radio\" name=\"services\" value=\"\" checked />\n        <label for=\"services0\" class=\"__select__label\">Type of services</label>";

          for (var k = 0; k < options.length; k++) {
            selectContent += "\n          <input id=\"services".concat(k + 1, "\" class=\"__select__input\" type=\"radio\" name=\"services\" value=\"").concat(options[k].innerText, "\" />\n          <label for=\"services").concat(k + 1, "\" class=\"__select__label\">").concat(options[k].innerText, "</label>");
          }

          let selectServicesSingle = popupPlan.querySelector('#servicesSelect');
          let selectServicesSingle_title = selectServicesSingle.querySelector('#servicesSelectTitle');
          let selectServicesContent = selectServicesSingle.querySelector('#servicesSelectContent');

          var _loop14 = function _loop(m) {
            selectServicesSingle_labels[m].addEventListener('click', function (evt) {
              selectServicesSingle_title.textContent = selectServicesSingle_labels[m].textContent;
              selectServicesSingle.setAttribute('data-state', '');
            });
          };

          selectServicesContent.innerHTML = selectContent;
          selectServicesSingle_title.textContent = selectServicesSingle_title.getAttribute('data-default');
          let selectServicesSingle_labels = selectServicesContent.querySelectorAll('.__select__label');

          for (var m = 0; m < selectServicesSingle_labels.length; m++) {
            _loop14(m);
          }

          return "break";
        }();

        if (_ret === "break") break;
      }
    }

    popupPlan.querySelector('#planName').innerHTML = event.target.dataset.title;
    popupPlan.classList.add('active');
  });
};

for (var i = 0; i < popupPlanOpener.length; i++) {
  _loop7(i);
}

var _loop6 = function _loop10(i) {
  popupPlanCloser[i].addEventListener('click', function (event) {
    if (event.target === popupPlanCloser[i]) {
      popupPlan.classList.remove('active');
    }
  });
};

for (var i = 0; i < popupPlanCloser.length; i++) {
  _loop6(i);
}

//validation

function isValid(input) {
    if (input.name === 'email') {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(input.value).toLowerCase());
    }
    if (input.name === 'name' || input.name === 'message' || input.name === 'business' || input.name === 'service') {
      return !!input.value;
    }
    return true
}

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

  function formSend(event) {
    event.preventDefault();
    var errors = 0;

    for (var _i2 = 0; _i2 < requiredInputs.length; _i2++) {
      if (!isValid(requiredInputs[_i2])) {
        errors++;

        requiredInputs[_i2].classList.add('_error');
      }
    }

    var formData = new FormData(forms[i]);

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
        if (thanks && popupPlan) {
          popupPlan.classList.remove('active');
          thanks.classList.add('active');
        } else {
          alert('Thank you for your interest in our company. We will contact you very soon');
        }

        forms[i].reset();
      } else {
        alert('Error. Please, repeat again');
      }
    }
  }
};

for (var i = 0; i < forms.length; i++) {
  _loop(i);
}

var selectSingle = popupPlan.querySelectorAll('.popup-plan__select');

var _loop11 = function _loop(i) {
  var selectSingle_title = selectSingle[i].querySelector('.__select__title');
  var selectSingle_labels = selectSingle[i].querySelectorAll('.__select__label');
  
  // Toggle menu

  selectSingle_title.addEventListener('click', function () {
    if ('active' === selectSingle[i].getAttribute('data-state')) {
      selectSingle[i].setAttribute('data-state', '');
    } else {
      selectSingle[i].setAttribute('data-state', 'active');
    }
  });
  
  // Close when click to option

  for (var j = 0; j < selectSingle_labels.length; j++) {
    selectSingle_labels[j].addEventListener('click', function (evt) {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle[i].setAttribute('data-state', '');
    });
  }

  window.addEventListener('click', function(event) {
    if (event.target !== selectSingle[i] && !(selectSingle[i].contains(event.target))) {
      selectSingle[i].setAttribute('data-state', '');
    }
  })
};

for (var i = 0; i < selectSingle.length; i++) {
  _loop11(i);
}
