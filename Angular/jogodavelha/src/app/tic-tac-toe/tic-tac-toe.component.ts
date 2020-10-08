import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html'
})
export class TicTacToeComponent {

  currentPlayer: string = 'X';
  winner: string = '';
  matrizBoard: string[][] = [
    ['','',''],
    ['','',''],
    ['','','']
  ];

  jogoDaVez(line: number, col: number){
    //window.alert(`Jogo da Vez foi na linha: ${line} e na coluna: ${col} do jogador ${this.currentPlayer}`);
    
    if(this.matrizBoard[line][col] == '' && this.winner == ''){
      this.matrizBoard[line][col] = this.currentPlayer;
      
      //winner?
      if (this.ganhador(this.currentPlayer)){
        this.winner = this.currentPlayer;
      }

      if(this.currentPlayer == 'X'){
        this.currentPlayer = 'O'
      } else {
        this.currentPlayer = 'X';
      }
    }
  }

  ganhador(player: string): boolean{
    for(let i = 0; i < this.matrizBoard.length; i++){
      if(this.matrizBoard[i][0] == player 
        && this.matrizBoard[i][1] == player
        && this.matrizBoard[i][2] == player){
          return true;
        }
    }
    for(let i = 0; i < this.matrizBoard.length; i++){
      if(this.matrizBoard[0][i] == player 
        && this.matrizBoard[1][i] == player
        && this.matrizBoard[2][i] == player){
          return true;
        }
    }

    //diagonal
    if(this.matrizBoard[0][0] == player 
      && this.matrizBoard[1][1] == player
      && this.matrizBoard[2][2] == player){
        return true;
      }
    if(this.matrizBoard[0][2] == player 
      && this.matrizBoard[1][1] == player
      && this.matrizBoard[2][0] == player){
        return true;
      }

    return false;
  }

  reset() { 
    this.currentPlayer = 'X';
    this.winner = '';
    this.matrizBoard = [
      ['','',''],
      ['','',''],
      ['','','']
    ];
  }

}
