/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    return inventory.reduce((organized, { name, quantity, category }) => {
      // Ensure the category exists in the result
      if (!organized[category]) {
        organized[category] = {};
      }
  
      // Add or update the toy quantity within the category
      organized[category][name] = (organized[category][name] || 0) + quantity;
  
      return organized;
    }, {});
  }