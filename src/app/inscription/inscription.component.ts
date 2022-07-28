import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  profileForm = new FormGroup({
    identifiant: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
    nom: new FormControl('',Validators.required),
    prenom: new FormControl('',Validators.required),
    adresse: new FormControl('',Validators.required),
  });
  get identifiant(){return this.profileForm.get('identifiant')}
  get password(){return this.profileForm.get('password')}
  get nom(){return this.profileForm.get('nom')}
  get prenom(){return this.profileForm.get('prenom')}
  get adresse(){return this.profileForm.get('adresse')}

  constructor(private router: Router,private srv: ClientService) { }

  ngOnInit(): void {
    this.newclient.id=null;
  }
  /**
   * Call ClientService.create to create Create a new Client.
   */
  create(){
    this.srv.create(this.newclient);
    
  }

}
