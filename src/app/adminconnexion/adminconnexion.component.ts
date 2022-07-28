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
    id: new FormControl('', Validators.required),
    mdp: new FormControl('', Validators.required),
  });

  constructor(private router: Router,private srv: AdminService) { }

  ngOnInit(): void {
  }

  /**
   * Call ClientService.login(Client) to connect a Client(ID,password). It will update the LogginMessage and Store the Client Data in SessionStorage.
   */
   connect(){
    this.admin.id = this.profileForm.value.id
    this.admin.password = this.profileForm.value.mdp
    this.srv.connect(this.admin);
  }

}
