"use client";

import { updateTodo } from "@/api";

type TodoItemProp = {
  id: string;
  title: string;
  completed: boolean;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, completed: boolean) => void;
};

const TodoItem = ({
  title,
  id,
  completed,
  deleteTodo,
  updateTodo,
}: TodoItemProp) => {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        defaultChecked={completed}
        onChange={(e) => updateTodo(id, e.target.checked)}
        className="cursor-pointer peer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 rounded-lg"
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-600"
      >
        {title}
      </label>
      <div className="cursor-pointer" onClick={() => deleteTodo(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="22"
          viewBox="0 -960 960 960"
          width="24"
          fill="rgb(180 68 68)"
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
      </div>
    </li>
  );
};

export default TodoItem;
