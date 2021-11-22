import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  
  res:any;
  contenido:any;
  urlget:string="http://localhost:8080/api/usuarios";



  constructor(private objetohttp:HttpClient) {}

  ngOnInit() {

    this.res=this.objetohttp.get(this.urlget)
    this.res.subscribe((data:any[])=>{
      this.contenido=data;
      console.log(this.contenido);
    });


  }



  username!:string;
  password!:string;
  nombre!:string;
  correo!:string;
  
  
  codigorespuesta!:number;
  postUsuario(){
    this.objetohttp.post<any>(
      "http://localhost:8080/api/usuarios",
      {
      "username": this.username,
      "password": this.password,
      "nombreusuario": this.nombre,
      "emailusuario": this.correo
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
