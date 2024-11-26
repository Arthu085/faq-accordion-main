document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  const toggleHeaders = document.querySelectorAll('h2');

  const toggleContent = (buttonOrHeader) => {
    const section = buttonOrHeader.closest('section'); 
    const paragraph = section.querySelector('p');
    const icon = section.querySelector('button img'); 

    if (paragraph.classList.contains('hidden')) {
      paragraph.classList.remove('hidden');
      icon.src = 'assets/images/icon-minus.svg';
    } else {
      paragraph.classList.add('hidden');
      icon.src = 'assets/images/icon-plus.svg';
    }
  };

  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => toggleContent(button));
  });

  toggleHeaders.forEach((header) => {
    header.addEventListener('click', () => toggleContent(header));
  });
});
