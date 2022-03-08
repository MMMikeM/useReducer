import { useForm } from "@felte/react"

export default function Felte() {
  const { form } = useForm({
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <>
      <h2 className="text-3xl">Felte</h2>
      <form ref={form}>
        <label htmlFor="name">First Name</label>
        <input id="name" name="name" placeholder="John" type="text" />

        <label htmlFor="surname">Last Name</label>
        <input id="surname" name="surname" placeholder="Moses" type="text" />

        <label htmlFor="age">Last Name</label>
        <input id="age" name="age" defaultValue={0} placeholder="18" type="number" />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="john@moses.com"
          type="email"
        />
        <button className="btn" type="submit">Submit</button>
      </form>
    </>
  )
}
