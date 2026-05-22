
   
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(acc => {
      acc.addEventListener('click', () => {
        acc.classList.toggle('active');
        const content = acc.nextElementSibling;
        
        if (content.classList.contains('show')) {
          content.classList.remove('show');
        } else {
          content.classList.add('show');
        }
      });
    });
