import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  newclient= new Client();

  constructor(private router: Router,private srv: ClientService) { }

  ngOnInit(): void {
    this.newclient.id=null;
  }
  create(){
    this.srv.create(this.newclient);
  }

}
