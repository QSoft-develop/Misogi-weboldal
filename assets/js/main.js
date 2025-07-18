 // Insert shared header and activate menu links
 function loadHeader() {
  const script = document.currentScript || document.querySelector('script[src$="main.js"]');
  const headerUrl = new URL('../partials/header.html', script.src);
  fetch(headerUrl)
     .then(r => r.text())
     .then(html => {
       const tmp = document.createElement('div');
       tmp.innerHTML = html.trim();
       document.body.insertBefore(tmp.firstChild, document.body.firstChild);
       initMenu();
       highlightActiveLink();
     })
     .catch(err => console.error('Header load failed', err));
 }
 
 function initMenu() {
   const btn = document.querySelector('.hamburger');
   const menu = document.querySelector('.menu');
   if (btn && menu) {
     btn.addEventListener('click', () => {
       menu.classList.toggle('show');
     });
   }
 }
 
 function highlightActiveLink() {
   const current = location.pathname.split('/').pop() || 'index.html';
   document.querySelectorAll('.menu a').forEach(a => {
     if (a.getAttribute('href') === current) {
