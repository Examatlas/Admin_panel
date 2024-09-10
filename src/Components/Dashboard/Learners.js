import React from 'react';

const Learners = () => {
  return (
    <div>
    <div className="border border-gray-300 w-[800px] h-[150px] rounded-lg mt-2 ml-3 mr-10">
    <p className="p-5 pr-44 font-semibold flex text-xl">Learners (12 Months) </p>
                <div className=" w-[800px] h-[80px] rounded-lg  mr-10 ">
                    <div className="flex  text-sm ">
                        <p className="pl-48">Total Signups</p>
                        <p className="pl-44">Avg. Signups / Month</p>
                    </div>
                    <div className="flex pt-3 text-xl font-semibold">
                        <p className="pl-56">1</p>
                        <p className="pl-72">0</p>
                    </div>
                </div>
    </div>
</div>
  );
};

export default Learners