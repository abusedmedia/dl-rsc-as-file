let _trigger = null
const _triggerID = 'TRIGGER__' + Math.random()

const trigger = {
  download (data, filename) {
    if (!document.getElementById(_triggerID)) {
      _trigger = document.createElement('a')
      _trigger.id = _triggerID
      _trigger.target = '_blank'
      document.body.appendChild(_trigger)
    } else {
      _trigger = document.getElementById(_triggerID)
    }

    _trigger.download = filename
    _trigger.href = data
    _trigger.click()
  }
}

export default trigger
