const submit = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const colorInput = document.getElementById('colorInput');
const output = document.getElementById('output');

let pet = document.querySelectorAll('input[type="radio"]');
let hobby = document.querySelectorAll('input[type="checkbox"]');
    
let favPet;
let hobbies = [];

function getInfo(){
     //reset hobbies Array each time value
    hobbies = [];

    //check for Pets
    for(let i = 0; i < pet.length; i++){
        if(pet[i].checked){
           favPet = pet[i].value;
        }
    }
    console.log(favPet);

//check hobbies
for(let i = 0; i < hobby.length; i++){
        if(hobby[i].checked){
           hobbies.push(" " + hobby[i].value);
        }
    }

}

submit.addEventListener('click', function () {
    const name = nameInput.value;
    const age = ageInput.value;
    const color = colorInput.value;
    getInfo();

    output.innerHTML = 'Name: ' + name +
        ' Age: ' + age +
        ' Favorite Color: ' + color + ' Favorite Pet: ' + favPet + ' Hobbies: ' + hobbies;
    });

    

