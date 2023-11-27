import React from "react";
import * as C from '../Home/styles';
import '../Home/style.css';
import Section from "../../components/Section";
import ListMenu from "../../components/ListMenu";

const listMenuData = [
  {
    url: '',
    imageUrl: require('../../assets/icons/D-SODA500.png'),
    alt: '',
    menuItem: 'Soda 500 ml', 
    imageStyle: {
      width: '180px', 
      height: 'auto'
    }
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/D-SODA700.png'),
    alt: '',
    menuItem: 'Soda 700 ml',
    imageStyle: {
      width: '180px', 
      height: 'auto'
    }
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/D-WATER500.png'),
    alt: '',
    menuItem: 'Water 500 ml',
    imageStyle: {
      width: '180px', 
      height: 'auto'
    }
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/D-WATER700.png'),
    alt: '',
    menuItem: 'Water 700 ml',
    imageStyle: {
      width: '180px', 
      height: 'auto'
    }
  }

]
const Drinks = ({ table }) => {
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

export default Drinks;