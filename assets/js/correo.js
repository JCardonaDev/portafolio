(function() {
    emailjs.init("4goOaGsmcbHdV59it");
})();

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const button = this.querySelector('.contact__button');
            const originalText = button.textContent;
            button.textContent = "Enviando...";
            button.disabled = true;

            // Enviar el formulario con EmailJS
            emailjs.sendForm('service_gto6nn6', 'template_0vbk0td', this)
                .then(function() {
                    alert('¡Mensaje enviado correctamente!');
                    contactForm.reset();
                }, function(error) {
                    console.error('Error al enviar el mensaje:', error); 
                    alert('Error al enviar el mensaje: ' + (error.text || JSON.stringify(error)));
                })
                .finally(function() {
                    button.textContent = originalText;
                    button.disabled = false;
                });

        });
    }
});
