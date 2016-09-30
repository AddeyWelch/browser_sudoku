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
  addGuess: function(guess, position) {
    document.getElementsByName('').innerText = (guess goes here);
    var input = document.getElementsByName('userInput').value;
    this.guesses[position] = guess;

  }

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
      for (var j = 0; i < this.guesses[i].length; j++) {
        var value = this.guesses[i][j];
        document.getElementsByTagName('')
      }
    }
  }
}
