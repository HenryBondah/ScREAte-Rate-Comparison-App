document.addEventListener('DOMContentLoaded', function() {
    var amountInput = document.getElementById('amount');
    var contactInfo = document.getElementById('contactInfo');
    var surveyForm = document.getElementById('surveyForm');
    var firstTimeYes = document.getElementById('firstTimeYes');
    var firstTimeNo = document.getElementById('firstTimeNo');
    var previousApps = document.getElementById('previousApps');
    var appCheckboxes = document.querySelectorAll('.app-checkbox');

    function togglePreviousApps(isVisible) {
        previousApps.style.display = isVisible ? 'block' : 'none';
        appCheckboxes.forEach(function(checkbox) {
            checkbox.required = isVisible;
        });
    }

    firstTimeYes.addEventListener('change', function() {
        if (firstTimeYes.checked) {
            togglePreviousApps(false);
        }
    });

    firstTimeNo.addEventListener('change', function() {
        if (firstTimeNo.checked) {
            togglePreviousApps(true);
        }
    });

    amountInput.addEventListener('input', function() {
        if (amountInput.value.length > 0) {
            contactInfo.style.display = 'block';
        } else {
            contactInfo.style.display = 'none';
        }
    });

  
});
