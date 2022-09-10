const form = document.querySelector('form');


function submitForm() {

    const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items'

    const fFullName = document.getElementById('name').value;
    const fEmail = document.getElementById('email').value;
    const fPhone = document.getElementById('tel').value;
    const fMessage = document.getElementById('msg').value;

    const data = {
        Name: fFullName,
        Email: fEmail,
        Phone: fPhone,
        Message: fMessage
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

    console.log(url, fetchParams);



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
    document.getElementById('name').value= '';
    document.getElementById('email').value= '';
    document.getElementById('tel').value= '';
    document.getElementById('msg').value= '';
 }

function displaySuccess() {
    const succMsg = document.getElementsByClassName('success-msg')[0];
    succMsg.className = "success-msg success-visible";
    setTimeout(function() {succMsg.className = "success-msg"},2000);
}

window.addEventListener('load', () => {
    

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        submitForm();
        clearForm(form);   // <-- Clear Form

    })
});

