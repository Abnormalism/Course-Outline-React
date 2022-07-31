import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <main>
      <Navbar />
      <div className="min-h-[calc(100vh-3.5rem)] translate-y-[3.5rem] bg-sky-900 p-4">
        <Outlet />
      </div>
    </main>
  );
};

export default Wrapper;
