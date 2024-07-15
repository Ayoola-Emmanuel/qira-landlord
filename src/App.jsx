import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bookings from "./pages/Bookings";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import MyProperties from "./pages/MyProperties";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Verification from "./pages/Register/Verification";
import OnBoarding from "./pages/OnBoarding";
import AddProperty from "./pages/MyProperties/components/AddProperty";
import EditProperty from "./pages/MyProperties/components/EditProperty";
import PasswordSettings from "./pages/Settings/components/PasswordSettings";
import EditPersonalInfo from "./pages/Settings/components/EditPersonalInfo";
import ScrollToTop from "./components/ScrollToTop";
import ForgotPassword from "./pages/Login/ForgotPassword";
import SetPassword from "./pages/Login/SetPassword";
import BankInformation from "./pages/Settings/components/BankInformation";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/my-properties" element={<MyProperties />} />
        <Route path="/my-properties/add-property" element={<AddProperty />} />
        <Route path="/my-properties/edit-property" element={<EditProperty />} />
        <Route path="/settings/personal-information" element={<Settings />} />
        <Route
          path="/settings/personal-information/edit"
          element={<EditPersonalInfo />}
        />
        <Route
          path="/settings/password-details"
          element={<PasswordSettings />}
        />
        <Route path="/settings/bank-information" element={<BankInformation />} />
        {/* <Route
          path="/settings/inspection-fees/edit"
          element={<EditInspectionFees />}
        /> */}
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
