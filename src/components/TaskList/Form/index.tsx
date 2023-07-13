import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { z } from 'zod'
import { Task, useTasks } from '../../../context/TasksContext'

const taskSchema = z.object({
  taskTitle: z.string().min(1, 'This is a required field!'),
})
type FormType = z.infer<typeof taskSchema>

export function Form() {
  const { createNewTask } = useTasks()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      taskTitle: '',
    },
  })

  function handleNewTask(formData: FormType) {
    const { taskTitle } = formData
    createNewTask(taskTitle)
    reset()
  }

  return (
    <form
      className={`flex items-center gap-2 -mt-7`}
      onSubmit={handleSubmit(handleNewTask)}
    >
      <div className="flex-1 flex flex-col gap-1">
        <input
          className={`w-full h-14 p-4 rounded-lg bg-base-gray-500 border border-base-gray-700 outline-none text-base-gray-100 overflow-hidden transition-colors duration-300 focus:border-brand-purple-dark placeholder:text-base-gray-300
          ${!!errors.taskTitle && `border border-danger focus:border-danger`}`}
          placeholder="Add a new task"
          {...register('taskTitle')}
        />
        {errors.taskTitle && (
          <p className="text-sm text-danger">{errors.taskTitle.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="self-start flex items-center justify-center gap-2 h-14 p-4 bg-brand-blue-dark rounded-lg transition-colors duration-300 hover:bg-brand-blue text-sm font-bold"
      >
        Create
        <AiOutlinePlusCircle size={18} />
      </button>
    </form>
  )
}
