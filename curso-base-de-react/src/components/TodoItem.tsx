interface ITodoItemProps {
    id: string;
    label: string;
    complete: boolean;

    onComplete(): void;
    onRemove(): void;
}

export const TodoItem = ({label, complete,onComplete, onRemove }: ITodoItemProps) => {
    return (
        <li>
            {label}

            {complete ? 'Concludo' : ''}

            <button
              onClick={() => onComplete()}
            >
              Concluir
            </button>

            <button
              onClick={() => onRemove()}
            >
              Remover
            </button>
        </li>
    )
}