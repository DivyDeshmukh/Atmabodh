import React, { useState } from "react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { login as loginUser } from "../features/authSlice";

function Login() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw Error("Failed to login user");
      }

      const resolvedResponse = await response.json();
      console.log(resolvedResponse);

      if (resolvedResponse) {
        dispatch(loginUser(resolvedResponse));
        navigate("/");
      }
    } catch (error) {
      setError(error?.message);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#1b181f] flex flex-col items-center justify-center">
      <div className="card h-auto max-h-[390px] w-[90%] max-w-[330px] sm:max-w-[350px] md:max-w-[380px] lg:max-w-[400px] bg-[#ffe0c3] rounded-2xl flex flex-col items-center pt-6">
        <div id="top" className="flex flex-col gap-2 items-center p-2 mb-2">
          <Logo />
          <h3 className="text-[10.75px] font-semibold">
            Do not have an account? Please register here &nbsp;
            <Link
              to={"/signup"}
              className="text-[12.5px] font-semibold text-[#FF9400] underline"
            >
              Signup
            </Link>
          </h3>
          {error && (
            <p className="text-red-600 text-[12px] font-semibold mb-2">
              {error}
            </p>
          )}
        </div>

        <form
          onSubmit={handleSubmit(login)}
          className="flex flex-col gap-4 w-full pt-2 items-center pb-4"
        >
          <Input
            type="email"
            id="email"
            label="Email: "
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern:
                /^[\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*@(?:[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?\.)+[A-Z]{2,}$/i,
            })}
          />
          <Input
            type="password"
            id="password"
            placeholder="Enter your password here"
            label="Password: "
            {...register("password", {
              required: true,
            })}
          />
          <div className="flex w-full justify-center gap-6">
            <Button
              text={"Back"}
              className="font-semibold -translate-y-2"
              linkClassName={"hover:bg-[#ffe0c3]"}
              keepRightIcon={false}
              keepLeftIcon={true}
              link="/"
            />

            <Button
              text={"Login"}
              className="font-semibold -translate-y-2"
              linkClassName={"hover:bg-[#ffe0c3]"}
              keepRightIcon={true}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
