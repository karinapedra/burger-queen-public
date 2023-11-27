import React, { useState } from 'react';
import * as C from './styles';
import './style.css';
import Section from '../../components/Section';
import ListTable from '../../components/ListTables';

const listTableData = [
  {
    url: '',
    imageUrl: require('../../assets/icons/rectangle-table-bg.png'),
    alt: '',
    tableNumber: '1',
    tableStatus: 'Occupied'
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/rectangle-table-bg.png'),
    alt: '',
    tableNumber: '2',
    tableStatus: 'Occupied'
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/rectangle-table-bg.png'),
    alt: '',
    tableNumber: '3',
    tableStatus: 'Occupied'
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/rectangle-table-bg.png'),
    alt: '',
    tableNumber: '4',
    tableStatus: 'Occupied'
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/rectangle-table-bg.png'),
    alt: '',
    tableNumber: '5',
    tableStatus: 'Occupied'
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/rectangle-table-bg.png'),
    alt: '',
    tableNumber: '6',
    tableStatus: 'Occupied'
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/rectangle-table-bg.png'),
    alt: '',
    tableNumber: '7',
    tableStatus: 'Occupied'
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/rectangle-table-bg.png'),
    alt: '',
    tableNumber: '8',
    tableStatus: 'Occupied'
  },
  {
    url: '',
    imageUrl: require('../../assets/icons/rectangle-table-bg.png'),
    alt: '',
    tableNumber: '9',
    tableStatus: 'Occupied'
  },

]

const Home = ({ handleTableSelect, table }) => {





  return (
    <C.Container className='lateralSection'>
      <div className='App'>

        <main>
          <Section
            title='Please select a table to be served.'
            tableSelected={`Table selected: ${table !== null ? table : ' '}`}
          >

            {
              listTableData.map(function (item, index) {
                return (
                  <ListTable
                    key={index}
                    url={item.url}
                    imageUrl={item.imageUrl}
                    alt={item.alt}
                    tableNumber={item.tableNumber}
                    tableStatus={item.tableStatus}
                    onTableSelect={handleTableSelect}
                  />

                )
              })
            }

          </Section>
        </main>
      </div>
    </C.Container>
  );
};

export default Home;
