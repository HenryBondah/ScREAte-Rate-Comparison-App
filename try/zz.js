document.addEventListener('DOMContentLoaded', function () {
    var currentStep = 1;
    var totalSteps = 3; // Adjust this based on your total number of steps

    function showStep(step) {
        // Hide all steps
        document.querySelectorAll('.form-step').forEach(function (stepDiv) {
            stepDiv.style.display = 'none';
        });

        // Show current step
        document.getElementById('step' + step).style.display = 'block';

        // Update progress bar
        updateProgressBar(step);
    }

    function updateProgressBar(step) {
        var progressWidth = (step / totalSteps) * 100;
        document.getElementById('progress').style.width = progressWidth + '%';
    }

    function areFieldsValid(stepDiv) {
        var requiredFields = stepDiv.querySelectorAll('input[required], select[required]');
        var isValid = Array.from(requiredFields).every(field => {
            if (field.type === 'radio' || field.type === 'checkbox') {
                var name = field.name;
                return stepDiv.querySelector(`input[name="${name}"]:checked`) !== null;
            }
            return field.value.trim() !== '';
        });

        if (stepDiv.querySelector('#firstTimeNo:checked') !== null) {
            var previousAppsChecked = stepDiv.querySelector('#previousApps input[type="checkbox"]:checked') !== null;
            return isValid && previousAppsChecked;
        }

        return isValid;
    }

    function handleContinueClick(btn) {
        var targetStep = parseInt(btn.getAttribute('data-step'));
        var currentStepDiv = document.getElementById('step' + currentStep);

        if (areFieldsValid(currentStepDiv)) {
            currentStep = targetStep;
            showStep(currentStep);
        } else {
            alert('Please fill out all required fields before continuing.');
        }
    }

    document.querySelectorAll('.continue-btn').forEach(function (btn) {
        btn.addEventListener('click', function () { handleContinueClick(btn); });
    });

    document.querySelectorAll('.back-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var targetStep = parseInt(btn.getAttribute('data-step'));
            currentStep = targetStep;
            showStep(currentStep);
        });
    });

    // Conditional display for "Previous Apps"
    document.getElementById('firstTimeNo').addEventListener('change', function () {
        document.getElementById('previousApps').style.display = 'block';
    });

    document.getElementById('firstTimeYes').addEventListener('change', function () {
        document.getElementById('previousApps').style.display = 'none';
    });

    // Initialize with the first step
    showStep(currentStep);
});
