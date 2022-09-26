import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { StarIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { getProducts } from "../actions/productActions";


const colors = [
  { name: "White", class: "bg-white", selectedClass: "ring-teal-400" },
  { name: "gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
  { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
];
const sizes = [
  { name: "XXS", inStock: true },
  { name: "XS", inStock: true },
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: true },
  { name: "XXL", inStock: true },
  { name: "XXXL", inStock: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductPage() {
  // var maxNumber = 45;
  // var randomNumber = Math.floor(Math.random() * maxNumber + 1);
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[2]);

  const dispatch = useDispatch();

    useEffect(() => {
      store.dispatch(getProducts());
    }, [dispatch]);

  const { loading, error, products } = useSelector((state) => state.products);

  return (
    <div className="h-full ml-2 ">
      <div className="mt-2  grid grid-cols-2 gap-y-10 gap-x-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7  xl:gap-x-4">
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => setOpen(true)}
            className="group relative mr-2  justify-center items-center cursor-pointer"
          >
            <div className="relative w-full  rounded-t-2xl object-center bg-white group-hover:opacity-75 ">
              <div className="bg-teal-100 z-10  absolute right-1 top-3 rounded-sm p-1 text-red-600">
                -36%
              </div>
              <Image
                src={product.images[0].uri}
                alt={product.imageAlt}
                objectPosition="center"
                height="150px"
                width="200px"
                className="object-contain object-center rounded-t-lg mx-auto"
                layout="responsive"
              />
              <div className="flex justify-between py-1 px-2  ">
                <div className="max-h-12 truncate  text-clip">
                  <h3 className="text-sm text-teal-700">
                    <a href={product.href}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 font-bold text-lg"
                      />
                      {product.name}
                    </a>
                  </h3>
                  <div className="h-12 flex truncate">
                    <p className="mt-1 text-sm text-teal-500">
                      {product.color}
                    </p>
                    <p className="text-sm font-medium text-teal-900">
                      Ksh. {product.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full rounded-b-2xl py-1  cursor-pointer text-white text-center bg-teal-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
