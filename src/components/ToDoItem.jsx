import { MdEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ToDoItem = () => {
  return (
    <div>
      <div>
        <input type="checkbox" />
      </div>
      <div>
        <h3>Code</h3>
      </div>
      <div>
        <MdEditNote />
        <MdDelete />
      </div>
    </div>
  );
};

export default ToDoItem;
