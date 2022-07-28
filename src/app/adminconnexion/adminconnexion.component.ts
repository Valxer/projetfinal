import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminconnexion',
  templateUrl: './adminconnexion.component.html',
  styleUrls: ['./adminconnexion.component.scss']
})
export class AdminconnexionComponent implements OnInit {
  admin = new Admin();
  profileForm = new FormGroup({
    identifiant: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
  });

  get identifiant(){return this.profileForm.get('identifiant')}

  get pass(){return this.profileForm.get('password')}

  constructor(private router: Router,private srv: AdminService) { }

  ngOnInit(): void {
  }

  /**
   * Call ClientService.login(Client) to connect a Client(ID,password). It will update the LogginMessage and Store the Client Data in SessionStorage.
   */
   connect(){
    this.srv.connect(this.admin);
  }

}
