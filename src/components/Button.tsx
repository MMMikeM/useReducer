import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="inline-flex items-center justify-center py-2 w-48
                rounded-lg border-2 
                text-base font-medium capitalize 
                border-transparent transition
                hover:scale-105 cursor-pointer bg-indigo-600 text-white"
    >
      {children}
    </button>
  )
}
