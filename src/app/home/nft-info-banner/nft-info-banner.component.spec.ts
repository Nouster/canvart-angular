import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftInfoBannerComponent } from './nft-info-banner.component';

describe('NftInfoBannerComponent', () => {
  let component: NftInfoBannerComponent;
  let fixture: ComponentFixture<NftInfoBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftInfoBannerComponent]
    });
    fixture = TestBed.createComponent(NftInfoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
