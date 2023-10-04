import prisma from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length <= 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title } });

  redirect("/");
}

export async function deleteTodo(id: string) {
  "use server";

  await prisma.todo.delete({ where: { id: id } });

  revalidatePath("/");
}

export async function updateTodo(id: string, completed: boolean) {
  "use server";

  await prisma.todo.update({
    where: { id: id },
    data: { completed },
  });

  revalidatePath("/");
}
