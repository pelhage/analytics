export default function getCallbackFromArgs() {
  return Array.prototype.slice.call(arguments).reduce((acc, arg) => {
    if (acc) return acc
    if (typeof arg === 'function') {
      return arg
    }
    return acc
  }, false)
}
