import { useRef, useState } from 'react';

interface IInputAddProps {
  onAdd(value: string): void;
}

export const InputAdd = (props: IInputAddProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const countRef = useRef(0)


  const [value, setValue] = useState('');

  const handleAdd = () => {
    props.onAdd(value);
    setValue('');
    inputRef.current?.focus();
  };

  return (
    <div>
      <input 
        value={value}
        ref={inputRef} 
        onChange={(event) => setValue(event.target.value)} 
      />

      {countRef.current}

      <button onClick={handleAdd}>
        Adicionar
      </button>
    </div>
  );
};
