const canvas = document.querySelector('.js-proj-name')

function canvasHandleClick(e) {
  const elem = e.target

  console.log('Clicked', elem)

  if (elem.classList.contains('js-trackingCTA')) {
    trackingCTA(elem)
  }
}

sbLoadEventListener()

function sbLoadEventListener() {
  if (canvas) {
    canvas.addEventListener('click', canvasHandleClick)
  }
}

function CustomEvent(event, params) {
  params = params || {
    bubbles: false,
    cancelable: false,
    detail: undefined
  }

  var evt = document.createEvent('CustomEvent')
  evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)

  return evt
}

CustomEvent.prototype = window.Event.prototype
window.CustomEvent = CustomEvent

window.trackingCTAObj = {}

function trackingCTA(e) {
  window.trackingCTAObj = new CustomEvent('trackingCTAObj', {
    detail: {
      projTitle: 'Proj Title',
      buttonTitle: e.dataset.buttonTitle.toLocaleLowerCase().split(' ').join('-'),
      buttonUrl: e.href
    }
  })
  document.dispatchEvent(window.trackingCTAObj)

  console.log(window.trackingCTAObj)
}
