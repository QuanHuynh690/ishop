import React from 'react';

import { useQuery } from '@apollo/client';
import { GetProductsData, GetProductVariables, GET_PRODUCTS, Product } from '../../graphql/product/product.query';
import ProductItem from '../ProductItem';


const GenuineArea = () => {
  const { data: dataGenuineProducts, loading: gettingProducts, error: errorProducts } = useQuery<
    GetProductsData,
    GetProductVariables
  >(GET_PRODUCTS, {
    variables: { page: 1, pageSize: 8, condition: { search: "Hàng Chính Hãng" } },
  })
  console.log('dataPro :>> ', dataGenuineProducts);
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-c979b3e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c979b3e" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-row">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ff7825f" >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-element-1bd5965 elementor-widget elementor-widget-heading">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Genuine Products</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-242e738 elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      <p>Genuine products with guaranteed quality</p> </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-5ab596c elementor-widget elementor-widget-shortcode">
                  <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                      <div className="woocommerce columns-4 ">
                        <ul className="products columns-4">
                          {dataGenuineProducts?.getProducts?.Products?.map((item: Product, index: number) => (
                            <li className="ast-article-single product type-product post-85 status-publish first instock product_cat-plants has-post-thumbnail featured shipping-taxable purchasable product-type-simple">
                              <ProductItem {...item} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
export default GenuineArea