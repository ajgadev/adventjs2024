/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    const mappedShoes = new Map()
    const results = []
    shoes.forEach(shoe => {
      if (!mappedShoes.has(shoe.size)) {
        mappedShoes.set(shoe.size, [])
      }
      const pairToSearch = shoe.type === 'I' ? 'R' : 'I'
      const sizeShoesArray = mappedShoes.get(shoe.size)
      const index = sizeShoesArray.indexOf(pairToSearch)
      if (index !== -1) {
          results.push(shoe.size)
          sizeShoesArray.splice(index, 1)
      } else {
        sizeShoesArray.push(shoe.type)
      }
      mappedShoes.set(shoes.size, sizeShoesArray)
    })
    return results
  }