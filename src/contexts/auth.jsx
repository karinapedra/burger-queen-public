import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const exampleUser ={
    email: 'waiter@email.com',
    password: '123456',
  };

    const signin = (email, password) => {
      if (email === exampleUser.email && password === exampleUser.password) {
        setUser(exampleUser);
        return;
      } else {
        return 'Incorrect email or password';
      }
    // } else {
    //   return 'User not found';
    // }
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
    <AuthContext.Provider value={{ user, signed: !!user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
