const gameBoard = {
    cells : [],
}

const BOARD = [' ','A','B','C','D','E','F','G','H',' ',
             '8','-','+','-','+','-','+','-','+','8',
             '7','+','-','+','-','+','-','+','-','7',
             '6','-','+','-','+','-','+','-','+','6',
             '5','+','-','+','-','+','-','+','-','5',
             '4','-','+','-','+','-','+','-','+','4',
             '3','+','-','+','-','+','-','+','-','3',
             '2','-','+','-','+','-','+','-','+','2',
             '1','+','-','+','-','+','-','+','-','1',
             ' ','A','B','C','D','E','F','G','H',' ',];


function initBoard(board) {
    gameBoard.element = document.getElementById("board");
    gameBoard.cells = [];
    for (let i = 0; i<board.length; i++) {
        gameBoard.cells[i] = [];
        for (let j = 0; j<board[i].length; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell", 'fa');
            switch (board[i][j]) {
                case " " :
                    gameBoard.cells[i][j] = { type: " ", element: cell };
                    cell.classList.add("edge");
                    break;
                case "A" :
                    gameBoard.cells[i][j] = { type: "A", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>A</p1>';                   
                    break;
                case "B" :
                    gameBoard.cells[i][j] = { type: "B", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>B</p1>';
                    break;
                case "C" :
                    gameBoard.cells[i][j] = { type: "C", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>C</p1>';
                    break;
                case "D" :
                    gameBoard.cells[i][j] = { type: "D", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>D</p1>';
                    break;
                case "E" :
                    gameBoard.cells[i][j] = { type: "E", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>E</p1>';
                    break;
                case "F" :
                    gameBoard.cells[i][j] = { type: "F", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>F</p1>';
                    break;
                case "G" :
                    gameBoard.cells[i][j] = { type: "G", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>G</p1>';
                    break;
                case "H" :
                    gameBoard.cells[i][j] = { type: "H", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>H</p1>';
                    break;
                case "1" :
                    gameBoard.cells[i][j] = { type: "1", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>1</p1>';
                    break;
                case "2" :
                    gameBoard.cells[i][j] = { type: "2", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>2</p1>';
                    break;
                case "3" :
                    gameBoard.cells[i][j] = { type: "3", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>3</p1>';
                    break;
                case "4" :
                    gameBoard.cells[i][j] = { type: "4", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>4</p1>';
                    break;
                case "5" :
                    gameBoard.cells[i][j] = { type: "5", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>5</p1>';
                    break;
                case "6" :
                    gameBoard.cells[i][j] = { type: "6", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>6</p1>';
                    break;
                case "7" :
                    gameBoard.cells[i][j] = { type: "7", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>7</p1>';
                    break;
                case "8" :
                    gameBoard.cells[i][j] = { type: "8", element: cell };
                    cell.classList.add("edge");
                    cell.innerHTML = '<p1>8</p1>';
                    break;
                case "+" :
                    if (i == "21") {
                    gameBoard.cells[i][j] = { type: "Black", element: cell };
                    cell.classList.add("fa-chess-pawn", "black", "figure-color-black");
                    break;
                    }
                    else if (i == "23") {
                    gameBoard.cells[i][j] = { type: "Black", element: cell };
                    cell.classList.add("fa-chess-pawn", "black", "figure-color-black");
                    break;
                    }
                    if (i == "25") {
                    gameBoard.cells[i][j] = { type: "Black", element: cell };
                    cell.classList.add("fa-chess-pawn", "black", "figure-color-black");
                    break;
                    }
                    else if (i == "27") {
                    gameBoard.cells[i][j] = { type: "Black", element: cell };
                    cell.classList.add("fa-chess-pawn", "black", "figure-color-black");
                    break;
                    } 
                    else if (i == "78") {
                        gameBoard.cells[i][j] = { type: "Black", element: cell };
                        cell.classList.add("fa-chess-pawn", "black", "figure-color-white");
                        break;
                        }
                        else if (i == "76") {
                        gameBoard.cells[i][j] = { type: "Black", element: cell };
                        cell.classList.add("fa-chess-pawn", "black", "figure-color-white");
                        break;
                        }
                        if (i == "74") {
                        gameBoard.cells[i][j] = { type: "Black", element: cell };
                        cell.classList.add("fa-chess-pawn", "black", "figure-color-white");
                        break;
                        }
                        else if (i == "72") {
                        gameBoard.cells[i][j] = { type: "Black", element: cell };
                        cell.classList.add("fa-chess-pawn", "black", "figure-color-white");
                        break;
                        }
                        else if (i == "18") {
                            gameBoard.cells[i][j] = { type: "Black", element: cell };
                            cell.classList.add("fa-chess-rook", "black", "figure-color-black");
                            break;
                            }
                            else if (i == "12") {
                                gameBoard.cells[i][j] = { type: "Black", element: cell };
                                cell.classList.add("fa-chess-knight", "black", "figure-color-black");
                                break;
                                }
                                else if (i == "16") {
                                    gameBoard.cells[i][j] = { type: "Black", element: cell };
                                    cell.classList.add("fa-chess-bishop", "black", "figure-color-black");
                                    break;
                                    }
                                    else if (i == "14") {
                                        gameBoard.cells[i][j] = { type: "Black", element: cell };
                                        cell.classList.add("fa-chess-queen", "black", "figure-color-black");
                                        break;
                                        }


                        else if (i == "81") {
                            gameBoard.cells[i][j] = { type: "Black", element: cell };
                            cell.classList.add("fa-chess-rook", "black", "figure-color-white");
                            break;
                            }
                            else if (i == "87") {
                                gameBoard.cells[i][j] = { type: "Black", element: cell };
                                cell.classList.add("fa-chess-knight", "black", "figure-color-white");
                                break;
                                }
                                else if (i == "83") {
                                    gameBoard.cells[i][j] = { type: "Black", element: cell };
                                    cell.classList.add("fa-chess-bishop", "black", "figure-color-white");
                                    break;
                                    }
                                    else if (i == "85") {
                                        gameBoard.cells[i][j] = { type: "Black", element: cell };
                                        cell.classList.add("fa-chess-king", "black", "figure-color-white");
                                        break;
                                        }

                    else {
                    gameBoard.cells[i][j] = { type: "Black", element: cell };
                    cell.classList.add("black");
                    break;
                    }
                default:
                    if (i == "22") {
                        gameBoard.cells[i][j] = { type: "White", element: cell };
                        cell.classList.add("fa-chess-pawn", "white", "figure-color-black");
                        break;
                        }
                        else if (i == "24") {
                        gameBoard.cells[i][j] = { type: "White", element: cell };
                        cell.classList.add("fa-chess-pawn", "white", "figure-color-black");
                        break;
                        }
                        if (i == "26") {
                        gameBoard.cells[i][j] = { type: "White", element: cell };
                        cell.classList.add("fa-chess-pawn", "white", "figure-color-black");
                        break;
                        }
                        else if (i == "28") {
                        gameBoard.cells[i][j] = { type: "White", element: cell };
                        cell.classList.add("fa-chess-pawn", "white", "figure-color-black");
                        break;
                        }
                        else if (i == "77") {
                            gameBoard.cells[i][j] = { type: "White", element: cell };
                            cell.classList.add("fa-chess-pawn", "white", "figure-color-white");
                            break;
                            }
                            else if (i == "75") {
                            gameBoard.cells[i][j] = { type: "White", element: cell };
                            cell.classList.add("fa-chess-pawn", "white", "figure-color-white");
                            break;
                            }
                            if (i == "73") {
                            gameBoard.cells[i][j] = { type: "White", element: cell };
                            cell.classList.add("fa-chess-pawn", "white", "figure-color-white");
                            break;
                            }
                            else if (i == "71") {
                            gameBoard.cells[i][j] = { type: "White", element: cell };
                            cell.classList.add("fa-chess-pawn", "white", "figure-color-white");
                            break;
                            }
                            else if (i == "11") {
                            gameBoard.cells[i][j] = { type: "White", element: cell };
                            cell.classList.add("fa-chess-rook", "white", "figure-color-black");
                            break;
                            }
                            else if (i == "17") {
                                gameBoard.cells[i][j] = { type: "White", element: cell };
                                cell.classList.add("fa-chess-knight", "white", "figure-color-black");
                                break;
                                }
                                else if (i == "13") {
                                    gameBoard.cells[i][j] = { type: "White", element: cell };
                                    cell.classList.add("fa-chess-bishop", "white", "figure-color-black");
                                    break;
                                    }
                                    else if (i == "15") {
                                        gameBoard.cells[i][j] = { type: "White", element: cell };
                                        cell.classList.add("fa-chess-king", "white", "figure-color-black");
                                        break;
                                        }



                     else if (i == "88") {
                            gameBoard.cells[i][j] = { type: "White", element: cell };
                            cell.classList.add("fa-chess-rook", "white", "figure-color-white");
                            break;
                            }
                            else if (i == "82") {
                                gameBoard.cells[i][j] = { type: "White", element: cell };
                                cell.classList.add("fa-chess-knight", "white", "figure-color-white");
                                break;
                                }
                                else if (i == "86") {
                                    gameBoard.cells[i][j] = { type: "White", element: cell };
                                    cell.classList.add("fa-chess-bishop", "white", "figure-color-white");
                                    break;
                                    }
                                    else if (i == "84") {
                                        gameBoard.cells[i][j] = { type: "White", element: cell };
                                        cell.classList.add("fa-chess-queen", "white", "figure-color-white");
                                        break;
                                        }
                            
                    gameBoard.cells[i][j] = { type: "White", element: cell };
                    cell.classList.add("white");
            }
            gameBoard.element.appendChild(cell);
            
        }
    }
}

initBoard(BOARD);
