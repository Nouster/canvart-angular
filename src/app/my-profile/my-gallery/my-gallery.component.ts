import { Component, OnInit } from '@angular/core';
import { INFT } from 'src/app/models/inft';
import { IUser } from 'src/app/models/iuser';
import { TokenService } from 'src/app/service/Authentication/token.service';
import { UserService } from 'src/app/service/Canvart/user.service';
import { CrytpoCompareService } from 'src/app/service/CryptoCompare/crytpo-compare.service';

@Component({
  selector: 'app-my-gallery',
  templateUrl: './my-gallery.component.html',
  styleUrls: ['./my-gallery.component.css'],
})
export class MyGalleryComponent implements OnInit {
  connectedUser: IUser | undefined;
  connectedUserNfts: INFT[] = [];
  excerptedDescriptions: { [key: string]: string } = {};
  nftNumber: number = 0;
  priceEth: any;

  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private cryptoService: CrytpoCompareService
  ) {}

  ngOnInit(): void {
    if (localStorage['token']) {
      this.tokenService.checkUserNameAndToken();
    }
    this.connectedUser = this.userService.getUserData();
    this.getUserNft();
    this.getEthConversion();
    this.getTotalNft();
  }

  getUserNft() {
    this.connectedUserNfts = this.connectedUser?.nFT || [];
    this.connectedUserNfts.forEach((nft) => {
      this.excerptedDescriptions[nft.id] = this.excerptDescription(
        nft.description
      );
    });
    console.log(this.connectedUserNfts);
  }

  getTotalNft(): number {
    return (this.nftNumber = this.connectedUserNfts.length);
  }

  excerptDescription(description: string): string {
    if (description.length > 100) {
      return description.substring(0, 100) + '...';
    } else {
      return description;
    }
  }

  getEthConversion() {
    this.cryptoService.getEthToEuro().subscribe((eth) => {
      this.priceEth = eth;
    });
  }
}
