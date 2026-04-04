async function loadPartial(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

async function init() {
    await Promise.all([
        loadPartial("nav-bar", "partials/nav.html"),
        loadPartial("footer-bar", "partials/footer.html"),
    ]);

    document.getElementById('hamBtn').addEventListener('click', () => {
    const nl = document.getElementById('navLinks');
    const open = nl.style.display === 'flex';
    if (open) { nl.removeAttribute('style'); }
    else {
    Object.assign(nl.style, {
        display:'flex', flexDirection:'column', position:'fixed',
        top:'70px', left:'0', right:'0',
        background:'rgba(14,28,56,.99)', padding:'2rem', zIndex:'99', gap:'.3rem'
    });
    }
});
}
init();
