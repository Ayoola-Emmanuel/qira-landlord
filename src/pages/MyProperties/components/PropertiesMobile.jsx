import React from "react";
import Card from "../../../components/Card";

const PropertiesMobile = ({ data }) => {
  return (
    <Card>
      <div className="flex flex-col gap-2.5 flex-wrap items-start">
        <div className="flex gap-2">
          <h4 className="font-medium">Title:</h4>
          <h6>{data.title}</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Address:</h4>
          <h6>{data.address}</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Amount:</h4>
          <h6>{data.amount} / month</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Date:</h4>
          <h6>{data.date}</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">View:</h4>
          <h6>{data.view}</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Status:</h4>
          <h6>Active</h6>
        </div>
        <div className="flex gap-2">
          <h4 className="font-medium">Actions:</h4>
          <h6>{data.count}</h6>
        </div>
      </div>
    </Card>
  );
};

export default PropertiesMobile;
