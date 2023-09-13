import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/Authentication/token.service';
import { UserService } from '../service/Canvart/user.service';
import { IUser } from '../models/iuser';
import { INFT } from '../models/inft';
import { ToastrService } from 'ngx-toastr';
import { SearchServiceService } from '../service/SearchService/search-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  userConnected!: IUser | undefined;
  nfts: INFT[] | undefined;
  searchTerm: string = '';

  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private toaster: ToastrService,
    private searchService: SearchServiceService
  ) {}

  ngOnInit() {
    if (localStorage['token']) {
      this.tokenService.checkUserNameAndToken();
    }

    this.userConnected = this.userService.getUserData();
  }

  isLoggedIn(): boolean {
    return this.tokenService.getIslogged();
  }

  disconnected(): void {
    this.toaster.error('You have been disconnected');
    this.tokenService.destroyToken();
    this.userConnected = undefined;
  }

  canLogin(): boolean {
    if (localStorage['token']) {
      return this.tokenService.checkUserNameAndToken();
    }
    return false;
  }

  onSearch(term: string) {
    this.searchService.changeSearchTerm(term);
  }
}
