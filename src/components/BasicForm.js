import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        type="email"
        placeholder="Enter your email"
        onBlur={formik.handleBlur}
        className={
          formik.errors.email && formik.touched.email ? "input-error" : ""
        }
      />
      {formik.errors.email && formik.touched.email && (
        <p className="error">{formik.errors.email}</p>
      )}
      <label htmlFor="age">Age</label>
      <input
        id="age"
        value={formik.values.age}
        onChange={formik.handleChange}
        type="number"
        placeholder="Enter your age"
        onBlur={formik.handleBlur}
        className={formik.errors.age && formik.touched.age ? "input-error" : ""}
      />
      {formik.errors.age && formik.touched.age && (
        <p className="error">{formik.errors.age}</p>
      )}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        type="password"
        placeholder="Enter your password"
        onBlur={formik.handleBlur}
        className={
          formik.errors.password && formik.touched.password ? "input-error" : ""
        }
      />
      {formik.errors.password && formik.touched.password && (
        <p className="error">{formik.errors.password}</p>
      )}
      <label htmlFor="password">Confirm Password</label>
      <input
        id="confirmPassword"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        type="password"
        placeholder="Confirm password"
        onBlur={formik.handleBlur}
        className={
          formik.errors.confirmPassword && formik.touched.confirmPassword
            ? "input-error"
            : ""
        }
      />
      {formik.errors.confirmPassword && formik.touched.confirmPassword && (
        <p className="error">{formik.errors.confirmPassword}</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
