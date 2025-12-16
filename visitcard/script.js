const toast = document.getElementById("toast");

function showToast(msg){
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.addEventListener("click", async (e) => {
  const bankTile = e.target.closest(".tile.bank");
  if (!bankTile) return;

  const bank = bankTile.dataset.bank;
  const iban = bankTile.dataset.iban;

  const textToCopy = `${bank} — ${iban}`;

  try {
    await navigator.clipboard.writeText(textToCopy);
    showToast(`Copied ✅ ${bank} — ${iban}`);
  } catch {
    showToast(`Copy failed ❌ ${bank} — ${iban}`);
  }
});
