import { Component, Input } from '@angular/core';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent {
  @Input()
  paisSelecionado: Pais = new Pais;

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
