async function loadPartial(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

    function openModal(id){ 
        document.getElementById(id).classList.add('open'); 
        document.body.style.overflow='hidden'; }

    function closeModal(id){ 
        document.getElementById(id).classList.remove('open'); document.body.style.overflow=''; }
        document.addEventListener('keydown',e=>{ 
            if(e.key==='Escape') 
                document.querySelectorAll('.overlay.open').forEach(m=>{ m.classList.remove('open'); 
            document.body.style.overflow=''; }); });

function submitForm(){
    const t=document.getElementById('toast'); t.style.display='block';
    setTimeout(()=>t.style.display='none',4000);}


async function init() {
    await Promise.all([
            
    loadPartial("nav-bar", "partials/nav.html"),
    loadPartial("marquee-bar", "partials/marquee.html"),
    loadPartial("motto-bar", "partials/motto.html"),
    loadPartial("hero-bar", "partials/hero.html"),
    loadPartial("about-bar", "partials/about.html"),
    loadPartial("curriculum-bar", "partials/curriculum.html"),
    loadPartial("news-bar", "partials/news.html"),
    loadPartial("facilities-bar", "partials/facilities.html"),
    loadPartial("admission-bar", "partials/admission.html"),
    loadPartial("contact-bar", "partials/contact.html"),
    loadPartial("footer-bar", "partials/nav.html"),
    loadPartial("modal-bar", "partials/modal.html"),
    // loadPartial("shop-bar", "partials/shop.html"),
    loadPartial("quicklinks-bar", "partials/quicklinks.html"),
    loadPartial("hours-bar", "partials/hours.html"),
    // loadPartial("sports-bar", "partials/sports.html"),
    ]);

    const year = new Date().getFullYear();
    const nextYear = year + 1;

    document.querySelectorAll(".academic-year").forEach(el => {
        el.textContent = `${year}/${nextYear}`;
    })



    const obs = new IntersectionObserver(entries => {
        entries.forEach((e,i) => {
            if(e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"),i*65);
            obs.unobserve(e.target);}});},{threshold:.08});
            document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));

            window.addEventListener("scroll", ()=> {
                document.getElementById("navbar").style.borderBottomWidth = window.scrollY>60 ? "3px" : "3px";
            });
                
            document.getElementById('hamBtn').addEventListener('click',()=>{
                const nl=document.getElementById('navLinks'); 
                const open=nl.style.display==='flex';
                
                if(open){ 
                    nl.removeAttribute('style'); }
                
                    else { 
                    Object.assign(nl.style,{display:'flex',flexDirection:'column',position:'fixed',top:'70px',left:'0',right:'0',background:'rgba(14,28,56,.99)',padding:'2rem',zIndex:'99',gap:'.3rem'}); 
                }
        });

            document.querySelectorAll('a[href^="#"]').forEach(a=>{
                a.addEventListener('click',e=>{
            const t=document.querySelector(a.getAttribute('href'));
            if(t){ 
                e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); 
                document.getElementById('navLinks').removeAttribute('style'); }
    });
    });
}
init();
