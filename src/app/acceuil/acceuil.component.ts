import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  constructor(private router: Router){}

  redirectToLoginPage() {
    this.router.navigate(['/login']);
  }
}
