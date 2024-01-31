import { useFormik } from "formik";
import React, { FC, useState } from "react";
import {
  AiFillGithub,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";
import { stylesCustoms } from "../styles/style";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string().required("password is required").min(6),
});

const Login: FC<Props> = (Props) => {
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      console.log(email, password);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div className="w-[400px] flex flex-col justify-center items-center m-auto h-screen">
      <h1 className={`${stylesCustoms.title}`}>Login</h1>
      <form onSubmit={handleSubmit}>
        <label className={`${stylesCustoms.label}`}>Enter your email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          className={`${errors.email && touched.email && "border-red-500"} ${
            stylesCustoms.input
          } `}
        />
        {errors.email && touched.email && (
          <span className="text-red-500">{errors.email}</span>
        )}

        <label className={`${stylesCustoms.label}`}>Enter your email</label>
        <input
          type={!show?"password":"text"}
          name="password"
          value={values.password}
          onChange={handleChange}
          id="email"
          className={`${errors.password && touched.password && "border-red-500"} ${
            stylesCustoms.input
          } `}
        />
        {errors.password && touched.password && (
          <span className="text-red-500">{errors.password}</span>
        )}
        <div className="w-full">
            <input className="bg-yellow-400 dark:bg-yellow-400 w-full text-black dark:text-white" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
