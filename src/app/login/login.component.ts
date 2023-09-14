import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: string = ''; 
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // Vérification des informations d'identification en utilisant le service AuthService
    if (this.authService.login(this.userName, this.password)) {
      this.router.navigate(['/products']);
    } else {
      // Afficher un message d'erreur ou effectuer une action en cas d'informations d'identification invalides
      console.log('Informations d\'identification invalides. Veuillez réessayer.');
    }
  }
}
