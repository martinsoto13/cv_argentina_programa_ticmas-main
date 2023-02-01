// https://www.w3schools.com/js/tryit.asp?filename=tryjs_ifthen

let hora=new Date().getHours();
let saludo;

console.log(hora);

if (hora < 12){
    saludo="Buen día!";    
} else if (hora < 20) {
    saludo="Buenas tardes!";
} else {
    saludo="Buenas noches!";
}

document.getElementById("saludo").innerHTML = saludo;


// agregado de funcionalidad para contraer / expandir detalle en el cv
// fuente: https://www.w3schools.com/howto/howto_js_collapsible.asp
var coll = document.getElementsByClassName("contraer");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Emailjs para envio de email para consultas
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_v9gmpmn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire(
        'Gracias por tu Consulta!',
        'En breve me estare comunicando con vos!',
        'success'
      );
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});