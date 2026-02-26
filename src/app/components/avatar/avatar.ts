import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class AvatarComponent {
 colorFondo = signal<string>('#D91818')
  tamaño = signal<number>(150)
  tieneLentes = signal<boolean>(false)
  tipoExpresion = signal<number>(1)

  cambiarTamano(event: Event) {
    const input = event.target as HTMLInputElement;
    this.tamaño.set(parseInt(input.value));
  }
}
