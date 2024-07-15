import React from "react";
import Card from "../../../components/Card";

const BookingMobile = ({ data }) => {
  return (
    <Card>
      <div className="flex flex-col gap-2 flex-wrap items-start">
        <div className="flex gap-2">
          <h4 className="font-medium">Payment Date:</h4>
          <h6>{data.paymentDate}</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Amount:</h4>
          <h6>{data.amount}</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Commission:</h4>
          <h6>{data.commission}</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Amount Paid:</h4>
          <h6>{data.amountPaid}</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Customer:</h4>
          <h6>{data.customer}</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Apartment:</h4>
          <h6>{data.apartment}</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Status:</h4>
          <button
            className={`${
              data.status === "pending" ? "bg-[#FFEAD4]" : "bg-[#ECFDF3]"
            } px-3.5 py-0.5 rounded-full flex gap-2 items-center`}
          >
            <span
              className={`${
                data.status === "pending" ? "bg-[#FF7F51]" : "bg-[#12B76A]"
              } inline-block w-3 h-3 rounded-full`}
            ></span>
            <span
              className={`${
                data.status === "pending" ? "text-[#FF7F51]" : "text-[#12B76A]"
              } capitalize`}
            >
              {data.status}
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default BookingMobile;
