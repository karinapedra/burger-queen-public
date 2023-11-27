import React, { useEffect } from "react";
import * as C from '../Home/styles';
import '../Home/style.css';
import Section from "../../components/Section";
import ListMenu from "../../components/ListMenu";
import { urlAPI, setProducts } from "../../API/localStorage";


const Drinks = ({ table }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user).acessToken;

        const response = await fetch(`${urlAPI}/products`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        const data = await response.json();
        console.log('Produtos da API:', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);
  const products = localStorage.getItem('products');

  return (
    <C.Container className='lateralSection'>
      <div className='App'>
        <main>
          <Section
            tableSelected={`Table selected: ${table !== null ? table : ' '}`}
            tableBill='Total: $ [ ]'
          >
            {products && JSON.parse(products).map((item, index) => (
              item.type === 'Drinks' && (
                <ListMenu
                  key={index}
                  url={item.url}
                  imageUrl={item.image}
                  id={item._id}
                  menuItem={item.name}
                  price={item.price}
                  style={{
                    width: '200px',
                    height: 'auto'
                  }}
                  />
                )
              ))
              }
            </Section>
          </main>
        </div>
      </C.Container>
    )
  }

export default Drinks;