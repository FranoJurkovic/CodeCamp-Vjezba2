import React from 'react';
import KontrolaKvačice from './kontrolakvačice';
import Brojač from './brojač';

export const App: React.FC = () => {
  return (
    <div>
      <h1>1. zadatak komponenta kontrolakvačice.tsx</h1>
      <KontrolaKvačice />

      <h1>2. zadatak komponenta brojač.tsx</h1>
      <Brojač />
    </div>
  );
};

export default App;