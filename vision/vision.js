document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        vision = 0,
        delta = 0;

    if (parent.className.indexOf('vision') != -1) {
        vision = 1000;
    }

    parent.addEventListener('mousemove', function(event) {
        delta = (event.clientX - window.innerWidth / 2) * 0.5;

        handle.style.left = event.clientX + delta + 'px';

        topPanel.style.width = event.clientX + vision + delta + 'px';
    });
});