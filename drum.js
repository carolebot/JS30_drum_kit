window.addEventListener('keydown', playSound)

function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)

  if (!audio) return
  key.classList.add('playing')
  audio.currentTime = 0 // be able to hit successively
  audio.play()

}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
// this is a node list, not array, so use forEach
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

