# lgah-product-card

Este es un paquete de pruebas de despliegue en NPM

### Luis Arévalo

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'lgah-product-card'
```


```
<ProductCard 
  product={ product }
  initialValues={{
    count: 4,
    // maxCount:10
  }}
>
  {
    () => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons/>
      </>
    )
  }
  
</ProductCard>
```