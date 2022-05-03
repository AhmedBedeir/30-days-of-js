const inputs = document.querySelectorAll('input');
function update() {
  const sizing = this.dataset.sizing || ' ';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${sizing}`
  );
  console.log(this.value);
}
inputs.forEach((item) => item.addEventListener('change', update));
inputs.forEach((item) => item.addEventListener('mousemove', update));
