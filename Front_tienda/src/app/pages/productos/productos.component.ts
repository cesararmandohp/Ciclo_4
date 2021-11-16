import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './FileUpload.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  res:any;
  contenido:any;
  urlget:string="http://localhost:8080/api/productos";



  constructor(private objetohttp:HttpClient, private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.res=this.objetohttp.get(this.urlget)
    this.res.subscribe((data:any[])=>{
      this.contenido=data;
      console.log(this.contenido);
    });
  }

  ///////////////// POST /////////////////////////////
  codigoRespuesta: number = 0;
  res2: any;

  //lista que almacenara los resultados de la insercion de cada linea
  resultados: any;

  // Variable to store shortLink from api response
  file!: File; //variable para almacenar los datos

  //variable de confimación de recepcion de archivo
  recibido: boolean = false;

  // En caso de seleccionar archivo, escojer el primer archivo
  onChange(event: any) {
    this.file = event.target.files[0];
  }

  // Cuandop haga click, iniciar proceso de envio
  async onUpload() {
    console.log(this.file);
    this.resultados = await this.fileUploadService.upload(this.file);
    console.log(this.resultados);
  }


  reloadCurrentPage() {
    window.location.reload();
   }

}
