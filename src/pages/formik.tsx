import { Formik, Field, Form } from "formik"
import { Outlet, useLocation, useParams } from "react-router-dom"
import * as Yup from "yup"

export default function FormikForm() {
  const onSubmit = (values: any) => {
    console.log(values)
  }
  const validate = (values: any) => {
    const errors: any = {}

    if (!values.name) {
      errors.name = "Required"
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less"
    }

    if (!values.surname) {
      errors.surname = "Required"
    } else if (values.surname.length > 20) {
      errors.surname = "Must be 20 characters or less"
    }

    if (!values.email) {
      errors.email = "Required"
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address"
    }
    console.log("errors:", errors)
    return errors
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    surname: Yup.string()
      .max(20, "Must be 20 characters or less")
      .min(3, "Must be 3 characters or more")
      .required("Required"),
    age: Yup.number()
      .required("Required")
      .min(18, "don't be pedo bro")
      .max(31, "too old"),
    email: Yup.string().email("Invalid email address").required("Required"),
  })

  const location = useLocation()
  console.log(location)

  const params = useParams()
  console.log("params:", params)

  return (
    <>
      <Formik
        initialValues={{ name: "", surname: "", age: 0, email: "" }}
        // validate={validate}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex gap-8 items-end flex-wrap">
          <h2 className="text-3xl w-full">Formik Plain</h2>

          <div className="flex flex-col">
            <label htmlFor="name">First Name</label>
            <Field id="name" name="name" placeholder="John" type="text" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="surname">Last Name</label>
            <Field
              id="surname"
              name="surname"
              placeholder="Moses"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="age">Last Name</label>
            <Field id="age" name="age" placeholder="Moses" type="number" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="john@moses.com"
              type="email"
            />
          </div>
          <button className="btn" type="submit">Submit</button>
        </Form>
      </Formik>
      <Outlet />
    </>
  )
}
