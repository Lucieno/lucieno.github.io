function toggleTldr(id) {
    const element = document.getElementById(id);
    if (!element) {
        return;
    }

    if (element.classList.contains('tldr-hidden')) {
        element.classList.remove('tldr-hidden');
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([element]);
        }
    } else {
        element.classList.add('tldr-hidden');
    }
}
