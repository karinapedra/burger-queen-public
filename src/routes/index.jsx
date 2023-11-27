import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Navigate from '../components/Menu/Navigate';
import Home from '../pages/Home';
import SigninComponent from '../pages/Signin';
import Burger from '../pages/Burger';
import Breakfast from '../pages/Breakfast';
import Drinks from '../pages/Drinks'
import Bill from '../pages/Bill/Bill';
import Notification from '../pages/Notification'
import '../styles/global'
import { useState } from 'react';

const Private = ({ Item, selectedTable, setSelectedTable }) => {
  const handleTableSelect = (tableNumber) => {
    setSelectedTable(tableNumber);
  };


  const { user } = useAuth();
  return user ? < Item handleTableSelect={handleTableSelect} table={selectedTable} /> : <SigninComponent />; 


};

const RoutesApp = () => {
  const { user } = useAuth();
  const [selectedTable, setSelectedTable] = useState(null);


  return (
    <div id='principal'>
      <BrowserRouter>
        {user && <Navigate />} 
        <Routes>
          <Route exact path="/home" element={<Private
            Item={Home}
            selectedTable={selectedTable}
            setSelectedTable={setSelectedTable}
          />} />
          <Route exact path="/Breakfast" element={<Private
            Item={Breakfast}
            selectedTable={selectedTable}
            setSelectedTable={setSelectedTable}
          />} />
          <Route exact path="/Burger" element={<Private
            Item={Burger}
            selectedTable={selectedTable}
            setSelectedTable={setSelectedTable}
          />} />
          <Route exact path="/Drinks" element={<Private 
          Item={Drinks} 
          selectedTable={selectedTable}
          setSelectedTable={setSelectedTable}
          />} />
          <Route exact path="/Bill" element={<Private 
          Item={Bill} 
          selectedTable={selectedTable}
          setSelectedTable={setSelectedTable}
          />} />
          <Route exact path="/Notification" element={<Private 
          Item={Notification} 
          />} />
          <Route path="/" element={<SigninComponent />} />
          <Route path="*" element={<SigninComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutesApp;

