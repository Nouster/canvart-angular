import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/Authentication/token.service';
import { UserService } from '../service/Canvart/user.service';
import { IUser } from '../models/iuser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  userConnected: IUser | undefined;

  constructor(
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.tokenService.checkUserNameAndToken();
    }
    this.findUser();
  }
  isLoggedIn(): boolean {
    return this.tokenService.getIslogged();
  }

  disconnected(): void {
    this.tokenService.destroyToken();
  }

  canLogin(): boolean {
    if (localStorage.getItem('token')) {
      return this.tokenService.checkUserNameAndToken();
    }
    return false;
  }

  findUser(): void {
    const email: string | null = localStorage.getItem('user_key');

    if (email) {
      this.userService.getAllUsers().subscribe(
        (response: any) => {
          const users: any[] = response['hydra:member'];
          const filteredUsers = this.userService.findUser(users, email);
          this.userConnected = filteredUsers[0];
          console.log(this.userConnected);
        },
        (error) => {
          console.error("Une erreur s'est produite : ", error);
        }
      );
    }
  }
}
