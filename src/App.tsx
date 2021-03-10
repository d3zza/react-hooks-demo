import React, { useState } from 'react';

import FormClass from './FormClass';
import Form from './Form';
import AccordionItem from './accordion';

// ## Intro
// who it's for
// what we'll cover
// ## Set up
// Vite
// App.tsx / sass
// Component Class
// Props constructor/FC
// State setState / useState
// Refs createRef / useRef
// ComponentDidMount / useEffect
// document listener, binding
// ComponentWillUnmount / useEffect clean up
// clean up when changing dependencies
// ## Custom hooks
// useAccordion
// usePrevious
// useUniqueId (useMemo)
// useLocalStorage

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count ? 0 : 1)}>{count}</button>
      <h1>React Hooks</h1>
      {count === 0 && <FormClass title="Form Class" />}
      {count !== 0 && <Form title="Form FC" />}
      <AccordionItem />
    </div>
  );
}

export default App;
