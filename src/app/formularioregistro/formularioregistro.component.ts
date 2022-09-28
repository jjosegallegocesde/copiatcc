import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {

  formulario!:FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
