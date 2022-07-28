import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  cli= new Client();
  profileForm = new FormGroup({
    id: new FormControl('', Validators.required),
    mdp: new FormControl('', Validators.required),
  });

  constructor(private router: Router,private srv: ClientService ) { }

  ngOnInit(): void {
  }

  /**
   * Call ClientService.login(Client) to connect a Client(ID,password). It will update the LogginMessage and Store the Client Data in SessionStorage.
   */
  connect(){
    this.cli.id = this.profileForm.value.id
    this.cli.password = this.profileForm.value.mdp
    this.srv.connect(this.cli);
  }
  /**
   * Navigate to inscription's page
   */
  inscription(){
    this.router.navigate(['inscription'])
  }

  
}
