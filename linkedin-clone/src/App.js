import React from 'react';
import './App.css';
import Header from './Componants/Header/Header';
import Sidebar from './Componants/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">

      {/* Header  */}
      <Header/>
      {/* App Body  */}
      <div className="app_body">
           {/* SideBard  */}
           <Sidebar/>
      {/* Feed  */}
      {/* Widget  */}
      </div>
     

    </div>
  );
}

export default App;
