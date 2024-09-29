import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'parcialCall';

  habilitadoPrueba :boolean;
  
  constructor() { 
    this.habilitadoPrueba=false;
  }

  ngOnInit(): void {
    // Lógica de inicialización aquí
    console.log('AppComponent inicializado');
  }

  HabilitarConferecia(){
    this.habilitadoPrueba=true;
  }

}
