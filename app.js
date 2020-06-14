//For date time picker
$("#calendar").datetimepicker({
  timepicker: false,
  datepicker: true,
  format: "m/d/Y",
  minDate: 0,
});

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

//To create people options
for (let i = 1; i <= 20; i++) {
  let option = document.createElement("option");
  if (i === 1) {
    option.textContent = `${i} person`;
  } else {
    option.textContent = `${i} people`;
  }
  document.querySelector("#people").appendChild(option);
}

//To create schedule options
let hours = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM","12:30 PM", "1:00 PM","1:30 PM", "2:00 PM","2:30 PM", "3:00 PM","3:30 PM", "4:00 PM","4:30 PM", "5:00 PM","5:30 PM", "6:00 PM","6:30 PM", "7:00 PM","7:30 PM", "8:00 PM","8:30 PM", "9:00 PM","9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM", "12:00 AM"];

for (let i = 0; i < hours.length; i++) {
  let option = document.createElement("option");
  option.textContent = `${hours[i]}`;
  document.querySelector("#hours").appendChild(option);
}

