import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    // Conectar al servidor Socket.IO
    this.socket = io();
  }

  // Escuchar eventos
  listen(eventName: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }

  // Emitir eventos
  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}
