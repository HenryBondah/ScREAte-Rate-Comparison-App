document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.getElementById('countryDropdown');
    var dropdownList = dropdown.querySelector('.dropdown-list');
    var selectedValue = dropdown.querySelector('.selected-value');
    var hiddenInput = document.getElementById('country');

    dropdown.addEventListener('click', function(event) {
        dropdownList.style.display = dropdownList.style.display === 'none' ? 'block' : 'none';
        event.stopPropagation();
    });

    dropdownList.querySelectorAll('li').forEach(function(item) {
        item.addEventListener('click', function(event) {
            selectedValue.textContent = item.textContent;
            hiddenInput.value = item.getAttribute('data-value');
            dropdownList.style.display = 'none';
            event.stopPropagation();
        });
    });

    document.addEventListener('click', function() {
        dropdownList.style.display = 'none';
    });
});
