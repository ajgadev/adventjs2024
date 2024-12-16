/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    let tree = '';
  
    for (let i = 1; i <= height; i++) {
      const spaces = '_'.repeat(height - i);
      const decoration = ornament.repeat(2 * i - 1);
      tree += spaces + decoration + spaces + '\n';
    }
  
    const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
    tree += trunk + '\n' + trunk;
  
    return tree;
  }