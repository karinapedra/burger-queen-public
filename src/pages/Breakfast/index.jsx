import React, { useState, useEffect } from "react";
import * as C from '../Home/styles';
import '../Home/style.css';
import Section from "../../components/Section";
import ListMenu from "../../components/ListMenu";
import { urlAPI, setProducts } from "../../API/localStorage";


const Breakfast = ({ table }) => {
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
            { console.log('products', products)}

{/* const jsonArray = ['{"result":true,"count":42}','{"result":false,"count":57}'];


jsonArray.map((json) => {
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true
}) */}

             {products && JSON.parse(products).map((item, index) => (
              item.type === 'breakfast' && (
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

export default Breakfast;