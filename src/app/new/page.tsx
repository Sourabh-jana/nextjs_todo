import { addTodo } from "@/api";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl">New</h1>
        <Link
          href={`..`}
          className="border rounded-lg px-3 py-1 hover:bg-slate-700"
        >
          Todos
        </Link>
      </div>
      <form action={addTodo}>
        <input type="text" name="title" className="bg-slate-700 border rounded-md w-full outline-none px-3 py-1 my-2"/>
        <div className="mt-2 flex justify-end items-center gap-2">
          <Link href={`..`} className="btn">
            Cancel
          </Link>
          <button type="submit" className="btn outline-none">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
