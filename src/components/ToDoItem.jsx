import { MdEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ToDoItem = () => {
  return (
    <div className="flex items-center justify-between py-2 px-5 bg-zinc-950 mb-5 rounded-lg">
      <div className="hidden md:block">
        <input type="checkbox" />
      </div>
      <div>
        <h3 className="text-white text-lg">Code</h3>
      </div>
      <div className="flex gap-5">
        <MdEditNote className="text-blue-500 text-xl cursor-pointer hover:scale-125 transition-all duration-300 ease-linear" />
        <MdDelete className="text-red-500 text-xl cursor-pointer hover:scale-125 transition-all duration-300 ease-linear" />
      </div>
    </div>
  );
};

export default ToDoItem;
