import React from "react";
import Card from "../../../components/Card";

const CustomerMobile = ({ data }) => {
  return (
    <Card>
      <div className="flex flex-col gap-2.5 flex-wrap items-start">
        <div className="flex gap-2">
          <h4 className="font-medium">ID:</h4>
          <h6>{data.id}</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Customer Name:</h4>
          <h6>{data.name}</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Email Address:</h4>
          <h6>{data.email}</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Phone:</h4>
          <h6>{data.phone}</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Booking Count:</h4>
          <h6>{data.count}</h6>
        </div>
      </div>
    </Card>
  );
};

export default CustomerMobile;
