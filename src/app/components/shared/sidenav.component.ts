import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() openSidebar: boolean;
  @Output() closeSidenav = new EventEmitter<boolean>();
  public Imagen: string = "./../../../assets/Img/pokedex.png";

  ngOnInit(): void { }

  public closeSidenavmethod() {
    this.closeSidenav.emit(false);
  }
}
