const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.maxHeight = null);
            
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

function mostraNotifica() {
    const alertBox = document.getElementById('custom-alert');
    alertBox.classList.add('show');
}

function chiudiNotifica() {
    const alertBox = document.getElementById('custom-alert');
    alertBox.classList.remove('show');
}

function gestisciContatto(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email-input').value;
    
    if (emailInput) {
        alert(`🚀 Candidatura inviata con successo da: ${emailInput}\nVerrai ricontattato dal team entro 24 ore!`);
        document.getElementById('email-input').value = '';
    }
}
