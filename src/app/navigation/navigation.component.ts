import { Component } from '@angular/core';
import { TokenService } from '../service/Authentication/token.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(private tokenService: TokenService) {}

  isLoggedIn(): boolean {
    return this.tokenService.isLogged();
  }
}
