import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria-cin',
  templateUrl: './galeria-cin.component.html',
  styleUrls: ['./galeria-cin.component.css']
})
export class GaleriaCinComponent  {

  @Input() titulo: string = '';
  @Input() fotos: string[] = [];
  currentImage: number = 0;

  prev(){
    this.currentImage--;
  }
  next() { 
    this.currentImage++;
  }
  firstPrev(){
    this.currentImage = 0;
  }
  lastNext(){
    this.currentImage = this.fotos.length - 1;
  }
  lastPicture(): boolean{
    return this.currentImage == this.fotos.length - 1;
  }
}
