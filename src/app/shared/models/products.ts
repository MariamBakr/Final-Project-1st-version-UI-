export class Products{
    id!:string;
    title!:string;
    images!: string[];
    quantity!:number;
    price!:number;
    colors?: Array<string>;
    dimensions!:{ height: number, width: number, length: number };
    rate!: number;
    matrial!: string;
    origins!: string[];
    category!:string;
    subcategory!:string;
    overview!:string;
    _id!: string;
  }
