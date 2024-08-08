



// Select all the buttons
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    console.log(button);
    // Apply events 
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = 'gray'; 
        }
        else if (e.target.id==='black'){
            body.style.backgroundColor = 'black';
        } 
        else if (e.target.id==='green'){
            body.style.backgroundColor = 'green';
        }   
         else if (e.target.id==='blue'){
            body.style.backgroundColor = 'blue';
        }
    });
});
