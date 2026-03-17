/* ===========================
   QodeRaven — script.js
   Lightweight vanilla JavaScript
   =========================== */

// ---------- Navbar scroll effect ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ---------- Mobile menu toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ---------- Scroll reveal animations ----------
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger animation for siblings
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '-50px' });

revealElements.forEach((el, i) => {
  // Add stagger delay for grid children
  const parent = el.parentElement;
  if (parent) {
    const siblings = parent.querySelectorAll('.reveal');
    if (siblings.length > 1) {
      const idx = Array.from(siblings).indexOf(el);
      el.dataset.delay = idx * 80;
    }
  }
  observer.observe(el);
});

// ========== Team Modal Functionality ==========
const teamModal = document.getElementById('teamModal');
const teamModalClose = document.getElementById('teamModalClose');
const teamCards = document.querySelectorAll('.team-card');

// Open modal on team card click
teamCards.forEach(card => {
  card.addEventListener('click', () => {
    const avatarImg = card.querySelector('.team-avatar');
    const name = card.dataset.name;
    const role = card.dataset.role;
    const bio = card.dataset.bio;

    document.querySelector('.team-modal-name').textContent = name;
    document.querySelector('.team-modal-role').textContent = role;
    document.querySelector('.team-modal-bio').textContent = bio;
    document.querySelector('.team-modal-avatar').src = avatarImg.src;
    document.querySelector('.team-modal-avatar').alt = avatarImg.alt;

    teamModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Close modal
function closeTeamModal() {
  teamModal.classList.remove('active');
  document.body.style.overflow = '';
}

teamModalClose.addEventListener('click', closeTeamModal);
teamModal.querySelector('.team-modal-backdrop').addEventListener('click', closeTeamModal);

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && teamModal.classList.contains('active')) {
    closeTeamModal();
  }
});
