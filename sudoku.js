var list_o_rows = [[[5, 3, 4, 6, 7, 8, 9, 1, 2],
                    [6, 7, 2, 1, 9, 5, 3, 4, 8],
                    [1, 9, 8, 3, 4, 2, 5, 6, 7],
                    [8, 5, 9, 7, 6, 1, 4, 2, 3],
                    [4, 2, 6, 8, 5, 3, 7, 9, 1],
                    [7, 1, 3, 9, 2, 4, 8, 5, 6],
                    [9, 6, 1, 5, 3, 7, 2, 8, 4],
                    [2, 8, 7, 4, 1, 9, 6, 3, 5],
                    [3, 4, 5, 2, 8, 6, 1, 7, 9]],
                   [[4, 8, 5, 7, 3, 9, 6, 1, 2],
                    [3, 7, 2, 1, 5, 6, 9, 8, 4],
                    [6, 1, 9, 2, 4, 8, 3, 7, 5],
                    [2, 6, 1, 3, 7, 5, 8, 4, 9],
                    [7, 9, 4, 8, 2, 1, 5, 3, 6],
                    [5, 3, 8, 6, 9, 4, 7, 2, 1],
                    [8, 5, 3, 4, 6, 2, 1, 9, 7],
                    [9, 4, 7, 5, 1, 3, 2, 6, 8],
                    [1, 2, 6, 9, 8, 7, 4, 5, 3]],
                   [[5, 6, 3, 2, 1, 9, 8, 4, 7],
                    [7, 1, 8, 4, 5, 3, 9, 2, 6],
                    [2, 9, 4, 6, 7, 8, 3, 1, 5],
                    [1, 2, 5, 7, 9, 6, 4, 3, 8],
                    [6, 8, 7, 3, 4, 2, 1, 5, 9],
                    [3, 4, 9, 1, 8, 5, 7, 6, 2],
                    [4, 5, 1, 8, 2, 7, 6, 9, 3],
                    [9, 7, 6, 5, 3, 1, 2, 8, 4],
                    [8, 3, 2, 9, 6, 4, 5, 7, 1]],
                   [[9, 5, 4, 8, 7, 2, 3, 1, 6],
                    [8, 6, 1, 9, 4, 3, 7, 2, 5],
                    [3, 2, 7, 6, 5, 1, 4, 9, 8],
                    [1, 3, 2, 5, 9, 7, 8, 6, 4],
                    [7, 4, 9, 2, 8, 6, 5, 3, 1],
                    [5, 8, 6, 1, 3, 4, 2, 7, 9],
                    [2, 9, 8, 7, 6, 5, 1, 4, 3],
                    [4, 1, 5, 3, 2, 9, 6, 8, 7],
                    [6, 7, 3, 4, 1, 8, 9, 5, 2]],
                   [[9, 2, 5, 6, 3, 1, 8, 4, 7],
                    [6, 1, 8, 5, 7, 4, 2, 9, 3],
                    [3, 7, 4, 9, 8, 2, 5, 6, 1],
                    [7, 4, 9, 8, 2, 6, 1, 3, 5],
                    [8, 5, 2, 4, 1, 3, 9, 7, 6],
                    [1, 6, 3, 7, 9, 5, 4, 8, 2],
                    [2, 8, 7, 3, 5, 9, 6, 1, 4],
                    [4, 9, 1, 2, 6, 7, 3, 5, 8],
                    [5, 3, 6, 1, 4, 8, 7, 2, 9]]];

var board = {
  rows: list_o_rows[Math.floor(Math.random() * list_o_rows.length)],

  guesses: [[null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null]],

  // choose: function (choices) {
  //   var index = Math.floor(Math.random() * choices.length);
  //   return choices[index];
  // },

  random_cells: function () {
    var trs = document.getElementById('board').getElementsByTagName('tr');
    for (var i = 0; i < this.guesses.length; i++) {
      var tds = trs[i].getElementsByTagName('td');
      for (var j = 0; j < this.guesses[i].length; j++) {
        var value = this.rows[i][j];
        var input = tds[j].getElementsByTagName('input')[0];
        num = Math.random();
        if (num >= .1) {
          input.value =  value;
          this.guesses[i][j] = this.rows[i][j];
        }
      }
    }
  },
  check: function () {
    this.readGuesses();
    this.markGuesses();
    this.win_check
  },

  readGuesses: function () {
    var trs = document.getElementById('board').getElementsByTagName('tr');
    for (var i = 0; i < trs.length; i++) {
      var tds = trs[i].getElementsByTagName('td');
      for (var j = 0; j < tds.length; j++) {
        var value = tds[j].getElementsByTagName('input')[0].value;
        this.guesses[i][j] = Number(value);
      }
    }
  },

  markGuesses: function () {
    var trs = document.getElementById('board').getElementsByTagName('tr');
    for (var i = 0; i < this.guesses.length; i++) {
      var tds = trs[i].getElementsByTagName('td');
      for (var j = 0; j < this.guesses[i].length; j++) {
        var value = this.guesses[i][j];
        var input = tds[j].getElementsByTagName('input');
        input.value =  value;
        if (this.guesses[i][j] === this.rows[i][j]) {
          tds[j].style.backgroundColor = '#7000ff';
        }
        else {
          tds[j].style.backgroundColor = '#000000';
        }
      }
    }
  },
  win_check: function () {
    var page = document.getElementsByTagName('body');
    if (this.rows === this.guesses) {
      body.style.backgroundImage = url('data:image/jpeg;base64,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');
    }
  }
}
board.random_cells();
