function renderAudio(e) {
  const audio = document.querySelector(`audio[data-code="${e.code}"]`);
  if (!audio) return; //if the audio element does not exist (audio == null) dont do anything
  audio.currentTime = 0; //the current audio doesnt wait (no waiting until it finishes)
  audio.play();
  addTransition(e.code);
}

function addTransition(dataCode) {
  const drumItem = document.querySelector(`div.item[data-code="${dataCode}"]`);
  drumItem.classList.add("pressed");
}

function removeTransition(e) {
  const drumItem = document.querySelector(`div.item[data-code="${e.code}"]`);
  if (!drumItem) return;
  drumItem.classList.remove("pressed");
}

window.addEventListener("keypress", renderAudio);
window.addEventListener("keyup", removeTransition);
