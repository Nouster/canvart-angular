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
    this.displayTrendingNFT();
  }

  displayTrendingNFT() {
    this.nftService.getAllNFT().subscribe((nft) => {
      const allNFTs = nft['hydra:member'];
      this.nfts = allNFTs.filter((nft: INFT) => nft.trending > 500).slice(0, 4);
    });
  }
}
