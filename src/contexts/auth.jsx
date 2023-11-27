import { createContext, useEffect, useState } from 'react';
import { urlAPI, setItens, getItens, setIdUsuario, getIdUsuario } from '../../src/API/localStorage'

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const signin = async (email, password, role) => {

    try {
      const response = await fetch(`${urlAPI}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          role: role,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;

        
        setItens(token);
        setUser(data);

        return null;
      } else {
        return 'Authentication failed';
      }
    } catch (error) {
      console.error('Error:', error);
      return 'An error occurred';
    }
  };


  const signout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user'); //recupera  o usuário do localStorage
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); //armazena o usuário no localStorage se 1º acesso
    }
  });


  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};