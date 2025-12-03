import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Centro {
  logo: string;
  nombre: string;
  localidad: string;
  ciclos: string[];
}

@Component({
  selector: 'app-centros',
  imports: [CommonModule],
  templateUrl: './centros.html',
  styleUrl: './centros.css',
  standalone: true,
})
export class CentrosComponent {
 centros: Centro[] = [
    { logo: 'manantiales.png', nombre: 'IES Los Manantiales', localidad: 'Torremolinos', ciclos: ['ASIR', 'DAW'] },
    { logo: 'miramar.png', nombre: 'Miramar', localidad: 'Torremolinos', ciclos: ['SMR', 'ASIR'] },
    { logo: 'playamar.png', nombre: 'IES Playamar', localidad: 'Torremolinos', ciclos: ['DAM', 'DAW'] }
  ];

  index = 0;

  // PILA de centros eliminados
  pila: Centro[] = [];

  anterior() {
    if (this.index > 0) {
      this.index--;
    }
  }

  posterior() {
    if (this.index < this.centros.length - 1) {
      this.index++;
    }
  }

  eliminar() {
    const eliminado = this.centros.splice(this.index, 1)[0];
    this.pila.push(eliminado);

    // Ajustar índice si eliminamos el último
    if (this.index >= this.centros.length && this.index > 0) {
      this.index--;
    }
  }

  insertar() {
    if (this.pila.length === 0) return;

    const recuperado = this.pila.pop();
    if (recuperado) {
      this.centros.splice(this.index, 0, recuperado);
    }
  }
}

