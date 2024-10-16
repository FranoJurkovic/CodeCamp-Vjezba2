import React, { useState } from 'react';

const Brojač: React.FC = () => {
  // useState hook za pohranu trenutne vrijednosti count
  const [brojač, namjestibrojac] = useState<number>(0);

  return (
    <div>
      <h1>Trenutna vrijednost: {brojač}</h1>
      <p>{brojač}</p>
      {/* Gumbi za promjenu count-a */}
      <button onClick={() => namjestibrojac(brojač + 1)}>+1</button>
      <button onClick={() => namjestibrojac(brojač - 1)}>-1</button>
      <button onClick={() => namjestibrojac(0)}>Reset</button>
    </div>
  );
};

export default Brojač;