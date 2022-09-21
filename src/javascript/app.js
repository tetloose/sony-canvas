const canvas = document.querySelector('.js-canvas')

function canvasHandleClick(e) {
  const elem = e.target

  if (elem.classList.contains('js-clickMe')) {
    console.log('Check app.js line 7 for event handler click')
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

window.trackingObject = {}

function canvasTracking(e) {
  window.trackingObject = new CustomEvent('trackingObject', {
    detail: {
      questionnaireTitle: e
    }
  })
  document.dispatchEvent(window.trackingObject)
}
