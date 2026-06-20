import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import "../styles/login.css";

function Login() { 
const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
const [serverError, setServerError] = useState("");
const [isLoading, setIsLoading] = useState(false);
const { register, handleSubmit, formState: { errors }, reset } = useForm()

const handleLogin = async (data) => {
    setServerError("");
    setIsLoading(true);
    try {
        const { email, password } = data;
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
    
        const res=await axios.post(`http://localhost:5000/api/v1/userrouter/login`, formData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        reset();

        console.log("res.data.userRole==============", res.data);

        const role=res.data.loggedInUser?.userRole;

    localStorage.setItem("userRole",role);

        console.log("userRole==============", role);

        if(role==="admin"){
            navigate("/adminDashboard");

        }else{
            navigate("/");

        }
    }
        catch (error) {
        console.log(error)
        setServerError(error.response?.data?.message || "Login failed. Please check your details and try again.");
    }
    finally {
        setIsLoading(false);
    }
}



    return (
        <main className="auth-page">
            <section className="auth-shell">
                <div className="auth-panel">
                    <span className="auth-kicker">Welcome back</span>
                    <h1 className="loginh1">Login to continue</h1>
                    <p className="auth-copy">Access your account to manage orders, browse saved items, and continue shopping.</p>

                    <form className="loginfields" onSubmit={handleSubmit(handleLogin)} noValidate>
                        {serverError && <p className="popup auth-alert">{serverError}</p>}

                        <label className="auth-field" htmlFor="login-email">
                            <span>Email address</span>
                            <div className="auth-input-wrap">
                                <Mail size={18} aria-hidden="true" />
                                <input
                                    id="login-email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+\.\S+$/,
                                            message: "Enter a valid email address"
                                        }
                                    })}
                                    type="email"
                                    placeholder="you@example.com"
                                    className="field1"
                                    autoComplete="email"
                                />
                            </div>
                            {errors.email && <p className="popup">{errors.email.message}</p>}
                        </label>

                        <label className="auth-field" htmlFor="login-password">
                            <span>Password</span>
                            <div className="auth-input-wrap">
                                <Lock size={18} aria-hidden="true" />
                                <input
                                    id="login-password"
                                    {...register("password", { required: "Password is required" })}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="field1"
                                    autoComplete="current-password"
                                />
                                <button
                                    className="auth-icon-button"
                                    type="button"
                                    onClick={() => setShowPassword((value) => !value)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    title={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.password && <p className="popup">{errors.password.message}</p>}
                        </label>

                        <div className="auth-row">
                            <label className="auth-check">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <Link to="/login" className="auth-muted-link">Forgot password?</Link>
                        </div>

                        <button className="field3" type="submit" disabled={isLoading}>
                            {isLoading ? "Signing in..." : "Login"}
                        </button>
                    </form>

                    <p className="auth-switch">
                        Don't have an account? <Link to="/signup" className="signup">Create one</Link>
                    </p>
                </div>

                <aside className="auth-showcase" aria-label="Account benefits">
                    <div>
                        <span className="auth-kicker">Modern living</span>
                        <h2>Beautiful furniture, simple checkout.</h2>
                    </div>
                    <ul>
                        <li>Save your favorite products</li>
                        <li>Track orders in one place</li>
                        <li>Get a faster checkout experience</li>
                    </ul>
                </aside>
            </section>
        </main>
    
    )
 }
 export default Login
