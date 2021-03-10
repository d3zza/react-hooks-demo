import React, { useState, useRef, useEffect } from 'react';

const Form: React.FC<FormProps> = ({ title }) => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState('Jack');
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();

    console.log('hook init');

    const onMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.offsetX,
        y: e.offsetY,
      });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      console.log('hook clean up');

      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log('name change', name);
  }, [name]);

  return (
    <form className="form">
      <h2>{title}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>
        Mouse: {mouse.x},{mouse.y}
      </p>
    </form>
  );
};

export default Form;
