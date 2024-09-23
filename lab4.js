document.getElementById('alert-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('alert-name').value;
    alert('Hi ' + name + '!');
});


let isBlue = true;
document.getElementById('change-color-btn').addEventListener('click', function() {
    if (isBlue) {
        document.body.style.backgroundColor = '#4CAF50'; 
    } else {
        document.body.style.backgroundColor = '#3A4EB3'; 
    }
    isBlue = !isBlue; 
});


document.getElementById('text-tester-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const text = document.getElementById('text-input').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert('The text contains special characters!');
    } else {
        alert('The text is valid.');
    }
});


document.getElementById('add-text-btn').addEventListener('click', function() {
    const heading = document.getElementById('main-heading');
    heading.textContent += ' Add Text'; 
});
