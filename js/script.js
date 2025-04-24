
function enterSite() {
  document.getElementById('age-verification').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}

function closeSite() {
  window.close();
}

function showPack(packId) {
  document.getElementById('pack-content').classList.remove('hidden');
}
