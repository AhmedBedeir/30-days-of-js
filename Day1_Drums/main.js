window.addEventListener('keydown', playSound);
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
  console.log(e);
  if (!audio) return;
  audio.currentTime = 0; // it rewind audio
  audio.play();
  key.classList.add('playing');
  setTimeout(() => {
    key.classList.remove('playing');
  }, 100);
}
