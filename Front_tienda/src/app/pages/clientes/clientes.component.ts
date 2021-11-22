import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  res:any;
  contenido:any;
  urlget:string="http://localhost:8080/api/clientes";



  constructor(private objetohttp:HttpClient) {}

  ngOnInit() {

    this.res=this.objetohttp.get(this.urlget)
    this.res.subscribe((data:any[])=>{
      this.contenido=data;
      console.log(this.contenido);
    });


  }



  cedula!:number;
  nombrecliente!:string;
  direccion!:string;
  telefono!:string;
  emailcliente!:string;
  
  
  codigorespuesta!:number;
  postCliente(){
    this.objetohttp.post<any>(
      "http://localhost:8080/api/clientes",
      {
      "cedula": this.cedula,
      "nombrecliente": this.nombrecliente,
      "direccion": this.direccion,
      "telefono": this.telefono,
      "emailcliente": this.emailcliente
      },
      {observe:'response'}
    ).subscribe(response=>{
      this.codigorespuesta=response.status;
    });
  }

  reloadCurrentPage() {
    window.location.reload();
   }


}
