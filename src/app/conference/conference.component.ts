import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit{


  constructor(private socketService: SocketService) { 
  }

  ngOnInit(): void {
    this.socketService.listen('mensaje').subscribe((data) => {
      console.log('Mensaje recibido:', data);
    });
  }

  enviarMensaje(): void {
    // Emitir eventos
    this.socketService.emit('mensaje', 'Hola desde Angular');
  }
  
}
