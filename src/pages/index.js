import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../actions/productActions";
import Header from "../components/layouts/Header";
import store from "../../store";
import Sidebar from "../components/layouts/Sidebar"
import ProductPage from "../components/ProductPage"
import Head from "next/head";
import Page from "../components/new";




export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    store.dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
    <div className=" w-full h-full bg-gradient-to-t from-teal-50 to-teal-900">
      <Head>
        <title>Point Of Sale</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex">
        <Sidebar/>
        <ProductPage />
      </div>
    </div>
    </>
  );
}
