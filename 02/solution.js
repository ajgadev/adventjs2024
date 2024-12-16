/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    // Code here
    let longestName = 0
    for (const index in names) {
      if (longestName < names[index].length) {
        longestName = names[index].length
      }
    }
    const base = '*'.repeat(longestName + 4)
    let frame = base + '\n'
    names.forEach(name => {
      const whiteSpaces = ' '.repeat(longestName - name.length)
      frame += `* ${name}${whiteSpaces} *\n`
    })
    frame += base
    return frame
  }