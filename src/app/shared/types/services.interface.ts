export interface AddOn {
  name: string;
  price: number;
  duration?: string;
  description?: string;
}

export interface PhotoService {
  id: number;
  name: string;
  description: string;
  duration: string;
  basePrice: number;
  inclusions: string[];
  addOns: AddOn[];
  imageUrl: string;
}