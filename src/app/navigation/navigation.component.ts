import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/Authentication/token.service';
import { UserService } from '../service/Canvart/user.service';
import { IUser } from '../models/iuser';
import { INFT } from '../models/inft';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  userConnected!: IUser | undefined;
  nfts: INFT[] | undefined;

  constructor(
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  ngOnInit() {
    if (localStorage['token']) {
      this.tokenService.checkUserNameAndToken();
    }

    this.userService.getUserData().subscribe((userData) => {
      this.userConnected = userData;
      this.nfts = this.userConnected?.nft;
      console.log(this.userConnected);
    });
  }

  isLoggedIn(): boolean {
    return this.tokenService.getIslogged();
  }

  disconnected(): void {
    this.tokenService.destroyToken();
    this.userConnected = undefined;
  }

  canLogin(): boolean {
    if (localStorage['token']) {
      return this.tokenService.checkUserNameAndToken();
    }
    return false;
  }
}
