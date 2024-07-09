export const Util = {
  print2DArrey: async function (grid) {
    grid.map((row, i) => {
      return console.log(...grid[i]);
    });
  },
  copyGrid: async function (from, to) {
    for (let i = 0; i < from.length; i++) {
      to[i] = [...from[i]];
    }
  },
};
