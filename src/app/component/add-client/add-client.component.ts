import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';
import { ClientService } from 'src/app/services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  form: FormGroup
  clientId='';
  editClient:any
  isEdit=false;
  
  constructor(private fb: FormBuilder, private clientService:ClientService, private router:Router,
    private route:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.clientId=this.route.snapshot.queryParams['clientId']
    console.log(this.clientId);
    if(this.clientId){
      this.isEdit=true;
      this.clientService.singleClient(this.clientId).subscribe(res => {
        console.log(res);
        this.editClient = res
        this.form = this.fb.group({
          name: [this.editClient.name],
          balance: [this.editClient.balances],
          email: [this.editClient.email],
          date:[this.editClient.email]
    
        });
      })
    }
    else {
      this.form = this.fb.group({
        name: ['',Validators.required],
        balance: ['',Validators.required],
        email: ['',Validators.required,Validators.email],
        date:['',Validators.required,Validators]
      });
    }
 
  }

  onSubmit(form) {
    this.clientService.saveClient(form).subscribe(res=> {
      if (res){
        this.router.navigate(['/']);
      }
    } );

    
  }

  onUpdate(form) {
    console.log(this.clientId);
    
    this.clientService.updateClient(form,this.clientId).subscribe(res => {
      if (res){
        this.router.navigate(['']);
      }
    })
  }
}
