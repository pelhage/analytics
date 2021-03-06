/**
 * Decode URI string
 *
 * @param {String} s string to decode
 * @returns {String} decoded string
 * @example
 * decode("Bought%20keyword)
 * => "Bought keyword"
 */
export default function decode(s) {
  return decodeURIComponent(s).replace(/\+/g, ' ')
}
