import { Container, Banner, CategoryMenu, ProductsContainer } from "./styles";


export function Menu() {
   return (
     <Container>
     <Banner>
        <h1>
            O MELHOR
            <br/>
            HAMBURGUER
            <br/>
            ESTA AQUI!
           <span>Esse cardapio etsa irresístivel!</span>   
        </h1>
     </Banner>
     <CategoryMenu></CategoryMenu>

     <ProductsContainer></ProductsContainer>


     </Container>
   );
}




