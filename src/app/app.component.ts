import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageFormatterComponent } from "./ImageFormatterComponent";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Software Engineering Investigation';

  imageAddress='./assets/imgs/SR-CIE_vertical.jpg';

  columnDefs = [
    {headerName: 'Usuario', field: 'first_name', sortable: true, filter: true},
    {headerName: 'Correo', field: 'email', sortable: true, filter: true},
    { headerName: 'Foto',field: 'avatar', sortable: false, autoHeight: true,
        cellRendererFramework: ImageFormatterComponent } //Acá se llama el componente para las imágenes
  ];


  private responseBody: any;
  rowData: any;

  url = 'https://reqres.in/api/users?page=1';


  constructor(private http: HttpClient) {

    this.http.get(this.url, {
      observe: 'response'
    })
    .toPromise()
    .then(response => {

        this.responseBody = response.body;
        this.rowData = this.responseBody.data;

    })
    .catch(console.log);

  }

  ngOnInit  (){
  }

}



