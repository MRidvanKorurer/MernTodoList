import React, { useContext } from "react";
import { MdEventNote } from "react-icons/md";
import noteContext from "../../context/noteContext";

const Header = () => {
  const { data } = useContext(noteContext);
  return (
    <div className=" flex justify-around items-center p-5 border-b bg-gray-200">
      <h1 className=" text-2xl font-bold">MERN TODOLİST APPLİCATİON</h1>
      <div className=" relative">
        <MdEventNote className=" text-3xl cursor-pointer" />
        <span className=" absolute flex justify-center items-center w-5 rounded-full bg-red-600 text-white text-sm -top-4 -right-3">
          {data.length}
        </span>
      </div>
    </div>
  );
};

export default Header;
