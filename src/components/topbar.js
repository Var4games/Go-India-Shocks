import React from "react";
import "./img.css";

function topbar() {
  return (
    <div className="">
      <div className=" bg-black text-white ">
        <h1>Hi HKJs sakjh adj</h1>
      </div>

      <h1 className=" bg-midnight flex bg-gray-100 p-2 text-red-400 ">
        FEATURED COMPANY
      </h1>
      <div className="flex items-center justify-between bg-green-100 w-full h-20 p-1 ">
      <img className="h-20"  src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/caprinew1.jpg" />
          <img src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/ganeshhousing.jpg" />
          <img src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/fino.png" />
          <img src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/gravita.jpg" />
          <img src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/godawari.jpg" />
          <img className="h-20"  src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/dtpatten1.png" />
          <img  src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/deepind.png" />
       
      </div>
    </div>
  );
}

export default topbar;
