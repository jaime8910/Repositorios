const toggleSwitch = document.getElementById('toggleSwitch');
const content = document.getElementById('content');

toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked) {
        content.classList.remove('bg-light');
        content.classList.add('bg-dark');
    } else {
        content.classList.remove('bg-dark');
        content.classList.add('bg-light');
    }
});
