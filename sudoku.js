var board = {
  rows: [[1, 2, 3, 4, 5, 6, 7, 8, 9],
         [1, 2, 3, 4, 5, 6, 7, 8, 9],
         [1, 2, 3, 4, 5, 6, 7, 8, 9],
         [1, 2, 3, 4, 5, 6, 7, 8, 9],
         [1, 2, 3, 4, 5, 6, 7, 8, 9],
         [1, 2, 3, 4, 5, 6, 7, 8, 9],
         [1, 2, 3, 4, 5, 6, 7, 8, 9],
         [1, 2, 3, 4, 5, 6, 7, 8, 9],
         [1, 2, 3, 4, 5, 6, 7, 8, 9]],
  guesses: [[null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null]],

  check: function () {
    this.readGuesses();
    this.markGuesses();
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
          tds[j].style.backgroundColor = 'green';
        }
        else {
          tds[j].style.backgroundColor = 'red';
        }
      }
    }
  }
}
