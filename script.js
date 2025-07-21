document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".cookie-banner");
    const buttons = banner.querySelectorAll(".cookie-btn");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        banner.classList.remove("show");
        localStorage.setItem("cookieConsent", button.classList.contains("accept") ? "yes" : "no");
      });
    });


    const consent = localStorage.getItem("cookieConsent");
    if (!consent) banner.classList.add("show");
});
  

document.addEventListener('DOMContentLoaded', () => {
    const confirmBlock = document.querySelector('.age-gate__confirm');
    const deniedBlock = document.querySelector('.age-gate__denied');
    const btnConfirm = document.querySelector('.btn-confirm');
    const btnDeny = document.querySelector('.btn-deny');

    confirmBlock.classList.add('show');

    btnConfirm.addEventListener('click', () => {
      confirmBlock.classList.remove('show');
      // localStorage.setItem('ageConfirmed', 'true');
      setTimeout(() => {
        document.querySelector('.age-gate').style.display = 'none';
      }, 500);
    });

    btnDeny.addEventListener('click', () => {
      // При переході на Google, знімемо блок, щоб не заважав
      window.location.href = 'https://www.google.com';
    });
});
  
 document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contact-modal');
    const openLinks = document.querySelectorAll('.contact-link');
    const closeBtn = modal.querySelector('.modal-close');

    openLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    });

    // Закриття модалки кліком поза формою
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
      }
    });

    // Можна додати обробку submit форми тут, якщо потрібно
  });