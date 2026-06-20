import { useState } from "react";
import { useForm } from "react-hook-form"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import "../styles/signup.css";

function Signup() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [serverError, setServerError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleSignup = async (data) => {
        setServerError("");
        setIsLoading(true);
        try {
            const { FirstName, LastName, email, password } = data;
            const formData = new FormData();
            formData.append("FirstName", FirstName);
            formData.append("LastName", LastName);
            formData.append("email", email);
            formData.append("password", password);

            await axios.post(`http://localhost:5000/api/v1/userrouter/register`, formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            reset();
            navigate("/login");
        } catch (error) {
            console.log(error);
            setServerError(error.response?.data?.message || "Signup failed. Please review your information and try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="auth-page">
            <section className="auth-shell auth-shell-reverse">
                <aside className="auth-showcase" aria-label="Account benefits">
                    <div>
                        <span className="auth-kicker">Join the store</span>
                        <h2>Start building a home that feels like yours.</h2>
                    </div>
                    <ul>
                        <li>Create wishlists for every room</li>
                        <li>Keep your delivery details ready</li>
                        <li>Receive product and order updates</li>
                    </ul>
                </aside>

                <div className="auth-panel">
                    <span className="auth-kicker">Create account</span>
                    <h1 className="signuph1">Sign up in seconds</h1>
                    <p className="auth-copy">Use your details below to create a secure shopping account.</p>

                    <form className="signupfields" onSubmit={handleSubmit(handleSignup)} noValidate>
                        {serverError && <p className="popup auth-alert">{serverError}</p>}

                        <div className="auth-grid">
                            <label className="auth-field" htmlFor="signup-firstname">
                                <span>First name</span>
                                <div className="auth-input-wrap">
                                    <User size={18} aria-hidden="true" />
                                    <input
                                        id="signup-firstname"
                                        type="text"
                                        placeholder="First name"
                                        className="field1"
                                        autoComplete="given-name"
                                        {...register("FirstName", { required: "First name is required" })}
                                    />
                                </div>
                                {errors.FirstName && <p className="popup">{errors.FirstName.message}</p>}
                            </label>

                            <label className="auth-field" htmlFor="signup-lastname">
                                <span>Last name</span>
                                <div className="auth-input-wrap">
                                    <User size={18} aria-hidden="true" />
                                    <input
                                        id="signup-lastname"
                                        type="text"
                                        placeholder="Last name"
                                        className="field1"
                                        autoComplete="family-name"
                                        {...register("LastName", { required: "Last name is required" })}
                                    />
                                </div>
                                {errors.LastName && <p className="popup">{errors.LastName.message}</p>}
                            </label>
                        </div>

                        <label className="auth-field" htmlFor="signup-email">
                            <span>Email address</span>
                            <div className="auth-input-wrap">
                                <Mail size={18} aria-hidden="true" />
                                <input
                                    id="signup-email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="field1"
                                    autoComplete="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+\.\S+$/,
                                            message: "Enter a valid email address"
                                        }
                                    })}
                                />
                            </div>
                            {errors.email && <p className="popup">{errors.email.message}</p>}
                        </label>

                        <label className="auth-field" htmlFor="signup-password">
                            <span>Password</span>
                            <div className="auth-input-wrap">
                                <Lock size={18} aria-hidden="true" />
                                <input
                                    id="signup-password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                    className="field1"
                                    autoComplete="new-password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters"
                                        }
                                    })}
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

                        <label className="auth-check auth-terms">
                            <input
                                type="checkbox"
                                {...register("terms", { required: "Please agree before creating an account" })}
                            />
                            <span>I agree to the terms and privacy policy</span>
                        </label>
                        {errors.terms && <p className="popup">{errors.terms.message}</p>}

                        <button className="field2" type="submit" disabled={isLoading}>
                            {isLoading ? "Creating account..." : "Create account"}
                        </button>
                    </form>

                    <p className="auth-switch">
                        Already have an account? <Link to="/login" className="signup">Login</Link>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Signup;
