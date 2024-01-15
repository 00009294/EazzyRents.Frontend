import { Image } from "./Image";
import {RealEstateStatus} from "./RealEstateStatus"

export interface RealEstate{
    id: number,
    description: string;
    address: string;
    price: number;
    phoneNumber: string;
    ownerId: number;
    images: Image[];
    realEstateStatus: RealEstateStatus;

}