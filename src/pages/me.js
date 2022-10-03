import Image from "next/image";
import React from "react";
import Header from "../components/layouts/Header";

function me() {
  return (
    <>
      <Header />

      <section className="flex w-full">
        <div className="mx-5 border p-4 rounded-lg bg-gray-50">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            className="rounded-full"
            style={{ width: "150px" }}
            fluid
          />
          <p className="font-bold mb-1">HUDHEYFA CYERD</p>
          <p className="text-muted mb-1">Full Stack Developer</p>
          <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
          <div className="flex justify-around mb-2 ">
            <button className="bg-blue-600 px-2 py-1 rounded-md text-white">
              Follow
            </button>
            <button className="border border-blue-600 px-2 py-1 rounded-md text-blue-600">
              Message
            </button>
          </div>
        </div>
        <div className="mx-5 border p-4 rounded-lg bg-gray-50 w-full">
          <div className="flex mx-5 px-5 w-full">
            <form className="flex flex-col items-start justify-between">
            <div action="">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                className="border-0 bg-transparent text-center "
                placeholder="John Smith"
              />
              </div>
              <div>
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="border-0 bg-transparent text-center "
                placeholder="JohnSmith@gmail.com"
              />
            </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default me;
