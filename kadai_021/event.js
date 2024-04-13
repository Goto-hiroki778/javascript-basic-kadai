const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  console.log('クリックされました！');
});

btn.addEventListener('click', ()=> {
  const text = document.getElementById('text');
  text.textContent  = "ボタンをクリックしました";
});

setTimeout(() => {
  const text = document.getElementById('text');
  text.textContent = "2秒後に書き換えられました";
}, 2000);