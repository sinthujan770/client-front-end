import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(){
    return this.http.get<any>('http://localhost:3000/clients')
    
  }
  saveClient(form){
    const client = {
      name:form.get('name').value,
      balance:form.get('balance').value,
      email:form.get('email').value,
      date:form.get('date').value

    }
    console.log(client);
    
    return this.http.post<any>('http://localhost:3000/clients',client);
  }

  updateClient(form,clientId){
    console.log(clientId);
    
    const client = [
      {
        propName:'name', value:form.get('name').value
      },
      {
        propName:'balance', value:form.get('balance').value
      },
      {
        propName:'email', value:form.get('email').value
      }
    ]
    return this.http.patch<any>('http://localhost:3000/clients/'+clientId,client);
  }

  singleClient(id){
    return this.http.get('http://localhost:3000/clients/'+id)  
  }
  deleteClient(id){
    return this.http.delete('http://localhost:3000/clients/'+id)
  }
}
