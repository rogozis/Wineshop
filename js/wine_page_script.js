// --- Burger button toggle

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('burger').addEventListener('click', function () {
        document.querySelector('header').classList.toggle('open');
        const mainContent = document.getElementById('main');
        const mobileContent = document.getElementById('mobile');
        mainContent.classList.toggle('hidden');
        mobileContent.classList.toggle('hidden');
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

// --- Dropdown menu toggle

    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (event) {
            if (event.target.classList.contains('filter')) {
                event.target.classList.toggle('active');
            }
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
