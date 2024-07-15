import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import CustomerMobile from "./components/CustomerMobile";

const customerData = [
  {
    id: "#40499",
    name: "Allen Araba",
    email: "allenfrancis@gmail.com",
    phone: "09012059519",
    count: 4,
  },
  {
    id: "#40499",
    name: "Allen Araba",
    email: "allenfrancis@gmail.com",
    phone: "09012059519",
    count: 20,
  },
  {
    id: "#40499",
    name: "Allen Araba",
    email: "allenfrancis@gmail.com",
    phone: "09012059519",
    count: 20,
  },
  {
    id: "#40499",
    name: "Allen Araba",
    email: "allenfrancis@gmail.com",
    phone: "09012059519",
    count: 20,
  },
  {
    id: "#40499",
    name: "Allen Araba",
    email: "allenfrancis@gmail.com",
    phone: "09012059519",
    count: 20,
  },
  {
    id: "#40499",
    name: "Allen Araba",
    email: "allenfrancis@gmail.com",
    phone: "09012059519",
    count: 20,
  },
  {
    id: "#40499",
    name: "Allen Araba",
    email: "allenfrancis@gmail.com",
    phone: "09012059519",
    count: 20,
  },
  {
    id: "#40499",
    name: "Allen Araba",
    email: "allenfrancis@gmail.com",
    phone: "09012059519",
    count: 20,
  },
  {
    id: "#40499",
    name: "Allen Araba",
    email: "allenfrancis@gmail.com",
    phone: "09012059519",
    count: 20,
  },
  {
    id: "#40499",
    name: "Allen Araba",
    email: "allenfrancis@gmail.com",
    phone: "09012059519",
    count: 20,
  },
];

const Customers = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <DashboardLayout header="Customers">
      <div className="w-full md:bg-white md:card-shadow rounded-md">
        <Table
          title="Customers"
          headers={[
            "ID",
            "Customer Name",
            "Email Address",
            "Phone",
            "Booking Count",
          ]}
          data={customerData}
          mobileView={<CustomerMobile data={customerData} />}
          loading={isLoading}
        />
        {!isLoading && <Pagination />}
      </div>
    </DashboardLayout>
  );
};

export default Customers;
