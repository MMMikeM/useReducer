import { useForm } from "react-hook-form"

export default function UsehookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">First Name</label>
        <input {...register("name")} placeholder="John" type="text" />

        <label htmlFor="surname">Last Name</label>
        <input {...register("surname")} placeholder="Moses" type="text" />

        <label htmlFor="age">Last Name</label>
        <input {...register("age")} placeholder="0" type="number" />

        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          placeholder="john@moses.com"
          type="email"
        />

        {errors.exampleRequired && <span>This field is required</span>}

        <input className="btn" type="submit" />
      </form>
    </>
  )
}
