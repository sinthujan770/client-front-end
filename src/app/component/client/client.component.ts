import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clientArray = [];
  totalOwnd: number;

  constructor(private clientService: ClientService,private router : Router) {
  }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(res => {
console.log(res);


      this.clientArray = res.clients;
      this.getTotalOwnd();


    });
    
  }
  getTotalOwnd() {
    let total = 0;
    for (let i = 0; i < this.clientArray.length; i++) {
      total += parseFloat(this.clientArray[i].balance);
    }
    this.totalOwnd = total;
    console.log(this.totalOwnd);

  }
  getDetail(id){

    this.router.navigate([ '/clientdetail'],{queryParams:{clientId:id}})
  }
}
