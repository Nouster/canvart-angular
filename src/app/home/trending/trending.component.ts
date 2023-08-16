import { Component, OnInit } from '@angular/core';
import { INFT } from 'src/app/models/inft';
import { NftService } from 'src/app/service/Canvart/nft.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  nfts!: INFT[];
  constructor(private nftService: NftService) {}

  ngOnInit(): void {
    this.displayNFT();
  }

  displayNFT() {
    this.nftService.getAllNFT().subscribe((nft) => {
      this.nfts = nft['hydra:member'];
      console.log(this.nfts);
    });
  }
}
