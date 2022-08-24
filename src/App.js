// import React from 'react';
import React, { useEffect, useState  } from 'react';
import axios from 'axios';

import Router from './markup/router';
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/color.css'





const App = () => {
  const [dbData, setdbData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const idApi = '63063df48dbe1018251c9d6c'
  const urlServer = 'https://paginasserver.herokuapp.com/api/';
  const urlApi = `${urlServer}paginas/${idApi}`;

  // global context data
  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(urlApi);
      if (result.data) {
        setdbData(result.data);
        setIsLoading(false);
      }
      else {
        setdbData({});
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  // verificar los datos del context
  if (isLoading) return (
    <div className='d-flex justify-center align-items-center'>
      <div className='d-flex align-items-center justify-center'>
        <div className='inline-block w-8 h-8 border-4 rounded-full spinner-border animate-spin' role='status' style={{ color: 'transparent' }}>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
      <p style={{ color: 'transparent' }}>Loading...</p>
    </div>)
  else

    return (
      <div className="App">
        <Router />
      </div>
    );
}

export default App;
