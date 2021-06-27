import React, { useState } from 'react'
import Link from 'next/link'
import { SearchIcon, MenuAlt3Icon } from '@heroicons/react/solid'
import SlideBar from './Cart/SlideBar'

function Navbar() {
  const [openSlide, setSlide] = useState(false)
  const [numberOfProducts, _setNumberOfProducts] = useState(0)
  return (
    <>
      <nav className="w-full flex justify-between fixed top-0  p-6 border-b border-gray-200 shadow-md text-lg">
        {/* Search box */}
        <div className="hidden md:flex border border-gray-800 rounded-sm p-2 w-52 space-x-3">
          <SearchIcon className="w-6 h-6 text-gray-500" />
          <input
            id="search-input"
            type="search"
            className="w-full focus:outline-none"
            placeholder="Find your products..."
          />
        </div>

        {/* Navigation */}
        <div className="flex w-full justify-between sm:w-auto sm:justify-items-stretch space-x-4 lg:space-x-9">
          {/* Visible by default */}
          <section className="sm:hidden">
            <Link href="/">
              <a className=" pb-1 border-b-2 border-green-500">Home</a>
            </Link>
          </section>

          {/* Visible in sm */}
          <section>
            <div className="hidden sm:block relative top-2 space-x-9">
              <Link href="/">
                <a className="pb-1 border-b-2 border-green-500">Home</a>
              </Link>

              <Link href="/categories/men">
                <a className="pb-1 transition duration-300 hover:border-b-2 hover:border-green-500">
                  Men
                </a>
              </Link>

              <Link href="/categories/women">
                <a className="pb-1 transition duration-300 hover:border-b-2 hover:border-green-500">
                  Women
                </a>
              </Link>

              <Link href="/categories/kids">
                <a className="pb-1 transition duration-300 hover:border-b-2 hover:border-green-500">
                  Kids
                </a>
              </Link>

              <Link href="/signIn">
                <a className="bg-green-500 text-white p-2 rounded-lg">SignIn</a>
              </Link>
            </div>
          </section>
          <div className="flex space-x-3">
            {/* Cart */}
            <button className="relative" onClick={() => setSlide(true)}>
              <svg
                className="w-12 h-12"
                width="66"
                height="63"
                viewBox="0 0 66 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.9375 47.5938H46.125L57.0625 2.3125H63.625M54.875 10.9375H2.375L8.9375 38.9688H48.3125L54.875 10.9375Z"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3125 60.5312C10.8963 60.5312 8.9375 58.6005 8.9375 56.2188C8.9375 53.837 10.8963 51.9062 13.3125 51.9062C15.7287 51.9062 17.6875 53.837 17.6875 56.2188C17.6875 58.6005 15.7287 60.5312 13.3125 60.5312Z"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M41.75 60.5312C39.3338 60.5312 37.375 58.6005 37.375 56.2188C37.375 53.837 39.3338 51.9062 41.75 51.9062C44.1662 51.9062 46.125 53.837 46.125 56.2188C46.125 58.6005 44.1662 60.5312 41.75 60.5312Z"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {/* Label */}
              {numberOfProducts !== 0 && (
                <span className="flex justify-center items-center w-6 h-6 rounded-full bg-green-500 text-white absolute -top-2 -right-3">
                  {numberOfProducts}
                </span>
              )}
            </button>

            {/* Menu */}
            <section className="sm:hidden">
              <MenuAlt3Icon className="w-10 h-10" />
            </section>
          </div>
        </div>
      </nav>
      <SlideBar openSlide={openSlide} setSlide={setSlide} />
    </>
  )
}

export default Navbar
