import { Formik, Field, Form, useFormik } from "formik"
import { useLocation, useParams, useSearchParams } from "react-router-dom"
import * as Yup from "yup"

export default function FormikValidate() {
  let [searchParams, setSearchParams] = useSearchParams()

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

  const params = useParams()

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: params.id,
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      console.log(values)
    },
  })

  const location = useLocation()
  console.log("location:", location)

  console.log(params)

  const searchData = { age: "18", name: "Nardus" }

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-wrap gap-8 mt-16"
      >
        <button onClick={() => setSearchParams(searchData)}>
          Gogogoggogoo
        </button>
        <h2 className="text-3xl w-full">Formik {params?.id}</h2>
        <div className="flex flex-col">
          <label htmlFor="name">First Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />

          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label htmlFor="surname">Last Name</label>

          <input
            id="surname"
            name="surname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.surname}
          />

          {formik.touched.surname && formik.errors.surname ? (
            <div className="text-red-500">{formik.errors.surname}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label htmlFor="age">Age</label>

          <input
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />

          {formik.touched.age && formik.errors.age ? (
            <div className="text-red-500">{formik.errors.age}</div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        <button className="btn" type="submit">Submit</button>
      </form>
    </>
  )
}
