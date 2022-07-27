import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmationinscription',
  templateUrl: './confirmationinscription.component.html',
  styleUrls: ['./confirmationinscription.component.scss']
})
export class ConfirmationinscriptionComponent implements OnInit {
  numID: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToConnexion():void {
    this.router.navigate(['connexion'])
  }

}
