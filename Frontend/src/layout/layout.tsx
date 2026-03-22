import { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import { RxHamburgerMenu } from "react-icons/rx";

const Layout = ({ children }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div
          className={`${open ? "col-sm-1" : "col-sm-2"} bg-dark text-white min-vh-100`}
        >
          {/*  Uncomment when Sidebar ready */}
          {/* <Sidebar open={open} /> */}
          <h5 className="p-3">Sidebar</h5>
        </div>

        {/* Main Content */}
        <div className={`${open ? "col-sm-11" : "col-sm-10"}`}>
          {/* Header */}
          <div className="row">
            <div className="col-sm-12 py-3 d-flex align-items-center">
              {/*  Toggle Button */}
              <button
                className="btn btn-outline-dark"
                onClick={() => setOpen(!open)}
              >
                ☰
              </button>

              <h4 className="ms-3">Dashboard</h4>
            </div>
          </div>

          {/* Page Content */}
          <div className="p-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
