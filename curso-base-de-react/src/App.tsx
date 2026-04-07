import { useEffect, useState } from 'react';
import { InputAdd } from './components/InputAdd';
import { TodoItem } from './components/TodoItem';
import { List } from './components/List';
import { todoAPI } from './shared/services/api/TodoAPI';

todoAPI.getAll().then(data => console.log('APP', data));

export function App() {
  const [list, setList] = useState([
    
  ]);

  useEffect(() => {
     fetch('/api/todos')
    .then(response => response.json())
    .then(response => {
     setList(response)
    })
  }, [])

  const handleAdd = (value: string) => {
    setList([
      ...list,
      { id: (list.length + 1).toString(), complete: false, label: value },
    ]);
  };

  const handleRemove = (id: string) => {
    setList([...list.filter((item) => item.id !== id)]);
  };

  const handleComplete = (id: string) => {
    setList([
      ...list.map((item) => ({
        ...item,
        complete: item.id === id ? true : item.complete,
      })),
    ]);
  };

  return (
    <div>
      <InputAdd onAdd={handleAdd} />

      <List>
        {list.map((listItem) => (
          <TodoItem
            key={listItem.id}
            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}
            onComplete={() => handleComplete(listItem.id)}
            onRemove={() => handleRemove(listItem.id)}
          />
        ))}
      </List>
    </div>
  );
}
