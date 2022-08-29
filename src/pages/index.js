import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "../actions/userActions";
import LandingPage from "../components/Home";
import Header from "../components/layouts/Header";
import store from "../../store";


export default function Home() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);


    return (
      <>
        <Header />

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl tracking-tight font-bold text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </>
    );
  }

