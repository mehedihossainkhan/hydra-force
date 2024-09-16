const allTab = document.getElementById('see-all');
const tabContents = document.querySelectorAll('.tab-pane');
const tabLinks = document.querySelectorAll('.nav-link');

allTab.addEventListener('click', function(event) {
    event.preventDefault();
    let isActive = allTab.classList.contains('active');

    if (isActive) {
        tabContents.forEach(tab => tab.classList.remove('show', 'active'));
        tabLinks.forEach(link => link.classList.remove('active'));
        allTab.classList.remove('active');
    } else {
        tabContents.forEach(tab => tab.classList.add('show', 'active'));
        tabLinks.forEach(link => link.classList.remove('active'));
        allTab.classList.add('active');
    }
});

tabLinks.forEach(button => {
    if (button !== allTab) {
        button.addEventListener('click', function() {
            tabContents.forEach(tab => tab.classList.remove('show', 'active'));
            tabLinks.forEach(link => link.classList.remove('active'));

            const targetTabContent = document.querySelector(button.dataset.bsTarget);
            targetTabContent.classList.add('show', 'active');
            button.classList.add('active');
            allTab.classList.remove('active');
        });
    }
});
