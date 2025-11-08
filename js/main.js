// Small JS for menu toggle and contact form demo
document.addEventListener('DOMContentLoaded',function(){
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  navToggle.addEventListener('click',function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if(nav.hasAttribute('hidden')){ nav.removeAttribute('hidden'); }
    else{ nav.setAttribute('hidden',''); }
  });

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name').trim();
    const email = data.get('email').trim();
    const message = data.get('message').trim();
    if(!name || !email || !message){
      status.textContent = 'Please complete all fields.';
      status.style.color = '#ffb4a2';
      return;
    }
    // Simulate sending
    status.textContent = 'Sending…';
    status.style.color = '#94a3b8';
    setTimeout(()=>{
      status.textContent = 'Thanks! I will get back to you soon.';
      status.style.color = '#7efc9f';
      form.reset();
    },900);
  });
});
