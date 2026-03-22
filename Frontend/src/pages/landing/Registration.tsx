import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";
import { userRegisterService } from "../../services/Services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Minimum 3 characters"),

  email: yup.string().required("Email is required").email("Invalid email"),

  mobile: yup
    .string()
    .required("Mobile is required")
    .matches(/^[0-9]{10}$/, "Must be 10 digits"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = async (data: any) => {
    try {
      const res = await userRegisterService(data);

      console.log("API RESPONSE ", res);

      if (res?.success) {
        toast.success("Registration successful ");
        reset();
      } else {
        toast.error("Registration failed ");
      }
    } catch (error) {
      toast.error("Something went wrong ");
    }
  };

  return (
    <>
      <Navbar />

      <ToastContainer position="top-center" autoClose={3000} theme="colored" />

      <div
        className="container-fluid vh-100 d-flex align-items-center justify-content-center"
        style={{ background: "linear-gradient(90deg, #7f53ac, #ffb88c)" }}
      >
        <div className="row w-75 bg-white rounded shadow overflow-hidden">
          <div className="col-md-6 p-5">
            <h3 className="mb-3">Create Account</h3>
            <p className="text-muted">Register to continue</p>

            <form onSubmit={handleSubmit(handleRegister)}>
              {/* Name */}
              <div className="mb-3">
                <label>Name</label>
                <input
                  className="form-control"
                  placeholder="Enter name"
                  {...register("name")}
                />
                <small className="text-danger">{errors.name?.message}</small>
              </div>

              {/* Email */}
              <div className="mb-3">
                <label>Email</label>
                <input
                  className="form-control"
                  placeholder="Enter email"
                  {...register("email")}
                />
                <small className="text-danger">{errors.email?.message}</small>
              </div>

              {/* Mobile */}
              <div className="mb-3">
                <label>Mobile</label>
                <input
                  className="form-control"
                  placeholder="Enter mobile"
                  {...register("mobile")}
                />
                <small className="text-danger">{errors.mobile?.message}</small>
              </div>

              {/* Password */}
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  {...register("password")}
                />
                <small className="text-danger">
                  {errors.password?.message}
                </small>
              </div>

              <button className="btn btn-primary w-100 mb-3">Register</button>

              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-light">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/user-registration-4489365-3723271.png"
              alt="register"
              className="img-fluid p-4"
              style={{ maxHeight: "420px" }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
