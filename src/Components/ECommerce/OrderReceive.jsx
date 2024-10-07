import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayoutBasic from "../DashboardLayoutBasic";

const OrderReceive = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all orders when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders"); 
        if (response.data.success) {
          setOrders(response.data.orders);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <DashboardLayoutBasic>
        <p className="text-center">Loading orders...</p>
      </DashboardLayoutBasic>
    );
  }

  return (
    <DashboardLayoutBasic>
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Orders Received</h2>
      <div className="w-full flex flex-col items-center space-y-6 px-4"> {/* Full-width container with padding */}
        {orders.length === 0 ? (
          <p className="text-center text-gray-600">No orders found.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="w-full max-w-4xl bg-white border border-gray-200 rounded-lg shadow-md p-6 mt-10" // Adjust max-width for cards
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Order ID: {order._id}</h3>
              <p className="text-gray-700"><strong>Total Amount:</strong> ₹{order.totalAmount}</p>
              <p className="text-gray-700"><strong>Status:</strong> <span className={`font-bold ${order.status === 'Delivered' ? 'text-green-600' : 'text-red-600'}`}>{order.status}</span></p>
              <p className="text-gray-700"><strong>Billing ID:</strong> {order.billingDetailId}</p>
              <p className="text-gray-700"><strong>Razorpay Order ID:</strong> {order.razorpay_order_id}</p>
              <p className="text-gray-700"><strong>Razorpay Payment ID:</strong> {order.razorpay_payment_id}</p>
              
              <div className="mt-4">
                <h4 className="text-lg font-bold text-gray-800">Items Ordered</h4>
                <ul className="mt-2 space-y-2">
                  {order.items && order.items.length > 0 ? (
                    order.items.map((item, index) => (
                      <li key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
                        <div >
                          <p className="font-semibold text-gray-800">{item.bookId?.title || "Title Not Available"}</p>
                          <p className="text-gray-600">Qty: {item.quantity}</p>
                          <p className="text-gray-600">Sell Price: ₹{item.bookId?.sellPrice || "N/A"}</p>
                        </div>
                        <p className="text-gray-700 font-bold">₹{item.bookId?.sellPrice * item.quantity || "N/A"}</p>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-600">No items found for this order.</li>
                  )}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </DashboardLayoutBasic>
  );
};

export default OrderReceive;
