
document.querySelector('.page').classList.add('loaded');

// set plan to center

let plan = document.querySelector('.plan');

let planItems = plan.querySelector('.plan__items');
let planItemsContainer = plan.querySelector('.plan__items-container');

planItems.scrollBy( ( planItemsContainer.scrollWidth - planItems.offsetWidth + 20 ) / 2 , 0 );

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
  })
}

let scrollToFooter = document.querySelectorAll('._scrollToFooter');
let footer = document.querySelector('.footer');

for (let i = 0; i < scrollToFooter.length; i++) {
  scrollToFooter[i].addEventListener('click', function () {
    footer.scrollIntoView({block: "start", behavior: "smooth"});
  })
}

let thanksCloser = document.querySelectorAll('._thanks-closer');
let thanks = document.querySelector('.thanks');

for (let i = 0; i < thanksCloser.length; i++) {
  thanksCloser[i].addEventListener('click', function () {
    thanks.classList.remove('active');
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


let forms = document.querySelectorAll('._form');

for( let i = 0; i < forms.length; i++ ) {
    let requiredInputs = forms[i].querySelectorAll('._req');

    for( let i = 0; i < requiredInputs.length; i++ ) {
        requiredInputs[i].addEventListener('input', function () {
            requiredInputs[i].classList.remove('_error');
        })
    }

    forms[i].addEventListener('submit', formSend);
    
    async function formSend(event) {
      event.preventDefault();
      let errors = 0;

      for( let i = 0; i < requiredInputs.length; i++ ) {
          if (!isValid(requiredInputs[i])) {
              errors++;
              requiredInputs[i].classList.add('_error');
          }
      }

      let formData = new FormData(forms[i]);

      if (!errors) {
          //sending message

          /*

          let response = await fetch('sendmail.php', {
              method: 'POST',
              body: formData
          });
          
          */

          if ( /* response.ok */ true) {

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
  }
}