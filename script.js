document.onmousemove = function (event) {
  let x = event.x;
  let y = event.y;
  document.querySelector('#fire').style.transform = 'translate('+ translate(x) * 4 +'px, '+ translate(y) * 4 +'px)';
  document.querySelector('#sauce').style.transform = 'translate('+ translate(x) * 0.5 +'px, '+ translate(y) * 0.5 +'px)';
  document.querySelector('#content-text1').style.transform = 'translate('+ translate(x) * 0.5 +'px, '+ translate(y) * 0.5 +'px)';
  function translate(x, y) {
    return Math.sqrt(x, y)
  }
}