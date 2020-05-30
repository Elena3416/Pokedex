import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public Imagen: string = "./../../../assets/Img/pokedex.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
