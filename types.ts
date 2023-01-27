export interface Iimagedata{
    url:string,
    alt:string,
    title?:string,
    price?:string,
    discount?:string,
    percent?:string
     }
export interface IProductdata{
    url:string,
    alt:string,
    title?:string,
    price?:string,
    discount?:string,
    percent?:string,
    likes:number
     }
     export interface ICardData{
        url:string,
        alt:string,
        subtitle:string
     };
     export interface ICategories {
      title:       string;
      icon:        string;
      subCategory: SubCategory[];
  }
  
  export interface SubCategory {
      title:   string;
      subList: string[];
  }

  