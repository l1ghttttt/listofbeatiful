const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(radio => {
  radio.addEventListener('change', function() {
    document.querySelectorAll('article').forEach(article => {
      article.style.backgroundColor = '#B18B7B';
      article.style.border = 'none';
      article.style.color = '#F6F6F6';
    });

    const article = this.closest('article');
    if (this.checked) {
      article.style.backgroundColor = '#ffffff';
      article.style.border = '2px solid black';
      article.style.color = 'black';
      article.style.fill = 'black';
    }
  });
});

let check1,check2;
function radioClick(c) {
  if (check1 !== c) {
    check2 = 0;
    check1 = c
  }
  check2 ^= 1;
  c.checked = check2
  document.querySelectorAll('article').forEach(article => {
    article.style.backgroundColor = '#B18B7B';
    article.style.border = 'none';
    article.style.color = '#F6F6F6';
  });
}
