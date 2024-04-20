import React, {useEffect, useState} from 'react';
import api from '../../api';
import CatalogPage from '@/components/pages/CatalogPage/CatalogPage';
import {useQuery} from '@tanstack/react-query'
import { useRouter } from 'next/router';

const Index = ({
  category,
  categoryItem,
  products,
  complects,
  pagination,
  finalProductAttributes
}) => {
  const router = useRouter();
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({});
  // const handleAttributeChange = (e, labelName) => {
  //   const attributeValue = e.target.value;
  //   const attributeId = e.target.id;
  //   const isChecked = e.target.checked;
  //   const attribute = { id: attributeId, value: attributeValue };
  //   if (isChecked) {
  //     setSelectedAttributes([...selectedAttributes, attribute]);
  //   } else {
  //     setSelectedAttributes(selectedAttributes.filter((attr) => attr.value !== attributeValue));
  //   }
  // };

  // useEffect(() => { рабочий частично
  //   const queryValues = selectedAttributes.map(attr => `${attr.id}=${attr.value}`).join('&');
  //   const path = queryValues ? `${queryValues}` : '';
  //   router.push({pathname: router.asPath, query: path}, undefined, { shallow: true })
  // }, [selectedAttributes]);

  const handleAttributeChange = (e) => {
    const attributeValue = e.target.value;  // рабочий
    const attributeId = e.target.id;
    const isChecked = e.target.checked;
    const attribute = { id: attributeId, value: attributeValue };

    if (isChecked) {
      setSelectedAttributes(prevSelected => [...prevSelected, attribute]);
    } else {
      setSelectedAttributes(prevSelected => prevSelected.filter(attr => attr.value !== attributeValue));
    }
  };

  const handleFilter = () => {
    const filtered = products.filter(product => {
      // const price = parseFloat(product.price);
      // const matchesPrice = price >= filterCriteria.minPrice && price <= filterCriteria.maxPrice;
      const matchesAttributes = selectedAttributes.some((selectedAttr) => {
          return product.attributes.attributes.some((productAttr) => {
            return productAttr.value === selectedAttr.value;
          });
      });
      return matchesAttributes;
    });
    setFilteredProducts(filtered);
  };

  const handleResetFilters = () => {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    });
    setFilteredProducts([]);
    setSelectedAttributes([])
    setFilterCriteria({
      minPrice: 0,
      maxPrice: 1000,
    });
  };
//  const filteredProducts = products.filter((product) => {  //рабочий
//     return selectedAttributes.some((selectedAttr) => {
//       return product.attributes.attributes.some((productAttr) => {
//         return productAttr.value === selectedAttr.value;
//       });
//     });
//   });
  
  
  
  // const filteredProducts = products.filter((product) =>
  // selectedAttributeValues.every((attr) =>
  //     product.attributes.attributes.some((attribute) => selectedAttributes.includes(attribute.value))
  //   )
  // );


  return (
    <CatalogPage
      category={category}
      categoryItem={categoryItem}
      products={products}
      filteredProducts={filteredProducts}
      pagination={pagination}
      complects={complects}
      finalProductAttributes={finalProductAttributes}
      handleAttributeChange={handleAttributeChange}
      selectedAttributes={selectedAttributes}
      handleFilter={handleFilter}
      handleResetFilters={handleResetFilters}
    />
  );
};

export default Index;


export async function getServerSideProps(ctx) {
  let selectedAttribute = ctx.query.attribute || '';
  let productCategory = '';
  let items = 'pagination[limit]=9&';
  if (ctx.query.slug !== undefined && ctx.query.slug !== '') {
    productCategory = 'filters[category][slug][$eq]=' + ctx.query.slug + '&';
  }
  if (ctx.query.items !== undefined) {
    items = 'pagination[limit]=' + ctx.query.items + '&';
  }

  const [category, categoryItem, products, complects] = await Promise.all([
    api({url: '/categories?populate=img', method: 'get'}),
    api({url: `/category/${ctx.query.slug}?populate=*`, method: 'get'}),
    api({url: `/products?${productCategory}populate=*${selectedAttribute ?
        `&filters[attributes][value][$eq]=${selectedAttribute}` : ''}`,  method: 'get'}),
    api({url: `/complects?${productCategory}populate=*`, method: 'get'})
  ]);

  // Сбор атрибутов товаров по группам без повторов
  const productAttributes = {};

  products.data.data.forEach(product => {
    product.attributes.attributes.forEach(attribute => {
      const attributeName = attribute.name;
      const existingAttribute = productAttributes[attributeName] ? productAttributes[attributeName].find(attr => attr.value === attribute.value) : null;
  
      if (!existingAttribute) {
        if (!productAttributes[attributeName]) {
          productAttributes[attributeName] = [];
        }
  
        productAttributes[attributeName].push({
          id: attribute.id,
          value: attribute.value
        });
      }
    });
  });
  
  const finalProductAttributes = Object.keys(productAttributes).map(attributeName => ({
    attributeName,
    attributes: productAttributes[attributeName]
  }));
  

  return {
    props: {
      products: products.data.data,
      category: category.data.data,
      categoryItem: categoryItem.data.data.attributes,
      complects: complects.data.data,
      finalProductAttributes
    }
  };
}