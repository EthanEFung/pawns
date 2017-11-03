function colorSquares(squares) {
  let colorSquare = false;
  for (let sq of squares) {
    let classes = sq.className;
    if (colorSquare) {
      classes += " black";
      sq.setAttribute("class", classes);
    } else {
      classes += " white";
      sq.setAttribute("class", classes);
    }
    if (classes.indexOf(" f ") === -1) {
      colorSquare = !colorSquare;
    }
  }
}

function addSquareClickHandler(squares) {
  for (let sq of squares) {
    sq.addEventListener("click", function(e) {
      console.log(e.target.className);
    });
  }
}

function initializeGame(windowObj, docObj) {
  windowObj.onload = function() {
    const squares = docObj.getElementsByClassName("square");
    colorSquares(squares);
    addSquareClickHandler(squares);
  };
}

// initializeGame(window, document);

module.exports = { colorSquares, addSquareClickHandler, initializeGame };
