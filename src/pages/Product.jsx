import React, { useState } from "react";



import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import Star from "../components/ui/Star";


const Product = () => {
  const [open, setOpened] = useState(false);

  const [openBrandItem, setopenBrandItem] = useState(false);

  const handleClicked = () => {
    setOpened(!open);
  };

  const handleClickedForBrandItem = () => {
    setopenBrandItem(!openBrandItem);
  };

  const [rating, setRating] = useState(0);

  return (
    <div>
      <header>
        {/* <!-- Top Nav Bar --> */}
        <div class="sm:flex sm:justify-between sm:items-center sm:px-2 text-white bg-black p-2">
          <nav>
            <ul class="sm:flex gap-4 bg-amber-400">
              <li class="">
                <a
                  href="tel:+123-456-7890"
                  class="flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="w-5 h-5 me-2 fill-white"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" />
                  </svg>
                  +123-456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:mail@ecom.com"
                  class="flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="w-5 h-5 me-2 fill-current"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                  mail@ecom.com
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul class="sm:flex sm:gap-2">
              <li class="">
                <a
                  href="./register.html"
                  class="flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 me-2 fill-current"
                    viewBox="0 0 640 512"
                  >
                    <path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm-58.5 32a173.4 173.4 0 0 0-58.7 10.1C46.4 314.8 0 374.2 0 444.8c0 30.4 25.6 55.2 57.1 55.2h301.8c-2.5-7.9-3.9-16.3-3.9-25 0-62.1 25.1-118.3 65.7-159.2a172.7 172.7 0 0 0-58.7-10.1zm468.6 19.8-45.3-45.3c-9.4-9.4-24.6-9.4-33.9 0L288 469.9V512h42.1l267.9-267.9c9.4-9.4 9.4-24.6 0-33.9zM633 268.9l-37.9-37.9c-9.4-9.4-24.6-9.4-33.9 0l-46.1 46.1 71.8 71.8 46.1-46.1c9.4-9.4 9.4-24.6 0-33.9z" />
                  </svg>
                  Register
                </a>
              </li>

              <li class="sm:before:content-['|'] sm:flex">
                <a href="./login.html" class="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="w-4 me-2 fill-white"
                  >
                    <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                  </svg>
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="md:flex  md:items-center md:justify-between px-2">
          <a href="./index.html" class=" block text-center">
            E-Commerce
          </a>

          <div class="md:w-1/3 md:items-center md:justify-between">
            <div class="relative">
              <form action="">
                <input
                  type="text"
                  placeholder="Search..."
                  value=""
                  aria-label="Search"
                  class="w-full px-2 py-2 rounded border-1 focus:outline-none focus:border-blue-400 "
                />
                <button class="absolute right-2 top-2 cursor-pointer">
                  <i class="fas fa-search"></i>
                </button>
              </form>

              <nav>
                <ul class="justify-around gap-2 hidden md:flex">
                  <li>
                  <Link to="/">Home</Link>
                  </li>

                  <li class="group relative">
                    <a
                      href="#"
                      class="flex items-center"
                      onClick={handleClicked}
                    >
                      Categories
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ml-1 h-4 w-4 fill-none stroke-current stroke-3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>
                    <ul class="absolute left-0  hidden group-hover:block bg-white border shadow-lg">
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                          Electronics
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                          Fashion
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                          Book
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="group relative">
                    <a href="#" class="flex items-center">
                      Brands
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ml-1 h-4 w-4 fill-none stroke-current stroke-3"
                        viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>
                    <ul class="absolute left-0  hidden group-hover:block bg-white border shadow-lg">
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                          Samsung
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                          Apple
                        </a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                          Microsoftuiohjkb
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="flex gap-3 justify-center">

            <a href="#" class="flex items-center gap-1 hover:fill-pink-400">
             {/* Heart SVG Icon (Wishlist)  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-5 h-5"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
              {/* Wishlist Count */}
              <span class="font-semibold">0</span>
            </a>
            <a href="cart.html" class="flex items-center gap-1">
            {/* Cart SVG Icon  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class=" w-5 h-5"
                viewBox="0 0 448 512"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
              </svg>
              {/* Cart Item Count  */}
              <span class="font-semibold">2</span>
            </a>


            {/* Total Price Display */}
            <a class="flex items-center gap-1">
             {/* Price Tag SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current w-5 h-5"
                viewBox="0 0 576 512"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M0 112.5L0 422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4l0-309.9c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64l-64 0 0-64zm64-208c0 35.3-28.7 64-64 64l0-64 64 0zM512 304l0 64-64 0c0-35.3 28.7-64 64-64zM448 96l64 0 0 64c-35.3 0-64-28.7-64-64z" />
              </svg>
              {/* Total Price Display  */}
              <span id="cart-total" class="font-semibold">
                $4,000
              </span>
            </a>
          </div>
        </div>

        {/* Sheet Here */}

        <Sheet class="md:hidden">
          <SheetTrigger>
            <a href="#" className="md:hidden block px-1">
              {/* Hamberg Menu icon that rigger oofcanvas*/}
              <svg
                class="w-6 h-6 stroke-current"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </a>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <nav>
                  <ul class="gap-2 md:hidden flex flex-col">
                    <li>
                      <a href="">Home</a>
                    </li>

                    <li class="group relative bg-pink-500 ">
                      <a
                        href="#"
                        class="flex items-center"
                        onClick={handleClicked}
                      >
                        Categories
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-1 h-4 w-4 fill-none stroke-current stroke-3"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </a>

                      {open && (
                        <ul class=" bg-white border shadow-lg">
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100"
                            >
                              Electronics
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100"
                            >
                              Fashion
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100"
                            >
                              Book
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li class="group relative">
                      <a
                        href="#"
                        class="flex items-center"
                        onClick={handleClickedForBrandItem}
                      >
                        Brands
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-1 h-4 w-4 fill-none stroke-current stroke-3"
                          viewBox="0 0 24 24"
                        >
                          <path stroke-linecap="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>

                      {openBrandItem && (
                        <ul class=" bg-white border shadow-lg">
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100"
                            >
                              Samsung
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100"
                            >
                              Apple
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100"
                            >
                              Microsoftuiohjkb
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </nav>
              </SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>

      <main class="px-4 py-8 bg-red-600">
  
        <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div class="flex flex-col lg:flex-row gap-8">
            
                <div class="lg:w-5/12">
                    <div class="mb-4 border-2 border-gray-200 rounded-xl overflow-hidden">
                        <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" id="main-image"></div>
                    </div>
                    <div class="grid grid-cols-4 gap-2">
                        <div class="cursor-pointer border-2 border-gray-200 rounded-lg overflow-hidden hover:border-alien-green transition" 
                             onclick="changeImage('https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')">
                            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-20"></div>
                        </div>
                        <div class="cursor-pointer border-2 border-gray-200 rounded-lg overflow-hidden hover:border-alien-green transition" 
                             onclick="changeImage('https://images.unsplash.com/photo-1593118247619-e2d6f056869e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')">
                            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-20"></div>
                        </div>
                        <div class="cursor-pointer border-2 border-gray-200 rounded-lg overflow-hidden hover:border-alien-green transition" 
                             onclick="changeImage('https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')">
                            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-20"></div>
                        </div>
                        <div class="cursor-pointer border-2 border-gray-200 rounded-lg overflow-hidden hover:border-alien-green transition" 
                             onclick="changeImage('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')">
                            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-20"></div>
                        </div>
                    </div>
                </div>
                
             
                <div class="lg:w-5/12">
                    <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Area 51M Gaming Laptop - Welcome to A New ERA
                    </h1>
                    <p class="text-gray-600 mb-4">
                        By <a href="#" class="text-blue-600 hover:underline">Dell</a>
                    </p>
                    <div class="h-px bg-gray-200 my-6"></div>
                    
                    <ul class="space-y-3 mb-6">
                        <li class="flex items-start">
                            <span class="text-alien-green mr-2 mt-1">✓</span>
                            <span>Processor 8th Generation Intel Core i9-8950HK (6-Core, 12MB Cache, Overclocking up to 5.0GHz)</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-alien-green mr-2 mt-1">✓</span>
                            <span>Memory 32GB DDR4-2666MHz, 2x16GB Ram Speed Gaming Performance</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-alien-green mr-2 mt-1">✓</span>
                            <span>Hard Drive 1TB SSD RAID 0 (2x 512GB PCIe NVME M.2 SSDs) + 1TB (+8GB SSHD) Hybrid Drive</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-alien-green mr-2 mt-1">✓</span>
                            <span>17.3" Full HD display 1920 x 1080 resolution boasts impressive color and clarity. IPS technology for wide viewing angles.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-alien-green mr-2 mt-1">✓</span>
                            <span>Video Card NVIDIA® GeForce® RTX 2080 with 8GB GDDR6</span>
                        </li>
                    </ul>
                </div>
                
          
                <div class="lg:w-2/12">
                    <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <div class="mb-4">
                            <p class="text-3xl font-bold text-gray-900">$2,500</p>
                            <p class="text-gray-500 line-through">$2,800</p>
                        </div>
                        
                        <div class="mb-6">
                            <label class="block text-gray-700 mb-2">Quantity</label>
                            <div class="flex border border-gray-300 rounded-lg overflow-hidden">
                                <button class="px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300" onclick="decrementQty()">-</button>
                                <input type="number" id="qty" min="1" value="1" class="w-full px-3 py-2 text-center border-0 focus:ring-0" />
                                <button class="px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300" onclick="incrementQty()">+</button>
                            </div>
                        </div>
                        
                        <div class="space-y-3">
                            <button class="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition flex items-center justify-center">
                                <i class="fas fa-cart-plus mr-2"></i> Add to cart
                            </button>
                            <button class="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-100 transition flex items-center justify-center">
                                <i class="fas fa-heart mr-2 text-red-500"></i> Add to wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       
        <div class="flex flex-col lg:flex-row gap-8 mb-8">
           
            <div class="lg:w-7/12 bg-white rounded-xl shadow-lg p-6">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-alien-green pb-2">Details</h2>
                
                <div class="space-y-6">
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">OPERATING SYSTEM</h3>
                        <p class="text-gray-700">
                            <span class="font-medium">Available with Windows 10 Home:</span>
                            Gaming is better than ever on Windows 10, with games in 4K, DirectX 12, and streaming your gameplay*.
                        </p>
                    </div>
                    
                    <div class="h-px bg-gray-200"></div>
                    
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">CONSIDER THE GAME CHANGED</h3>
                        <p class="text-gray-700">
                            The Alienware Area-51m is unlike any mobile gaming machine ever created. With unprecedented desktop-level processing power, CPU and GPU upgradability, advanced cooling and a premium, revolutionary design, a true desktop-gaming experience is now available in the form of a laptop.
                        </p>
                    </div>
                    
                    <div class="h-px bg-gray-200"></div>
                    
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">DESKTOP POWER PACKED INTO A LAPTOP</h3>
                        <p class="text-gray-700 mb-4">
                            The Area-51m features a host of firsts for peak performance and power. It’s our first-ever Alienware laptop to feature 8-core, 16-thread Intel® processors, giving it a whole new level of compute power versus other gaming laptops. Engineered with desktop processors, the CPU is enabled with up to 125% rated power, allowing high-end overclocking. This results in higher performance for megatasking, CPU-intensive gaming, as well as day-to-day applications.
                        </p>
                        <p class="text-gray-700 mb-4">
                            Lose yourself in vivid, uninterrupted gaming thanks to NVIDIA® GeForce RTX™ graphics with full-throttle power and up to 30W of overclocking headroom—all on an immersive 144Hz G-SYNC 17" Full HD display. Users can overclock their settings via the new Alienware Command Center.
                        </p>
                        <p class="text-gray-700">
                            The Area-51m is also our first-ever Alienware laptop to support up to 64GB of DDR4 memory, ensuring you have enough RAM for even the most performance-intensive tasks.
                        </p>
                    </div>
                    
                    <div class="h-px bg-gray-200"></div>
                    
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">UNPRECEDENTED UPGRADEABILITY</h3>
                        <p class="text-gray-700 mb-4">
                            Gamers have made it clear that they’ve noticed a lack of CPU and GPU upgradability in gaming laptops.
                        </p>
                        <p class="text-gray-700 mb-4">
                            The Area-51m was engineered with this in mind, finally allowing gamers to harness power comparable to even the highest-performance desktop, and taking advantage of latest technologies from NVIDIA® such as ray tracing, DLSS, and AI enhanced graphics.
                        </p>
                        <p class="text-gray-700">
                            CPU upgrades can be done using standard desktop-class processors, while GPU upgrades can be done via onboard graphics module replacement or with the Alienware Graphics Amplifier.
                        </p>
                    </div>
                </div>
            </div>
            
          
            <div class="lg:w-5/12">
             <div class="bg-white rounded-xl shadow-lg p-6 h-full">
                    <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-alien-green pb-2">Ratings & Reviews</h2>
                    
                    <div class="flex items-center mb-8">
                        <div class="text-center mr-6">
                            <div class="text-4xl font-bold text-gray-900">4.1</div>
                            <div class="text-gray-600">of 100 reviews</div>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center mb-2">
                                <span class="w-8 text-gray-600">5★</span>
                                <div class="w-full bg-gray-200 rounded-full h-2.5 mx-2">
                                    <div class="bg-gray-800 h-2.5 rounded-full" style={{width: "45%"}}></div>
                                </div>
                                <span class="w-8 text-gray-600">45%</span>
                            </div>
                            <div class="flex items-center mb-2">
                                <span class="w-8 text-gray-600">4★</span>
                                <div class="w-full bg-gray-200 rounded-full h-2.5 mx-2">
                                    <div class="bg-gray-800 h-2.5 rounded-full" style={{width: "30%"}}></div>
                                </div>
                                <span class="w-8 text-gray-600">30%</span>
                            </div>
                            <div class="flex items-center mb-2">
                                <span class="w-8 text-gray-600">3★</span>
                                <div class="w-full bg-gray-200 rounded-full h-2.5 mx-2">
                                    <div class="bg-gray-800 h-2.5 rounded-full" style={{width: "15%"}}></div>
                                </div>
                                <span class="w-8 text-gray-600">15%</span>
                            </div>
                            <div class="flex items-center mb-2">
                                <span class="w-8 text-gray-600">2★</span>
                                <div class="w-full bg-gray-200 rounded-full h-2.5 mx-2">
                                    <div class="bg-gray-800 h-2.5 rounded-full" style={{width: "7%"}}></div>
                                </div>
                                <span class="w-8 text-gray-600">7%</span>
                            </div>
                            <div class="flex items-center">
                                <span class="w-8 text-gray-600">1★</span>
                                <div class="w-full bg-gray-200 rounded-full h-2.5 mx-2">
                                    <div class="bg-gray-800 h-2.5 rounded-full" style={{width: "3%"}}></div>
                                </div>
                                <span class="w-8 text-gray-600">3%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="h-px bg-gray-200 my-6"></div>
                    
                    <div class="mb-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Add Review</h3>
                        <form>
                            <div class="mb-4">
                                <textarea class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-alien-green focus:border-transparent" placeholder="Give your review" rows="3"></textarea>
                            </div>
                            <div class="mb-4">
                                <div class="flex items-center">
                                    <span class="mr-2  text-gray-700">Rating:</span>
                                    <div class="flex space-x-1">
                                        {
                                          Array.from({ length: 5 }, (_, index) => ( 



                                            <Star key={index} index={index} rating={rating} setRating={setRating}/>



                                          ))

                                        }

                                 
                                    </div>
                                 
                                </div>
                                <h1>{rating}</h1>
                            </div>
                            <button class="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                                Add Review
                            </button>
                        </form>
                    </div>
                    
                    <div class="h-px bg-gray-200 my-6"></div>
                    
                    <div class="space-y-4">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <div class="flex justify-between mb-2">
                                <span class="font-semibold">Steve Rogers</span>
                                <div class="flex text-yellow-400">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                            <p class="text-gray-700 mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ullamcorper quam, non congue odio. Fusce ligula augue, faucibus sed neque non, auctor rhoncus enim. Sed nec molestie turpis.
                            </p>
                            <p class="text-gray-500 text-sm">
                                <i class="fas fa-clock mr-1"></i> 5 hours ago
                            </p>
                        </div>
                        
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <div class="flex justify-between mb-2">
                                <span class="font-semibold">Bucky Barns</span>
                                <div class="flex text-yellow-400">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                            <p class="text-gray-700 mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ullamcorper quam, non congue odio. Aenean faucibus posuere vehicula.
                            </p>
                            <p class="text-gray-500 text-sm">
                                <i class="fas fa-clock mr-1"></i> 5 hours ago
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">Similar Products</h2>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
                <div class="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
                    <div class="p-4">
                        <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4"></div>
                        <h3 class="font-semibold text-lg text-gray-900 mb-2">Sony Alpha DSLR Camera</h3>
                        <div class="mb-4">
                            <span class="text-gray-500 line-through">$500</span>
                            <span class="text-xl font-bold text-gray-900">$450</span>
                        </div>
                        <button class="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition flex items-center justify-center">
                            <i class="fas fa-cart-plus mr-2"></i> Add to cart
                        </button>
                    </div>
                </div>
                
         
                <div class="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
                    <div class="p-4">
                        <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4"></div>
                        <h3 class="font-semibold text-lg text-gray-900 mb-2">Optoma 4K HDR Projector</h3>
                        <div class="mb-4">
                            <span class="text-xl font-bold text-gray-900">$1,500</span>
                        </div>
                        <button class="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition flex items-center justify-center">
                            <i class="fas fa-cart-plus mr-2"></i> Add to cart
                        </button>
                    </div>
                </div>
                
             
                <div class="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
                    <div class="p-4">
                        <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4"></div>
                        <h3 class="font-semibold text-lg text-gray-900 mb-2">HP Envy Specter 360</h3>
                        <div class="mb-4">
                            <span class="text-gray-500 line-through">$2,800</span>
                            <span class="text-xl font-bold text-gray-900">$2,500</span>
                        </div>
                        <button class="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition flex items-center justify-center">
                            <i class="fas fa-cart-plus mr-2"></i> Add to cart
                        </button>
                    </div>
                </div>
                
          
                <div class="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
                    <div class="p-4">
                        <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4"></div>
                        <h3 class="font-semibold text-lg text-gray-900 mb-2">Dell Alienware Area 51</h3>
                        <div class="mb-4">
                            <span class="text-xl font-bold text-gray-900">$4,500</span>
                        </div>
                        <button class="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition flex items-center justify-center">
                            <i class="fas fa-cart-plus mr-2"></i> Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
     </main>

      <footer class="bg-gray-900 text-white pt-12 pb-6">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div class="text-center sm:text-left">
              <a
                href="index.html"
                class="text-2xl font-righteous text-gray-300 hover:text-white"
              >
                E-Commerce
              </a>
              <address class="mt-4 text-gray-400">
                221B Baker Street
                <br />
                London, England
              </address>
              <div class="mt-4 space-x-4">
                <a href="#" class="text-gray-400 hover:text-white">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  <i class="fab fa-pinterest-p"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div class="lg:col-span-2">
              <h4 class="text-lg font-semibold mb-4">Who are we?</h4>
              <p class="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                imperdiet vel ligula vel sodales. Aenean vel ullamcorper purus,
                ac pharetra arcu. Nam enim velit, ultricies eu orci nec, aliquam
                efficitur sem. Quisque in sapien a sem vestibulum volutpat at eu
                nibh.
              </p>
            </div>

            <div>
              <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold mb-4">Newsletter</h4>
              <form>
                <input
                  type="email"
                  class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded mb-4 text-white placeholder-gray-400 focus:outline-none focus:border-gray-600"
                  placeholder="Enter your email..."
                  required
                />
                <button class="w-full py-2 border border-white text-white hover:bg-white hover:text-gray-900 transition-colors rounded">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Product;
