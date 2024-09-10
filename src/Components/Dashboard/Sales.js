import React from 'react';

const Sales = () => {
    return (
        <div>
            <div className="border border-gray-300 w-[800px] h-[150px] rounded-lg mt-2 ml-3 mr-10">
                <p className="p-5 pr-44 font-semibold flex text-xl">Sales (12 Months) </p>
                <div className=" w-[800px] h-[80px] rounded-lg  mr-10 ">
                    <div className="flex  text-sm ">
                        <p className="pl-28">Total Sales</p>
                        <p className="pl-44">Products</p>
                        <p className="pl-44">Learners</p>
                    </div>
                    <div className="flex pt-3 text-xl font-semibold">
                        <p className="pl-32">₹ 0</p>
                        <p className="pl-52">N/A</p>
                        <p className="pl-52">N/A</p>
                    </div>
                </div>

            </div>
        
        </div>
    );
};

export default Sales;
