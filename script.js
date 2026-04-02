document.addEventListener('DOMContentLoaded', () => {
    const landingTrigger = document.getElementById('landing-trigger');
    const expansionCircle = document.getElementById('expansion-circle');

    if (landingTrigger) {
        landingTrigger.addEventListener('click', () => {
            expansionCircle.classList.add('expand-anim');
            setTimeout(() => {
                window.location.href = '/home.html';
            }, 800);
        });
    }
});