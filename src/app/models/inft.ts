import { ICategory } from './icategory';
import { ICollectionNFT } from './icollection-nft';

export interface INFT {
  id: string;
  name: string;
  img: string;
  descritption: string;
  launchDate: Date;
  launchPriceEth: Number;
  launchPriceEuro: Number;
  collectionNFT: ICollectionNFT;
  categoryNFTs: ICategory;
  creator: string;
}
