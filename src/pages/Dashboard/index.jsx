import React from "react";
import CardOverview from "./components/CardOverview";
import PropertyView from "./components/PropertyView";
import DashboardLayout from "../../components/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout header="Dashboard">
      <CardOverview />
      <PropertyView />
    </DashboardLayout>
  );
};

export default Dashboard;
