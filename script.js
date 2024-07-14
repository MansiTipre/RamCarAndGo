document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('nav ul li a');

    navToggle.addEventListener('click', () => {
        document.querySelector('nav ul').classList.toggle('show-nav');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('nav ul').classList.remove('show-nav');
        });
    });
});



function rentCar(carModel) {
    document.getElementById('form-section').classList.remove('hidden');
    document.getElementById('model').value = carModel;
}
document.getElementById('rent-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your car rental request has been submitted.');
    document.getElementById('form-section').classList.add('hidden');
});



function showdropdown() {
    var dropdown=document.getElementById("dropdownContent");
    dropdown.style.display="block"
}

function hidedropdown() {
    var dropdown=document.getElementById("dropdownContent");
    dropdown.style.display="none"
}


function showdropdown1() {
    var dropdown=document.getElementById("dropdownContent1");
    dropdown.style.display="block"
}

function hidedropdown1() {
    var dropdown=document.getElementById("dropdownContent1");
    dropdown.style.display="none"
}
