export interface Product {
    length: any;
    reduce(arg0: (sum: any, order: any) => any, arg1: number): unknown;
    _id: string;
    _type: 'product';
    name: string;
    image?: {
      _type: 'image';
      asset: {
        _type: 'reference';
        _ref: string;
      };
    };
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    features: string[]
    description: string;
    tags: string[];
    sizes: string[];
    dimensions?: {
      height: string;
      width: string;
      depth: string;
    };
    quantity: number;
    category: string;
    slug: {
      _type: 'slug';
      current: string;
    };
}
