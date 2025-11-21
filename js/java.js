const submit = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const colorInput = document.getElementById('colorInput');
const output = document.getElementById('output');

submit.addEventListener('click', function () {
    const name = nameInput.value.trim();
    const age = ageInput.value;
    const color = colorInput.value;

    output.innerHTML = 'Name: ' + name +
        '<br>Age: ' + age +
        '<br>Favorite Color: ' + color;
});
