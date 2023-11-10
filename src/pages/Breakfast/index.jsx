import React, { useState } from "react";
import * as C from '../Home/styles';
import '../Home/style.css';
import Section from "../../components/Section";
import ListMenu from "../../components/ListMenu";

const listMenuData = [
  {
    url: '',
    imageUrl: require('../../assets/icons/BF-HAM-AND-CHEESE-SANDWICH.png'),
    alt: '',
    menuItem: 'Ham and Cheese Sandwish',
    imageStyle: {
      width: '200px',
      height: 'auto'
    }
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/BF-COFFEE-WITH-MILK.png'),
    alt: '',
    menuItem: 'Coffee with Milk',
    imageStyle: {
      width: '200px',
      height: 'auto'
    }
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/BF-AMERICAN-COFFEE.png'),
    alt: '',
    menuItem: 'American Coffee',
    imageStyle: {
      width: '200px',
      height: 'auto'
    }
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/BF-FRESH-FRUIT-JUICE.png'),
    alt: '',
    menuItem: 'Fresh Fruit Juice',
    imageStyle: {
      width: '200px',
      height: 'auto'
    }
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/BF-TAPIOCA.png'),
    alt: '',
    menuItem: 'Tapioca',
    imageStyle: {
      width: '200px',
      height: 'auto'
    }
  }

]
const Breakfast = ({ table }) => {


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


// const Breakfast = () => {

//   return (
//     <C.Container className='lateralSection'>
//       <div className='App'>

//         <main>
//           <Section
//             title='Please select a table to be served.'
//             subtitle='Table selected: []'
//           >

//             {
//               listMenuData.map(function (item, index) {
//                 return (
//                   <ListTable
//                     key={index}
//                     url={item.url}
//                     imageUrl={item.imageUrl}
//                     alt={item.alt}
//                     tableNumber={item.tableNumber}
//                     tableStatus={item.tableStatus}
//                   />

//                 )
//               })
//             }


//           </Section>
//         </main>


//       </div>


//     </C.Container>
//   );
// };


export default Breakfast;