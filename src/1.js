
  function loadImageFromHTML() {
    fetch('img/1.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('image-container').innerHTML = html;
      });
  }

  if (window.location.hash === '#1.717171717171717e+30') {
    loadImageFromHTML();
  }

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#1.717171717171717e+30') {
      loadImageFromHTML();
    } else {
      document.getElementById('image-container').innerHTML = ''; // Optional: clear on other hash
    }
  });



