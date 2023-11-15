window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.opacity = 0.6; // Solid color when scrolled
        navbar.style.transition = "opacity 0.3s";
    } else {
        navbar.style.opacity = 1; // Transparent when at top
    }
};

particlesJS.load('particles', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});
