import React from 'react';
import './App.css';
import WatchesWidget from './Components/Watches/WatchesWidget';
import NotesPanelClass from './Components/Crud/NotesPanelClass';

function App() {
  return (
    <>
      <div className='title'>Мировые часы</div>
      <WatchesWidget />

      <div className="title">CRUD</div>
      <div className='container'>
        <NotesPanelClass />
      </div>
    </>
  );
}

export default App;
