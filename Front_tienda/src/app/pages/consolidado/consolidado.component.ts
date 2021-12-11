import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-consolidado',
  templateUrl: './consolidado.component.html',
  styleUrls: ['./consolidado.component.scss']
})
export class ConsolidadoComponent implements OnInit {

  constructor(private objetohttp: HttpClient) { }

  res: any;
  contenido: any;
  urlget = 'http://localhost:8080/api/consolidados';
  totalventas!: number;
  ciudad!: string;


  ngOnInit(): void {
    this.res = this.objetohttp.get(this.urlget)
    this.res.subscribe((data: any[]) => {
      this.contenido = data;
      console.log(this.contenido);
    });
  }

  reloadCurrentPage() {
    window.location.reload();
  }

}