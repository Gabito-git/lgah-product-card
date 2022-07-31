import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product1, product2 } from '../data/products';

describe('ProductiImage', () => {

  test('Debe mostrar el componente correctamente con la imagen personalizada', () => {

    const wrapper = renderer.create(
      <ProductCard product={ product1 }>
        {
          () => <ProductImage img="http://image.com" />
        }
        
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot();
  })

  test("Debe mostrar el componente con la imagen del producto", () => {

    const wrapper = renderer.create(
      <ProductCard product={ product2 }>
        {
          () => <ProductImage />
        }
      </ProductCard>
    )

    expect( wrapper.toJSON() ).toMatchSnapshot();

  })

})