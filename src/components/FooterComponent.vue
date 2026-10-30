<template>
  <footer class="portfolio-footer">
    <div class="portfolio-footer-inner">
      <a class="footer-name" href="#home" aria-label="Ferdinand, back to top">Ferdinand</a>
      <p class="footer-copy">Building practical digital experiences.</p>
      <nav class="footer-socials" aria-label="Social media">
        <a href="https://github.com/Ferdinand05" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img width="22" height="22" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="" />
          <span>GitHub</span>
        </a>
        <a href="https://www.instagram.com/_ferdinandk" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img width="22" height="22" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="" />
          <span>Instagram</span>
        </a>
        <a href="https://www.linkedin.com/in/ferdiinand/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img width="22" height="22" src="https://img.icons8.com/color/48/linkedin.png" alt="" />
          <span>LinkedIn</span>
        </a>
      </nav>
      <small class="footer-copyright">© {{ new Date().getFullYear() }} Ferdinand</small>
    </div>
  </footer>
</template>

<style scoped>
.portfolio-footer {
  padding: 2.5rem 1.5rem;
  background: #e5e7eb;
  color: #111827;
}

.portfolio-footer-inner {
  display: grid;
  width: min(100%, 72rem);
  margin-inline: auto;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.45rem 2rem;
}

.footer-name { color: #111827; font-size: 1.2rem; font-weight: 750; text-decoration: none; }
.footer-copy { color: #4b5563; font-size: 0.9rem; }
.footer-socials { display: flex; grid-column: 2; grid-row: 1 / span 2; gap: 0.5rem; }
.footer-socials a { display: inline-flex; min-height: 2.75rem; align-items: center; gap: 0.5rem; padding: 0.45rem 0.65rem; border-radius: 0.35rem; color: #374151; font-size: 0.875rem; text-decoration: none; transition: background 150ms ease, color 150ms ease; }
.footer-socials a:hover { background: #fff; color: #312e81; }
.footer-socials img { object-fit: contain; }
.footer-copyright { grid-column: 1 / -1; margin-top: 1.35rem; padding-top: 1rem; border-top: 1px solid rgb(17 24 39 / 14%); color: #4b5563; }
.footer-socials a:focus-visible, .footer-name:focus-visible { outline: 3px solid #4f46e5; outline-offset: 3px; }

@media (max-width: 560px) {
  .portfolio-footer-inner { grid-template-columns: 1fr; }
  .footer-socials { grid-column: 1; grid-row: auto; flex-wrap: wrap; margin-top: 0.6rem; }
  .footer-copyright { grid-column: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .footer-socials a { transition: none; }
}
</style>
