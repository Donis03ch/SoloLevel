document.getElementById('burgerMenu').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
});

document.querySelectorAll('.toggle-section').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('data-target');
        const section = document.getElementById(sectionId);

        
        document.querySelectorAll('.info-section').forEach(sec => {
            sec.style.display = 'none';
        });

        
        section.style.display = 'block';

       
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
