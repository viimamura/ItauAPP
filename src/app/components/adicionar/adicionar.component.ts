import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css'],
})
export class AdicionarComponent {

  formPais = new FormGroup({
    nome: new FormControl('', Validators.required),
    codigoISO: new FormControl('', Validators.required),
    continente: new FormControl('', Validators.required),
    populacao: new FormControl('', Validators.required),
  });

  constructor(private paisService: PaisService) { }

  ngOnInit() { }

  adicionarPais(): void {
    this.paisService.AdicionarPais(this.formPais.value).subscribe({
      next: (response) => {
        console.log("País adicionado - ", response);
      }
    });
    alert("País adicionado com sucesso!");
  }
}
