import { AiOutlinePlusCircle } from 'react-icons/ai'

export function Form() {
  return (
    <form className={`flex items-center justify-center gap-2 -mt-7`}>
      <input
        className={`w-full h-14 p-4 rounded-lg bg-base-gray-500 border border-base-gray-700 outline-none text-base-gray-100 overflow-hidden transition-colors duration-300 focus:border-brand-purple-dark placeholder:text-base-gray-300`}
        placeholder="Add a new task"
      />

      <button
        type="submit"
        className="flex items-center justify-center gap-2 h-14 p-4 bg-brand-blue-dark rounded-lg transition-colors duration-300 hover:bg-brand-blue"
      >
        Create
        <AiOutlinePlusCircle size={16} />
      </button>
    </form>
  )
}
