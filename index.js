const title = "Hi, I'm Ashlyn";
const desc = "I'm a Web Developer";
const speed = 75;
var i = 0;
var j = 0;

window.addEventListener("load", typeWriter);

/* ---Type writer display of hero title and description--- */
function typeWriter() {
  if (i < title.length) {
    document.querySelector(".hero-text-title").innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (i === title.length && j < desc.length) {
    document.querySelector(".hero-text-desc").innerHTML += desc.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}

/* ---Send email from contact section--- */
(function() {
  emailjs.init("AGdK9mVT1HK2SjKAg");
})();

function sendEmail(params) {
  var tempParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };
  emailjs. send('gmail_service_id', 'email_template_id', tempParams).then(function(message) {
    alert("Message sent successfully");
  });
}

/* ---Current year for copyright--- */
document.getElementById("year").innerHTML = new Date().getFullYear();
