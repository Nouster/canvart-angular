import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/models/iuser';
import { NftService } from 'src/app/service/Canvart/nft.service';
import { UserService } from 'src/app/service/Canvart/user.service';
import { CrytpoCompareService } from 'src/app/service/CryptoCompare/crytpo-compare.service';

@Component({
  selector: 'app-create-nft',
  templateUrl: './create-nft.component.html',
  styleUrls: ['./create-nft.component.css'],
})
export class CreateNftComponent implements OnInit {
  user: IUser = this.userConnected.getUserData();
  userId: number = this.user.id!;
  currentDate = new Date().toISOString().substr(0, 10);
  ethValue!: number;

  createForm = this.fb.group({
    name: ['', Validators.required],
    img: ['', Validators.required],
    description: ['', Validators.required],
    launchDate: [this.currentDate],
    launchPriceEth: [0.0, Validators.required],
    launchPriceEuro: [0.0, Validators.required],
    collectionNFT: ['http://localhost:8000/api/collection_n_f_ts/12'],
    categoryNFTs: [1],
    user: [`http://localhost:8000/api/users/${this.user.id}`],
    creator: ['', Validators.required],
    trending: [0],
  });

  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private userConnected: UserService,
    private crypto: CrytpoCompareService,
    private nftService: NftService
  ) {}

  ngOnInit() {
    this.userConnected.getUserData1().subscribe(
      (user) => {
        this.userId = user.id!;
        console.log(this.user);
        // const userId = this.user.id ?? 0; // Utilisation de nullish coalescing
      },
      (error) => {
        console.error('Error fetching user data: ', error);
      }
    );
    this.getActualValue();
  }

  submit(): void {
    if (this.createForm.invalid) {
      this.toast.error('Please fill in all required fields.');
      return;
    }

    const launchPriceEth = this.createForm.value.launchPriceEth;
    if (launchPriceEth !== null && launchPriceEth !== undefined) {
      const calculatedLaunchPriceEuro = parseFloat(
        (launchPriceEth * this.ethValue).toFixed(2)
      );
      this.createForm
        .get('launchPriceEuro')
        ?.setValue(calculatedLaunchPriceEuro);
    } else {
      console.error('Launch price in ETH is null or undefined.');
      return;
    }

    this.toast.success('NFT successfully submitted');
    this.nftService.createNft(this.createForm).subscribe();
    console.log(this.createForm);
    console.log(this.createForm.value.collectionNFT);
  }

  getActualValue() {
    this.crypto.getEthToEuro().subscribe((eth) => {
      this.ethValue = eth.EUR;
    });
  }
}
