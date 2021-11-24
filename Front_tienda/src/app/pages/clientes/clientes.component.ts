import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  res: any;
  contenido: any;
  urlget: string = "http://localhost:8080/api/clientes";



  constructor(private objetohttp: HttpClient) { }

  ngOnInit() {

    this.res = this.objetohttp.get(this.urlget)
    this.res.subscribe((data: any[]) => {
      this.contenido = data;
      console.log(this.contenido);
    });


  }
  cedula!: number;
  nombrecliente!: string;
  direccion!: string;
  telefono!: string;
  emailcliente!: string;


  codigorespuesta!: number;
  postCliente() {
    this.objetohttp.post<any>(
      "http://localhost:8080/api/clientes",
      {
        "cedula": this.cedula,
        "nombrecliente": this.nombrecliente,
        "direccion": this.direccion,
        "telefono": this.telefono,
        "emailcliente": this.emailcliente
      },
      { observe: 'response' }
    ).subscribe(response => {
      this.codigorespuesta = response.status;
    });
  }

  resLeer: Observable<any>;
  contenidoLeer: any;

  getClientes() {

    let params = new HttpParams().set('nombrecliente', this.nombrecliente);
    this.objetohttp.get(this.urlget, { params }).
      subscribe((resLeer) => {
        this.contenidoLeer = resLeer
        console.log(this.contenidoLeer)
        console.log(this.contenidoLeer[0].nombrecliente)
        console.log(this.contenidoLeer[0].cedula)
        console.log(this.contenidoLeer[0].direccion)
        console.log(this.contenidoLeer[0].telefono)
        console.log(this.contenidoLeer[0].emailcliente)

        this.nombrecliente=this.contenidoLeer[0].nombrecliente
        this.cedula=this.contenidoLeer[0].cedula
        this.direccion=this.contenidoLeer[0].direccion
        this.telefono=this.contenidoLeer[0].telefono
        this.emailcliente=this.contenidoLeer[0].emailcliente
      })
    }
updateClientes(){
  
}

  reloadCurrentPage() {
    window.location.reload();
  }
}
