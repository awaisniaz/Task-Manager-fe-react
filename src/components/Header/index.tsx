function Header() {
  return (
    <div className="w-full h-14 bg-orange-700 flex justify-between items-center p-3  ">
      <div className="flex justify-center items-center">
        <h3 className="text-xl text-neutral-200">Task Manager</h3>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-white  w-36 p-3 rounded flex justify-center items-center">
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
