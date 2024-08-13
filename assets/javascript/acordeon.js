document.addEventListener('DOMContentLoaded', function () {
    const triggers = document.querySelectorAll('.trigger');
    const submenus = document.querySelectorAll('.submenu');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            // Close any open content
            closeAllContents();

            // Open the clicked content
            const content = this.nextElementSibling;
            this.style.display = 'none'; // Hide the trigger
            content.style.display = 'block'; // Show the content
        });
    });

    submenus.forEach(submenu => {
        submenu.addEventListener('click', function () {
            const content = this.parentElement;
            const trigger = content.previousElementSibling;
            content.style.display = 'none'; // Hide the content
            trigger.style.display = 'flex'; // Show the trigger
        });
    });

    function closeAllContents() {
        const allContents = document.querySelectorAll('.content');
        const allTriggers = document.querySelectorAll('.trigger');

        allContents.forEach(content => {
            content.style.display = 'none'; // Hide all contents
        });

        allTriggers.forEach(trigger => {
            trigger.style.display = 'flex'; // Show all triggers
        });
    }
});
