// Burger button toggle

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('burger').addEventListener('click', function () {
        document.querySelector('header').classList.toggle('open');
        const content = document.getElementById('main');
        content.classList.toggle('hidden');
    })
})

// --- Filter buttons selection

function toggleButton(button) {
    button.classList.toggle('active');
}

const buttons = document.querySelectorAll('.filter-btn');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        toggleButton(this);
    });
});

// ---

// --- Dropdown menu toggle

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (event) {
            if (event.target.classList.contains('filter')) {
                event.target.classList.toggle('active');
            }
        });
    });
});

// --- Caret rotation animation

window.toggleDropdown = function(dropdownId, caretId) {
    const dropdown = document.getElementById(dropdownId);
    const caret = document.getElementById(caretId);

    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        caret.classList.remove('rotate')
    } else {
        dropdown.classList.add('show');
        caret.classList.add('rotate')
    }
}

// --- Clear search bar

const clear = document.querySelector('.cross');
clear.onclick = function () {
    const searchLine = document.getElementById('search-line');
    searchLine.value='';
    searchLine.focus();
} 

// --- Filter reset button 

const reset = document.querySelector('.reset');
reset.onclick = function () {
    const buttons = document.querySelectorAll('.filter-btn');
    const priceFilter = document.querySelectorAll('.price-w');
    priceFilter.forEach(priceFilter => {
        priceFilter.value='';
    })
    buttons.forEach(button => {
        button.classList.remove('active');
    });
}

// ---Restrict input type number 
function validateInput(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}