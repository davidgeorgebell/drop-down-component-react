import React from 'react';

import Dropdown from './Dropdown';

const data = [
  {
    name: 'Wave Racer',
    id: 1
  },
  {
    name: 'Mario Kart',
    id: 2
  },
  {
    name: 'Jak and Daxter',
    id: 3
  }
];

function App() {
  return (
    <div className='App'>
      <main>
        <Dropdown
          title='Pick some games'
          items={data}
          /* For multiSelect === multiSelect */
        />
      </main>
    </div>
  );
}

export default App;
