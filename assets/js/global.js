document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.ams-search-btn');
    const searchContainer = document.querySelector('.search-container');
    const searchWrapper = document.querySelector('.ams-search-btn-wrapper');
    const closeButton = document.querySelector('.close-search');
    const searchInput = searchContainer.querySelector('input');

    searchButton.addEventListener('click', function () {
        if (searchContainer.classList.contains('active')) {
            window.location.href = '/search.html';
        } else {
            searchContainer.classList.remove('d-none');
            searchContainer.classList.add('active');
            searchWrapper.classList.add('active-wrap');
            searchInput.focus();
        }
    });

    closeButton.addEventListener('click', function () {
        searchInput.value = '';
        searchContainer.classList.add('d-none');
        searchContainer.classList.remove('active');
        searchWrapper.classList.remove('active-wrap');
    });

    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            window.location.href = '/search.html';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.mobile-toggler').addEventListener('click', () => {
        document.body.classList.toggle("open-menu");
        document.querySelector('.navbar-expand-lg .navbar-toggler').click();
    });

    // Inner Menu
    document.querySelector('.backmenu a').addEventListener('click', () => {
        document.querySelector('.dropdown-toggle.show').click();
    });

    document.querySelector('.backmenu a').addEventListener('click', () => {
        document.querySelector('.dropdown-toggle.show').click();
    });
});

// Inner Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-dropdown.dropdown-menu .dropdown-grid h6').forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            const parent = element.parentElement;
            // Remove 'open' class from all siblings
            Array.from(parent.parentElement.children).forEach(sibling => {
                if (sibling !== parent) {
                    sibling.classList.remove('open');
                }
            });
            // Toggle 'open' class on the clicked element's parent
            parent.classList.toggle('open');
        });
    });
});

// Footer Lang Dropdown 
document.addEventListener("DOMContentLoaded", function() {
    const langDropdown = document.querySelector(".lang-dropdown");
    const langMenu = document.querySelector(".lang-dropdown-menu");

    langDropdown.addEventListener("click", function(event) {
        langDropdown.classList.toggle("active");
        langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
        event.stopPropagation();
    });

    document.addEventListener("click", function() {
        langDropdown.classList.remove("active");
        langMenu.style.display = "none";
    });
});