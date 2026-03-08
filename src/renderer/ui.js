function toPolar() {
  const x = parseFloat(document.getElementById('real').value);
  const y = parseFloat(document.getElementById('imag').value);

  if (isNaN(x) || isNaN(y)) return;

  const magnitude = Math.sqrt(x * x + y * y);
  const angle = Math.atan2(y, x) * (180 / Math.PI);

  document.getElementById('resPolar').innerText =
    `${magnitude.toFixed(3)} ∠ ${angle.toFixed(2)}°`;
}

function toRect() {
  const m = parseFloat(document.getElementById('mag').value);
  const a = parseFloat(document.getElementById('ang').value);

  if (isNaN(m) || isNaN(a)) return;

  const rad = a * (Math.PI / 180);
  const real = m * Math.cos(rad);
  const imag = m * Math.sin(rad);

  const sign = imag >= 0 ? "+" : "-";
  document.getElementById('resRect').innerText =
    `${real.toFixed(3)} ${sign} j${Math.abs(imag).toFixed(3)}`;
}