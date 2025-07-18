 // Insert shared header and activate menu links
 function loadHeader() {
  const scriptPath = document.currentScript && document.currentScript.src || '';
  const base = scriptPath.replace(/\/?assets\/js\/[^/]*$/, '/');
  fetch(base + 'assets/partials/header.html')
     .then(r => r.text())
     .then(html => {
       const tmp = document.createElement('div');
       tmp.innerHTML = html.trim();
       document.body.insertBefore(tmp.firstChild, document.body.firstChild);
       initMenu();
       highlightActiveLink();
     });
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
       a.classList.add('active');
