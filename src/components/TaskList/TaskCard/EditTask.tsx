import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FiSave } from 'react-icons/fi'
import { z } from 'zod'
import { useTasks } from '../../../context/TasksContext'
import { Task } from '../../../reducers/tasks/reducer'

const editFormSchema = z.object({
  editTaskInput: z.string().min(1, 'Must have at least 1 character'),
})

type EditTaskFormData = z.infer<typeof editFormSchema>

interface EditTaskProps {
  task: Task
}

export function EditTask({ task }: EditTaskProps) {
  const { onSaveEditedTask } = useTasks()
  const {
    getValues,
    register,
    formState: { errors },
  } = useForm<EditTaskFormData>({
    resolver: zodResolver(editFormSchema),
    defaultValues: {
      editTaskInput: task.title,
    },
  })

  function handleEditFormSubmit(data: EditTaskFormData) {
    const updatedTaskTitle = { ...task, title: data.editTaskInput }
    onSaveEditedTask(updatedTaskTitle)
  }

  return (
    <form id="edit-task-form" className="flex-1 flex items-start gap-4">
      <div className="flex-1 flex flex-col gap-2">
        <input
          type="text"
          {...register('editTaskInput')}
          className={`w-full h-8 px-4 py-2 rounded-lg bg-base-gray-500 border border-base-gray-700 outline-none
          text-base-gray-100 overflow-hidden transition-colors duration-300 focus:border-brand-purple-dark 
          ${
            !!errors.editTaskInput && `border border-danger focus:border-danger`
          }`}
        />
        {errors.editTaskInput && (
          <p className="text-danger text-sm">{errors.editTaskInput.message}</p>
        )}
      </div>

      <button
        className={`pl-1 h-5 w-5 transition-colors duration-300 text-base-gray-300 ${
          !task.completed ? `hover:text-brand-blue-dark` : `opacity-70`
        } `}
        form="edit-task-form"
        onClick={() => handleEditFormSubmit(getValues())}
      >
        <FiSave size={20} />
      </button>
    </form>
  )
}
