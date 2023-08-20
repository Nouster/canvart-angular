import { Component } from '@angular/core';
import { INFT } from 'src/app/models/inft';
import { NftService } from 'src/app/service/Canvart/nft.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css'],
})
export class NftComponent {
  nfts!: INFT[];

  constructor(private nftService: NftService) {}

  displayAllNft() {
    this.nftService.getAllNFT().subscribe((nft) => {
      this.nfts = nft['hydra:member'];
      console.log(this.nfts);
    });
  }
}
