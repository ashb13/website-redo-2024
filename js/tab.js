// Get all tab buttons
const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 1. Deactivate all buttons and content panes
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

    // 2. Activate the clicked button
    button.classList.add('active');

    // 3. Get the target content ID from the data attribute
    const targetId = button.getAttribute('data-tab-target');
    const targetPane = document.getElementById(targetId);

    // 4. Activate the corresponding content pane
    if (targetPane) {
      targetPane.classList.add('active');
    }
  });
});

// Optional: Display the first tab by default on page load
document.addEventListener('DOMContentLoaded', () => {
    const firstButton = document.querySelector('.tab-button');
    if (firstButton) {
        firstButton.click();
    }
});
