//Today's date for calendar
let today = new Date().toISOString().split('T')[0];
document.querySelector("#calendar").setAttribute('min', today);

//To create people options
(function () {
  for (let i = 1; i <= 20; i++) {
    let option = document.createElement("option");
    if (i === 1) {
      option.textContent = `${i} person`;
    } else {
      option.textContent = `${i} people`;
    }
    document.querySelector("#people").appendChild(option);
  }
})();

//To create schedule options
(function () {
  let hour = 10;
  let ampm = "AM";
  let half = "00"
  
  for (let i = 0; i < 29; i++) {
    if (hour === 12 && ampm === "AM") {
      ampm = "PM"
    } else if (hour === 13) {
      hour = 1;
    } else if (i === 28) {
      ampm = "AM";
    }
    let option = document.createElement("option");
    option.textContent = `${hour}:${half} ${ampm}`;
    document.querySelector("#hours").appendChild(option);
    hour = i % 2 !== 0 ? hour + 1 : hour;
    half = half === "00" ? "30" : "00";
  }  
})();
             
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();