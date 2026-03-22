import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";
import { userLoginService } from "../../services/Services"; // API call
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storeDataToken } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
// Types
type FormData = {
  email: string;
  password: string;
};

// Yup validation
const schema = yup.object({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data: any) => {
    try {
      const res = await userLoginService(data);
      console.log(res);

      if (res?.success) {
        toast.success("Login successful ");
        reset();
        storeDataToken("token", res.data.token);
        navigate("/dashboard");
      } else {
        toast.error("Login failed ");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      {/* Toast container */}
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />

      <div
        className="container-fluid vh-100 d-flex align-items-center justify-content-center"
        style={{ background: "linear-gradient(90deg, #7f53ac, #ffb88c)" }}
      >
        <div className="row w-75 bg-white rounded shadow overflow-hidden">
          {/* LEFT FORM */}
          <div className="col-md-6 p-5">
            <h3 className="mb-3">Login</h3>
            <p className="text-muted">Enter your credentials</p>

            <form onSubmit={handleSubmit(handleLogin)}>
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

              <button className="btn btn-primary w-100 mb-3">Login</button>

              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </form>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-light">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
              alt="login"
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

export default Login;
