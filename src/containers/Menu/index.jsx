
import {
  Container,
  Banner,
  CategoryMenu,
  ProductsContainer,
  CategoryButton,
  BackButton,
} from './styles';

import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { formatPrice } from '../../utils/formatPrice';

import { CardProduct } from '../../components/CardProduct';

import { useNavigate, useLocation } from 'react-router-dom';

export function Menu() {
  const [categories, setCategories] = useState([]);

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('categoria');

    if (categoryId) {
      return categoryId;
    }

    return 0;
  });

  const filteredProducts =
    activeCategory === 0
      ? products
      : products.filter(
          (product) => product.category_id === activeCategory,
        );

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const newCategories = [{ id: 0, name: 'todos' }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('/products');

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadCategories();

    loadProducts();
  }, []);

  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBURGUER
          <br />
          ESTA AQUI!
          <span>Esse cardapio está irresístivel!</span>
        </h1>
      </Banner>

      <CategoryMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                },
              );

              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenu>

      {activeCategory !== 0 && (
        <BackButton onClick={() => navigate('/')}>
          Voltar para categorias
        </BackButton>
      )}

      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  );
}