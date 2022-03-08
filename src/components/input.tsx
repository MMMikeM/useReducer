export default function Input({ register, type, placeholder, label }) {
  return (
    <>
      <label>{label}</label>
      <input {...register} type={type} placeholder={placeholder}></input>
    </>
  )
}
