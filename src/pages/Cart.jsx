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

const Cart = () => {


  return (
    <div>



      {/* Cart Section */}
      <div className="px-2 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden ">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Your Shopping Cart
            </h1>
            <p className="text-gray-600 mb-6">
              Review your items before checkout
            </p>

            <div className="overflow-x-auto">
              <table className="cart-table w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Product
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Price
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Qty
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Amount
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="transition-colors duration-150">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                          className="w-16 h-16 object-contain rounded-lg border mr-4"
                        />
                     
                          <span className="font-medium text-gray-800 w-max">
                           Samsung M33 5G
                          </span>
               
                      </div>
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-800">
                      $1,500
                    </td>
                    <td className="py-4 px-4">
                      <input
                        type="number"
                        min="1"
                        value="1"
                        className="w-20 border border-gray-300 rounded-lg py-2 px-3 text-center focus:ring-primary focus:border-primary"
                      />
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-800">
                      $1,500
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-danger hover:text-red-700 transition-colors">
                        <i className="fas fa-times text-xl"></i>
                      </button>
                    </td>
                  </tr>
                  <tr className="transition-colors duration-150" >
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                          className="w-16 h-16 object-contain rounded-lg border mr-4"
                        />
                        <span className="font-medium text-gray-800 bg-blue-500 w-max">                        
                          HP Envy Specter 
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-800">
                      $2,500
                    </td>
                    <td className="py-4 px-4">
                      <input
                        type="number"
                        min="1"
                        value="1"
                        className="w-20 border border-gray-300 rounded-lg py-2 px-3 text-center focus:ring-primary focus:border-primary"
                      />
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-800">
                      $2,500
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-danger hover:text-red-700 transition-colors">
                        <i className="fas fa-times text-xl"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <th
                      colspan="3"
                      className="text-right py-4 px-4 font-semibold text-gray-700"
                    >
                      Total
                    </th>
                    <th className="py-4 px-4 font-semibold text-gray-800">
                      $4,000
                    </th>
                    <th className="py-4 px-4"></th>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mt-6 flex">
              <button className="px-5 py-2.5 border hover:bg-red-600   rounded-lg  font-medium">
                <i className="fas fa-sync-alt mr-2"></i> Update Cart
              </button>
              <button className="px-5 py-2.5   hover:bg-red-500  rounded-lg  flex items-center">
                <i className="fas fa-shopping-cart mr-2"></i> Proceed to
                Checkout
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <i className="fas fa-shipping-fast text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Free Shipping</h3>
                <p className="text-gray-600 text-sm">On orders over $100</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <i className="fas fa-undo text-success text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Easy Returns</h3>
                <p className="text-gray-600 text-sm">
                  30-day satisfaction guarantee
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <i className="fas fa-shield-alt text-purple-600 text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  Secure Checkout
                </h3>
                <p className="text-gray-600 text-sm">SSL encrypted payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>




  
    </div>
  );
};

export default Cart;
