import { Component, OnInit } from '@angular/core';
import { ICollectionNFT } from 'src/app/models/icollection-nft';
import { INFT } from 'src/app/models/inft';
import { CollectionService } from 'src/app/service/Canvart/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  collections!: ICollectionNFT[];
  backgroundImageUrl: string[] = [];

  constructor(private collectionService: CollectionService) {}

  ngOnInit() {
    this.displayCollections();
  }

  displayCollections() {
    this.collectionService.getAllCollections().subscribe((collection) => {
      this.collections = collection['hydra:member'];
      this.collections.forEach((element) => {
        if (element.hasOwnProperty('NFT') && element.NFT.length > 0) {
          this.backgroundImageUrl.push(element.NFT[0].img);
          console.log('backgroundImageUrl', this.backgroundImageUrl);
        }
      });
    });
  }
}
