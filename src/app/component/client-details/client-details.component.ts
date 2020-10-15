import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  client:any
  hasBalance=false;
  constructor(private clientService:ClientService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const clientId = this.route.snapshot.queryParams['clientId']
    console.log(clientId);
    
    this.clientService.singleClient(clientId).subscribe(res => {
      this.client=res;
      if(this.client.balance>0){
        this.hasBalance=true;
      }
      
    })
    
  }
  deleteClient(){
    this.clientService.deleteClient(this.client._id).subscribe(res => {
      if(res){
        this.router.navigate([''])
      }
      
    });
  }
editClient(){
  this.router.navigate([ '/addclient'],{queryParams:{clientId:this.client._id}})
}
}
