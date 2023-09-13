import { Component, OnInit } from '@angular/core';
import { INFT } from 'src/app/models/inft';
import { NftService } from 'src/app/service/Canvart/nft.service';
import { SearchServiceService } from 'src/app/service/SearchService/search-service.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css'],
})
export class NftComponent implements OnInit {
  nfts!: INFT[];
  searchTerm: string = '';
  filteredNft: INFT[] = [];

  constructor(
    private nftService: NftService,
    private searchService: SearchServiceService
  ) {}

  ngOnInit() {
    this.searchService.currentSearchTerm.subscribe((term) => {
      this.searchTerm = term;
      this.filterItems();
    });
    this.displayAllNft();
  }

  displayAllNft() {
    this.nftService.getAllNFT().subscribe((nft) => {
      this.nfts = nft['hydra:member'];
      this.filterItems();
    });
  }

  filterItems() {
    this.filteredNft = this.nfts.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
