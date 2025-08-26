import { StaticImageData } from "next/image";

interface Product {
    id: string;
    productImage: string;
    productType: string;
    productGender: string;
    productSizeShoe: string;
    productSizes: string;
    productSizePantsWaist: string;
    productSizePantsInseam: string;
    productDescription: string;
    isHidden: boolean;
    isSold: boolean;
    createdAt: string;
    updatedAt: string;
 }

export default Product