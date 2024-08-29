const Header = () => {
  return (
    <div className="mt-20 p-4">
      <form className="flex flex-col md:flex-row gap-3 w-full">
        <div className="flex flex-col md:flex-row gap-2 w-full items-center">
          <label className="text-zinc-300 text-xl font-semibold">Task</label>
          <input
            type="text"
            className="p-1 md:p-2 rounded-md outline-none md:w-[70%] w-full"
          />
          <button className="bg-green-700 px-2 py-1 md:p-2 rounded-md text-zinc-200 hover:text-zinc-300 hover:bg-green-800 transition-all duration-300 ease-linear md:w-[30%] lg:w-[20%] w-full">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
