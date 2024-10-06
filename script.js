window.onload = function () {
    const starsContainer = document.getElementById('stars');

    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.animationDuration = Math.random() * 5 + 3 + 's';
        starsContainer.appendChild(star);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.discover-universe .buttons button');
    const modal = document.getElementById('preview-modal');
    const iframe = document.getElementById('preview-frame');
    const closeBtn = document.getElementById('close-preview');
    const maximizeBtn = document.getElementById('maximize-preview');

    let isPreviewOpen = false;
    let currentUrl = '';
    let isMaximized = false;

    // Function to show preview modal
    function showPreview(previewUrl) {
        iframe.src = previewUrl;
        modal.classList.add('active');
        modal.style.width = '90%';
        modal.style.height = '90%';
        modal.style.opacity = 1;
        modal.style.transition = 'opacity 0.5s, width 0.5s, height 0.5s';
        isPreviewOpen = true;
        currentUrl = previewUrl;
    }

    // Function to hide preview modal and reset all styles
    function hidePreview() {
        modal.classList.remove('active');
        modal.classList.remove('maximized');
        iframe.src = ''; // Reset iframe source
        isPreviewOpen = false;
        isMaximized = false;
        modal.style.width = '0'; // Collapse the modal
        modal.style.height = '0';
        modal.style.opacity = 0; // Fade out the modal
    }

    // Function to toggle maximize state
    function toggleMaximize() {
        if (isMaximized) {
            modal.classList.remove('maximized');
            modal.style.width = '90%';
            modal.style.height = '90%';
            modal.style.opacity = 1;
        } else {
            modal.classList.add('maximized');
            modal.style.width = '100vw';
            modal.style.height = '100vh';
            modal.style.opacity = 1;
        }
        isMaximized = !isMaximized;
    }

    // On button click, show the preview modal
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const previewUrl = button.getAttribute('data-preview');
            showPreview(previewUrl);
        });
    });

    // Close preview modal on close button click
    closeBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from bubbling up
        hidePreview();
    });

    // Maximize/minimize preview modal on maximize button click
    maximizeBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from bubbling up
        toggleMaximize();
    });
});
