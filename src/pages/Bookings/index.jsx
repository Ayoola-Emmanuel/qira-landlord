import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import DashboardLayout from "../../components/DashboardLayout";
import Table from "../../components/Table";
import BookingMobile from "./components/BookingMobile";

const bookingsInfo = [
  {
    paymentDate: "07/03/2024",
    amount: "N12,000",
    commission: "N850",
    amountPaid: "N11,150",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "pending",
  },
  {
    paymentDate: "07/03/2024",
    amount: "N12,000",
    commission: "N850",
    amountPaid: "N11,150",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "pending",
  },
  {
    paymentDate: "07/03/2024",
    amount: "N12,000",
    commission: "N850",
    amountPaid: "N11,150",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "paid",
  },
  {
    paymentDate: "07/03/2024",
    amount: "N12,000",
    commission: "N850",
    amountPaid: "N11,150",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "paid",
  },
  {
    paymentDate: "07/03/2024",
    amount: "N12,000",
    commission: "N850",
    amountPaid: "N11,150",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "paid",
  },
  {
    paymentDate: "07/03/2024",
    amount: "N12,000",
    commission: "N850",
    amountPaid: "N11,150",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "pending",
  },
  {
    paymentDate: "07/03/2024",
    amount: "N12,000",
    commission: "N850",
    amountPaid: "N11,150",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "pending",
  },
  {
    paymentDate: "07/03/2024",
    amount: "N12,000",
    commission: "N850",
    amountPaid: "N11,150",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "paid",
  },
  {
    paymentDate: "07/03/2024",
    amount: "N12,000",
    commission: "N850",
    amountPaid: "N11,150",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "paid",
  },
  {
    paymentDate: "07/03/2024",
    amount: "N12,000",
    commission: "N850",
    amountPaid: "N11,150",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "paid",
  },
];

const Bookings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalItems = bookingsInfo.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentData = bookingsInfo.slice(startIndex, endIndex);
  return (
    <DashboardLayout header="Bookings">
      <div className="md:bg-white md:card-shadow w-full rounded-md">
        <Table
          title="Bookings"
          headers={[
            "Payment Date",
            "Amount",
            "Commission",
            "Amount Paid",
            "Customer",
            "Apartment",
            "Status",
          ]}
          data={currentData}
          itemsCountPerPage={totalPages}
          onPageChange={(e) => handlePageChange(e)}
          mobileView={<BookingMobile data={currentData} />}
          loading={isLoading}
        />
        <Pagination />
      </div>
    </DashboardLayout>
  );
};

export default Bookings;
