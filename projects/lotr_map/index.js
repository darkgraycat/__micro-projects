// import makeScrollable from "../../libs/makeScrollable"

makeScrollable(document.querySelector('.scrollable'))

const scale = by => {
  const el = document.querySelector('.scrollable')
  const w = (el.offsetWidth * by) << 0
  const h = (el.offsetHeight * by) << 0
  const x = (el.offsetLeft * by) << 0
  const y = (el.offsetTop * by) << 0

  el.style.width = w + 'px'
  el.style.height = h + 'px'
  el.style.left = x + 'px'
  el.style.top = y + 'px'
}
