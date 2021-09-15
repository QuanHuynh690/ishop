import { gql } from "@apollo/client";

export const productCardQueryProps = `
id
name
images
thumbnailImage
price
linkUrl
price_discount
category
category_slug
productId
sale_price
product_slug
vendor
`;

export type Product = {
  name: string;
  images: [string];
  thumbnailImage: string;
  price: string;
  linkUrl: string;
  price_discount: string;
  sale_price: number;
  category: string;
  collection_name: string;
  productId: number;
  category_slug: string;
  product_slug: string;
  vendor: string;
};
type Condition = {
  category?: string;
  priceFrom?: number;
  priceTo?: number;
  sortPirce?: number;
  search?: string;
  vendor?: string;
};

export type GetProductsData = {
  getProducts: {
    Products: Product[];
    total: number;
  };
};
export type GetProductsVariables = {
  page: number;
  pageSize: number;
  condition?: Condition;
};
export type GetProductData = {
  getProduct: {
    name: string;
    images: string[];
    thumbnailImage: string;
    price: string;
    linkUrl: string;
    price_discount: string;
    sale_price: number;
    category: string;
    collection_name: string;
    productId: number;
    category_slug: string;
    product_slug: string;
    vendor: string;
  };
};
export type GetProductVariables = {
  id: number;
};
export const GET_PRODUCTS = gql`
query($page: Int! $pageSize: Int! $condition:Condition){
  getProducts (page:$page pageSize:$pageSize condition:$condition){
    Products{
      ${productCardQueryProps}
    }
    total
  }
}
`;

export const GET_PRODUCT = gql`
query($id : Int!){
  getProduct (id : $id){
    ${productCardQueryProps}
  }
}
`;
