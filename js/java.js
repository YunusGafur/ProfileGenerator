const submit = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const colorInput = document.getElementById('colorInput');
const petInputs = document.querySelectorAll('input[type="radio"]');
const output = document.getElementById('output');

submit.addEventListener('click', function () {
    const name = nameInput.value;
    const age = ageInput.value;
    const color = colorInput.value;
    let pet = 'dog, cat, fish';

    output.innerHTML = 'Name: ' + name +
        ' Age: ' + age +
        ' Favorite Color: ' + color + ' Favorite Pet: ' 
        + pet;
    });
