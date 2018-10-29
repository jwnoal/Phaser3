export let _canvasHeight = document.body.clientHeight
export let _canvasWigth = _canvasHeight / 9 * 16
export let _scale = _canvasHeight / 1080
if(document.body.clientWidth < _canvasWigth) {
  _canvasWigth = document.body.clientWidth
  _canvasHeight = _canvasWigth / 16 * 9
  _scale = _canvasHeight / 1080
}
