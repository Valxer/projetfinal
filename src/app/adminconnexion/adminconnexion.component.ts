import { Component, OnInit } from '@angular/core';
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
