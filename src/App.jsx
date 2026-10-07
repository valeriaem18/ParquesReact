import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React, { useState, useEffect } from 'react';


const App = () => {
  const [parques, setParques] = useState([]);
  useEffect(() => {

    fetch('https://pacopul.github.io/json/pn/parques.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.parques);
        setParques(data.parques);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div>
        <header className='bg-success-subtle shadow py-3'>
          <div className='container'>
            <h1 className='text-success-emphasis'>Parques naturales</h1>
          </div>
        </header>
        <main>
          <div className='container mt-4'>
            <div className='d-flex row justify-content-center'>
              {parques.map((parque) => {
                return (
                  <div className='col-sm-12 col-xl-6 mb-3'>
                    <div className='card h-100 shadow'>
                      <img className='card-img-top' src={parque.imagen} alt='Title'/>
                      <div className='card-body'>
                        <h4 className='card-title bg-success-subtle text-success-emphasis p-2 rounded'>{parque.nombre}</h4>
                        <div dangerouslySetInnerHTML={{ __html: parque.descripcion }} className='card-text p-2 pb-0'></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
        <footer className='bg-dark shadow py-3 mt-2'>
          <div className='container'>
            <h5 className='text-center text-white'>Langostas Angostas en la Costa &copy;</h5>
          </div>
        </footer>
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI'
          crossorigin='anonymous'></script>
      </div>
    </>
  )
}

export default App
