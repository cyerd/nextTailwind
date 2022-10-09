import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { loadUser } from "../actions/userActions";
import Header from "../components/layouts/Header";

function me() {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Header />

      <section className="flex w-full">
        <div className="mx-5 border p-4 rounded-lg bg-gray-50">
          <img
            src={
              user
                ? user.avatar?.url
                : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            }
            alt="avatar"
            className="rounded-full"
            style={{ width: "150px" }}
          />
          <p className="font-bold mb-1 capitalize">{user?.name}</p>
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
                  placeholder={user?.name}
                  value={user?.name}
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="border-0 bg-transparent text-center tracking-tighter"
                  placeholder={user?.email}
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
