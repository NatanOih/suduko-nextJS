const Util = {
  print2DArrey: function (grid) {
    grid.map((row, i) => {
      return console.log(...grid[i]);
    });
  },
  copyGrid: function (from, to) {
    for (let i = 0; i < from.length; i++) {
      to[i] = [...from[i]];
    }
  },
};

export { Util };
