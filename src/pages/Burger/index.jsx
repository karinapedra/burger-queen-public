import React from "react";
import * as C from '../Home/styles';
import '../Home/style.css';
import Section from "../../components/Section";
import ListMenu from "../../components/ListMenu";

const listMenuData = [
  {
    url: '',
    imageUrl: require('../../assets/icons/BA-SINGLE-BURGER.png'),
    alt: '',
    menuItem: 'Single Burger', 
    imageStyle: {
      width: '200px', 
      height: 'auto'
    }
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/BA-DOUBLE-BURGER.png'),
    alt: '',
    menuItem: 'Double Burger',
    imageStyle: {
      width: '200px', 
      height: 'auto'
    }
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/BA-ONION-RINGS.png'),
    alt: '',
    menuItem: 'Onion Rings',
    imageStyle: {
      width: '200px', 
      height: 'auto'
    }
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/BA-FRENCH-FRIES.png'),
    alt: '',
    menuItem: 'French Fries',
    imageStyle: {
      width: '200px', 
      height: 'auto'
    }
  }

]
const Burger = ({ table }) => {
  return (
    <C.Container className='lateralSection'>
     <div className='App'>
    <main>
         <Section
            tableSelected={`Table selected: ${table !== null ? table : ' '}`}
            tableBill='Total: $ [ ]'
          >
          {
            listMenuData.map(function (item, index) {
              return (
                <ListMenu
                  key={index}
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                  menuItem={item.menuItem}
                  style={item.imageStyle}
                />

              )
            })
          }
          </Section>
        </main>

        </div>




    </C.Container>
  )
}

export default Burger;