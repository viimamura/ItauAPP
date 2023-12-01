import { Component } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  paises?: Pais[];
  paisSelecionado: Pais = new Pais;
  index = -1;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.mostrarLista();
  }

  mostrarLista(): void {
    this.paisService.ListarPaises().subscribe({
      next: (paises) => {
        this.paises = paises;
      }
    });
  }

  escolherPais(codigoISO: string, index: number): void {
    this.paisService.ConsultarPaisPeloISO(codigoISO).subscribe({
      next: (pais) => {
        this.paisSelecionado = pais;
        this.index = index;
      }
    });
  }
}
