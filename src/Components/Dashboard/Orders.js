import React from 'react';

const Orders = () => {
  return (
    <div>
    <div className="border border-gray-300 lg:w-[800px] md:w-[540px] sm:w-[500px] w-[380px] h-[150px] rounded-lg mt-2 ml-3 md:mr-10 sm:mr-3 mr-2">
    <p className="p-5 pr-44 font-semibold flex text-xl">Orders (MTD) </p>
                <div className=" w-[800px] h-[80px] rounded-lg  mr-10 ">
                    <div className="flex  text-sm ">
                        <p className="pl-48">Success Order</p>
                        <p className="pl-44">Failed Orders</p>
                    </div>
                    <div className="flex pt-3 text-xl font-semibold">
                        <p className="pl-56">0</p>
                        <p className="pl-72">0</p>
                    </div>
                </div>
    </div>

    <div className="border border-gray-300 lg:w-[800px] md:w-[540px] sm:w-[500px] w-[380px] h-[230px] rounded-lg mt-10 ml-3 md:mr-10 sm:mr-3 mr-2 p-24">No Data Avaliable</div>
</div>
  );
};

export default Orders;
