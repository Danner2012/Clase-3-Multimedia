import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrls: ['./avatar.scss']
})
export class AvatarComponent {

  tonoPrincipal = signal<string>('#ffcc00');
  dimensionAvatar = signal<number>(150);
  estadoLentes = signal<boolean>(false);
  modoExpresion = signal<number>(1);
  aliasUsuario = signal<string>('Dannersa');




  anguloActual = signal<number>(0);

  enMovimiento = false;
  referenciaFrame: any;

  modificarColor(event: Event) {
    const elemento = event.target as HTMLInputElement;
    this.tonoPrincipal.set(elemento.value);
  }

  modificarDimension(event: Event) {
    const elemento = event.target as HTMLInputElement;
    this.dimensionAvatar.set(Number(elemento.value));
  }

  alternarLentes() {
    this.estadoLentes.update(x => !x);
  }

  cambiarModo(valor: number) {
    this.modoExpresion.set(valor);
  }

  modificarAlias(event: Event) {
    const elemento = event.target as HTMLInputElement;
    this.aliasUsuario.set(elemento.value);
  }

  activarMovimiento() {

    if (!this.enMovimiento) {
      this.enMovimiento = true;
      this.animar();
    } else {
      this.enMovimiento = false;
      cancelAnimationFrame(this.referenciaFrame);
    }

  }

  animar() {

    if (!this.enMovimiento) return;

    this.anguloActual.update(g => g + 9);

    this.referenciaFrame = requestAnimationFrame(() => this.animar());
  }

}