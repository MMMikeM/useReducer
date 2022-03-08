import { useState } from "react"

export default function Form() {
  const [fieldValidity, setFieldValidity] = useState({
    nameField: true,
    ageField: true,
    showModal: false,
  })

  const validateField = (field: { name: string; value: string | number }) => {
    if (field.name === "nameField") {
      if (!field.value) {
        setFieldValidity({ ...fieldValidity, nameField: false })
      } else setFieldValidity({ ...fieldValidity, nameField: true })
    } else if (field.name === "ageField") {
      if (field.value < 18) {
        setFieldValidity({ ...fieldValidity, ageField: false })
      } else setFieldValidity({ ...fieldValidity, ageField: true })
    }
  }

  const handleSubmit = (event: {
    currentTarget: any
    preventDefault: () => void
  }) => {
    const form = event.currentTarget
    event.preventDefault()

    for (const field of form.elements) {
      validateField(field)
    }

    if (form.nameField.value) {
      setFieldValidity({ ...fieldValidity, showModal: true })
    }
  }

  const handleChange = (event: { currentTarget: any; target: any }) => {
    const form = event.currentTarget
    const field = event.target

    validateField(field)
    form.submit.disabled = !form.checkValidity()
  }

  const isNameInvalid = fieldValidity.nameField === false
  const isAgeInvalid = fieldValidity.ageField === false
  const shouldShowModal = fieldValidity.showModal === true

  return (
    <>
      {shouldShowModal && (
        <div className="fixed bg-transparent inset-0 flex justify-center items-center">
          <div className="p-12 bg-white">
            <h2 className="text-3xl font-bold mb-8">Success</h2>
            <button
              className="text-2xl font-bold bg-indigo-500 text-white rounded-md shadow-md py-2 px-4 w-64"
              onClick={() =>
                setFieldValidity({ ...fieldValidity, showModal: false })
              }
            >
              Ok
            </button>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="flex gap-12 mb-8">
          <label className="text-xl font-semibold flex flex-col">
            Name
            <input
              type="text"
              name="nameField"
              placeholder="Must input a value"
              className={`${isNameInvalid ? "ring-2 ring-red-500 mb-2" : null}`}
            />
            {isNameInvalid && <>There has to be a name</>}
          </label>
          <label className="text-xl font-semibold flex flex-col">
            Age
            <input
              type="number"
              name="ageField"
              placeholder="Must be >13"
              className={`${isAgeInvalid ? "ring-2 ring-red-500 mb-2" : null}`}
            />
            {isAgeInvalid && <>Why don't you take a seat?</>}
          </label>
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            name="submit"
            className="text-2xl font-bold bg-indigo-500 text-white rounded-md shadow-md py-2 px-4 w-64"
          />
        </div>
      </form>
    </>
  )
}
