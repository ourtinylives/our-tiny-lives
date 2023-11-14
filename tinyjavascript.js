window.onscroll = function() {
    var navbar = document.getElementById(&quot;navbar&quot;);
    if (document.body.scrollTop &gt; 50 || document.documentElement.scrollTop &gt; 50) {
        navbar.style.opacity = 0.6; // Solid color when scrolled
        navbar.style.transition = &quot;opacity 0.3s&quot;;
    } else {
        navbar.style.opacity = 1; // Transparent when at top
    }
};
