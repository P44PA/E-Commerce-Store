import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem } from "../redux/cartSlice";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartProducts, dispatch]);

  const removeItemFromCart = (itemId, itemSize) => {
    dispatch(removeItem({ id: itemId, size: itemSize }));
  };

  return (
    <div>
      {isSidebarOpen && (
        <div className="w-1/4 fixed top-0 right-0 bg-white shadow-lg h-screen z-50 transition-all duration-300 overflow-y-auto">
          <div className="border-b mb-4">
            <h1 className="text-3xl p-4">Your Cart</h1>
          </div>
          <div className="p-4">
            <span className="absolute right-0 top-0 p-4" onClick={closeSidebar}>
              <FaTimes />
            </span>

            {cartProducts.length === 0 ? (
              <>

              <div className="text-center text-4xl  m-10">
                <p>Your cart has no products.</p>
              </div>
        
                  <div className="flex justify-center items-center m-10">
                  <img
                    src="../images\NothinHere.png"
                    className="flex justify-center items-center m-10"
                    width={400}
                    height={400}
                    alt="nothing"
                  ></img>
                </div>
                
                </>
            ) : (
              <>
                {cartProducts.map((item, key) => (
                  <div key={key}>
                    <div className="flex justify-between mb-4">
                      <div className="flex">
                        <div className="relative">
                          <img
                            src={item.img}
                            alt="product"
                            height={84}
                            width={68}
                          />
                          <span
                            className="absolute top-0 -mt-2 -ml-2 bg-red-600 text-white cursor-pointer"
                            onClick={() => removeItemFromCart(item.id, item.size)}
                          >
                            <FaTimes />
                          </span>
                        </div>
                        <div>
                          <p>{item.title}</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p>{item.price}</p>
                        </div>
                        <div>
                          <p>Qty: {item.quantity}</p>
                        </div>
                        <div>
                          <p>Size: {item.size}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-red-700 p-6 w-full text-white">
                  <h2>
                    Sub Total: $<span>{totalAmount}</span>
                  </h2>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
