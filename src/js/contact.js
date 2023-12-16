const hamburger = document.getElementById('hamburgerToggle');
    const navbar = document.getElementById('navbar');
    hamburger.addEventListener('click', onHamburgerClick );    
     function onHamburgerClick() {
        if (navbar.classList.contains('open')) {
            navbar.classList.remove('open');
            return;
        }
        navbar.classList.add('open');        
    } 
(function(){
    emailjs.init("kRlLmX-qS_ZrxJJ4p");
      })();
      function sendMail(){

var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value 
    }; 
serviceID ="service_bj430vj";
 const templateID ="template_lfza8vd";
 emailjs.send(serviceID, templateID, params) 
 .then(
     res =>{
         document.getElementById("name").value = "";
         document.getElementById("email").value = "";
         document.getElementById("phone").value = "";   
         document.getElementById("message").value = "";
         console.log("success", res.status);
         alert("Your message has been sent successfully!");
     
     }
 )
 }