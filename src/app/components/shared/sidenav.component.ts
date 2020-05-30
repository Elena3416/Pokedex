import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() openSidebar: boolean;
  @Output() closeSidenav = new EventEmitter<boolean>();
  public Imagen: string = "./../../../assets/Img/pokedex.png";

  public constructor( private router:Router){

  }
  ngOnInit(): void { }

  public closeSidenavmethod() {
    this.closeSidenav.emit(false);
  }

  public EnviarBusqueda(){
    this.router.navigate(["search"]);
  }

  public Home(){
    this.router.navigate(["cards"]);
  }

  public About(){
    this.router.navigate(['about']);
  }
}
