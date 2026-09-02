
import PropTypes from 'prop-types';

import { CardButton } from '../CardButton'; 
import { Container, CardImage } from './styles'; 


export function CardProduct({ product }) {
          return (
    <Container>
      <CardImage SRC={product.url} alt={product.name} />  
      <div>
        <p>{product.name}</p>
        <strong>{product.price}</strong>
      </div>
      <CardButton></CardButton> 
    </Container>  
  );
}

CardProduct.PropTypes = {
    product: PropTypes.object,
}



