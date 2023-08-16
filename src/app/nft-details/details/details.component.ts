import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INFT } from 'src/app/models/inft';
import { NftService } from 'src/app/service/Canvart/nft.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  nft: INFT | undefined;

  constructor(private route: ActivatedRoute, private nftDetails: NftService) {}

  ngOnInit(): void {
    this.getNftDetails();
  }

  getNftDetails() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.nftDetails.getNft(id).subscribe((nft) => {
        this.nft = nft;
      });
    }
  }
}
