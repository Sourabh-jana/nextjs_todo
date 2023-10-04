import { deleteTodo, updateTodo } from "@/api";
import AddTodo from "@/components/AddTodo";
import TodoItem from "@/components/TodoItem";
import prisma from "@/db";
import Link from "next/link";
import React from "react";

const page = async () => {
  const todos = await prisma.todo.findMany();
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl">Todos</h1>
        <Link
          href={`/new`}
          className="border rounded-lg px-3 py-1 hover:bg-slate-700"
        >
          New
        </Link>
      </div>
      <AddTodo />
      <div>
        {todos.length === 0 && <p className="text-gray-500">add task in your bucket...</p>}
        <ul className="ml-4">
          {todos &&
            todos.map((todo: any) => (
              <TodoItem
                key={todo.id}
                {...todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
