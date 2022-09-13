const form = document.querySelector('form');

function submitForm(formParam) {
    
    const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items'
    const fInputArray = formParam.querySelectorAll('input');
    
    const data = {
        Name: fInputArray[0].value,
        Email: fInputArray[1].value,
        Phone: fInputArray[2].value,
        Message: fInputArray[3].value
    }

    const body = {item: data}

    const fetchParams = {
        method : 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
            "X-API-Key": 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
        },
        body: JSON.stringify(body)
    };

     fetch(url, fetchParams) 
      .then(response => {
          if(response.ok) return response.json();

      })
      .then(json => {
          console.log(json);
      })

      .then(json => {
        displaySuccess();
    })
      .catch((error) => { console.log(error); });
    
};

 function clearForm (formElem) {
    for(let i=0; i < formElem.querySelectorAll('input').length -1; i++) {
        formElem.querySelectorAll('input')[i].value = '';
    }
 }

function displaySuccess() {
    const succMsg = document.getElementsByClassName('success-msg')[0];
    succMsg.className = "success-msg success-visible";
    setTimeout(function() {succMsg.className = "success-msg"},2000);
}

window.addEventListener('load', () => {

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        submitForm(form);
        clearForm(form);   // <-- Clear Form input
    })
});

