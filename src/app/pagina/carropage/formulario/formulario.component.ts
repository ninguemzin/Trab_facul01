import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Pedido } from 'src/app/models/pedido';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  url = 'http://localhost:3333/person';
  
  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

 // salva um pedido
 savePedido(pedido: Pedido): Observable<Pedido> {
  return this.httpClient.post<Pedido>(this.url, JSON.stringify(pedido), this.httpOptions)
    .pipe(
      retry(2),
      catchError((error)=> {
        return throwError(()=>error)
      })
    )
}

handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Erro ocorreu no lado do client
    errorMessage = error.error.message;
  } else {
    // Erro ocorreu no lado do servidor
    errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
  }
  console.log(errorMessage);
  return new Error(errorMessage);
};

  onSubmit(form){
    console.log(form);
  }

  ngOnInit(): void {


  }

}
