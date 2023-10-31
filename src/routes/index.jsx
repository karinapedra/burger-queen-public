import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Navigate from '../components/Navigate';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Burger from '../pages/Burger';
import Breakfast from '../pages/Breakfast';
import Drinks from '../pages/Drinks'
import Notification from '../pages/Notification'
const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />; {/* se signed > 0 -> condição ? expressão se verdadeiro : expressão se falso */ }
};

const RoutesApp = () => {
  const { signed } = useAuth();
  return (
    <div>
      <BrowserRouter>
      {signed && <Navigate />} {/* Renderize o componente de navegação aqui */}
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route exact path="/Breakfast" element={<Private Item={Breakfast} />} />
          <Route exact path="/Burger" element={<Private Item={Burger} />} />
          <Route exact path="/Drinks" element={<Private Item={Drinks} />} />
          <Route exact path="/Notification" element={<Private Item={Notification} />} />
          <Route path="/" element={<Signin />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutesApp;


//linha 5 e 22