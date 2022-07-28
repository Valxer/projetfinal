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
    id: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    mdp: new FormControl('', Validators.required),
  });

  constructor(private router: Router,private srv: ClientService) { }

  ngOnInit(): void {
    this.newclient.id=null;
  }
  /**
   * Call ClientService.create to create Create a new Client.
   */
  create(){
    this.newclient.id = this.profileForm.value.id
    this.newclient.nom = this.profileForm.value.nom
    this.newclient.prenom = this.profileForm.value.prenom
    this.newclient.adresse = this.profileForm.value.adresse
    this.newclient.password = this.profileForm.value.mdp
    this.srv.create(this.newclient);
  }

}
