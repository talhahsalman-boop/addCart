import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {
    let cart = useSelector((state)=>state.cart.cart);
// console.log(cart);

  return (
    <>
      <nav className="bg-gray-100 fixed w-full z-20 top-0 start-0 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a
      href="https://flowbite.com/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-7"
        alt="Flowbite Logo"
      />
      <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
        Flowbite
      </span>
    </a>
  
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-cta"
    >
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
        <li>
          <Link to={"/"}
   
            className="block py-2 px-3  bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
            aria-current="page"
          >
            Home
        </Link>
        </li>
  
        <li>
          <Link to={"/cart"}
           
            className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
          >
            Cart ({cart.length})
          </Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
