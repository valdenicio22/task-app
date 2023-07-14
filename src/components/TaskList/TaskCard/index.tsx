import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { FiEdit2, FiSave } from 'react-icons/fi'
import { TbTrash } from 'react-icons/tb'
import { Task } from '../../../reducers/tasks/reducer'
import { EditTask } from './EditTask'

interface TaskProps {
  task: Task
  handleOnToggle: (taskId: number) => void
  handleDeleteTask: (taskId: number) => void
  handleToggleEnableEditTask: (taskId: number) => void
}

export function TaskCard({
  task,
  handleOnToggle,
  handleDeleteTask,
  handleToggleEnableEditTask,
}: TaskProps) {
  return (
    <div
      className={`flex items-center justify-between gap-3 text-sm p-4 rounded-lg border border-base-gray-400 bg-base-gray-500  shadow-md ${
        task.completed && `line-through text-base-gray-300`
      }`}
    >
      <Checkbox.Root
        checked={task.completed}
        onCheckedChange={() => handleOnToggle(task.id)}
        disabled={task.isEditEnable}
        className={`self-start h-5 w-5  flex items-center justify-center rounded-full hover:enabled:bg-base-gray-300 border shadow-[0_0_3px] border-brand-blue ${
          task.completed && `bg-brand-purple-dark hover:bg-brand-purple`
        } ${task.isEditEnable && `cursor-not-allowed opacity-50`} `}
      >
        <Checkbox.Indicator>
          <CheckIcon className="text-base-gray-100" />
        </Checkbox.Indicator>
      </Checkbox.Root>

      {task.isEditEnable ? (
        <EditTask task={task} />
      ) : (
        <span className={`flex-1 text-justify`}>{task.title}</span>
      )}

      <div className="self-start flex items-center gap-2">
        {task.isEditEnable && (
          <button
            className={`h-5 w-5 transition-colors duration-300 text-base-gray-300 ${
              !task.completed ? `hover:text-brand-blue-dark` : `opacity-70`
            } `}
            form="edit-task-form"
            type="submit"
          >
            <FiSave
              size={20}
              className={`transition-colors duration-300 text-base-gray-300 ${
                !task.completed ? `hover:text-brand-blue-dark` : `opacity-70`
              }`}
            />
          </button>
        )}
        {!task.isEditEnable && (
          <button
            type="button"
            className={`h-5 w-5 transition-colors duration-300 text-base-gray-300 ${
              !task.completed ? `hover:text-brand-blue-dark` : `opacity-70`
            } `}
            disabled={task.completed}
            onClick={() => handleToggleEnableEditTask(task.id)}
          >
            <FiEdit2 size={20} />
          </button>
        )}
        <button
          className={`h-5 w-5 transition-colors duration-300 text-base-gray-300 hover:text-danger`}
          onClick={() => handleDeleteTask(task.id)}
        >
          <TbTrash size={20} />
        </button>
      </div>
    </div>
  )
}
