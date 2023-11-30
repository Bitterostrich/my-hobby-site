var userMenuButton = document.getElementById('user-menu-button');
var userMenuDropdown = userMenuButton.nextElementSibling;


userMenuButton.addEventListener('click', function() {

    var isExpanded = userMenuButton.getAttribute('aria-expanded') === 'true';

    userMenuButton.setAttribute('aria-expanded', !isExpanded);

    userMenuDropdown.style.display = isExpanded ? 'none' : 'block';
})