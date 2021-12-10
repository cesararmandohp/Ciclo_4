import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consolidado',
  templateUrl: './consolidado.component.html',
  styleUrls: ['./consolidado.component.scss']
})
export class ConsolidadoComponent implements OnInit {

  constructor(private clientehttp: HttpClient) { }

  apiURL='http://localhost:8080/api/'

  getconsolidadociudad(){
    this.clientehttp.get(this.apiURL+'consolidados/ciudad/')
  }
  ngOnInit(): void {
  }

}
