// Add the current year to the footer on every page.
document.querySelectorAll('.year').forEach(function (yearElement) {
  yearElement.textContent = new Date().getFullYear();
});

// Open and close the navigation menu on smaller screens.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

if (menuButton && navigation) {
  menuButton.addEventListener('click', function () {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuButton.textContent = isOpen ? '×' : '☰';
  });
}

// This sample contact form opens the visitor's email application.
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    const recipient = 'reaganmuraguri74@gmail.com';

    if (!name || !email || !message) {
      document.querySelector('#formNote').textContent = 'Please complete all the fields before sending.';
      return;
    }

    const subject = encodeURIComponent('Portfolio message from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\n\\nMessage:\\n' + message);
    window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
    document.querySelector('#formNote').textContent = 'Your email application should open with the message. Send it there to complete the process.';
  });
}