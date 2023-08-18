import { ICategory } from './icategory';
import { ICollectionNFT } from './icollection-nft';
import { IUser } from './iuser';

export interface INFT {
  id: number;
  name: string;
  img: string;
  description: string;
  launchDate: Date;
  launchPriceEth: Number;
  launchPriceEuro: Number;
  collectionNFT: ICollectionNFT;
  categoryNFTs: ICategory;
  creator: string;
  user: IUser;
}