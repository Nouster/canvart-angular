import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { INFT } from 'src/app/models/inft';
import { IUser } from 'src/app/models/iuser';
import { NftService } from 'src/app/service/Canvart/nft.service';
import { UserService } from 'src/app/service/Canvart/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  connectedUser: IUser | undefined;
  connectedUserNfts: INFT[] = [];
  nftId!: number;

  editForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private nftService: NftService
  ) {}

  ngOnInit(): void {
    this.connectedUser = this.userService.getUserData();
    this.nftId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  submit(): void {
    if (this.editForm.invalid) {
      this.toast.error('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    this.nftService.editNft(this.nftId, this.editForm.value).subscribe(
      () => {
        this.toast.success('NFT successfuly updated');
        this.router.navigate(['/gallery']);
      },
      (err) => {
        if (
          err.error &&
          err.error.message &&
          err.error.message.includes('duplicate')
        ) {
          this.toast.error('Error');
        } else {
          this.toast.error('Error');
        }
      }
    );
  }
}
