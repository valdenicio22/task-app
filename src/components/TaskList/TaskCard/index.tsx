import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { TbTrash } from 'react-icons/tb'
import { Task } from '../../../reducers/tasks/reducer'

interface TaskProps {
  task: Task
  handleOnToggle: (taskId: number) => void
  handleDeleteTask: (taskId: number) => void
}

export function TaskCard({
  task,
  handleOnToggle,
  handleDeleteTask,
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
        className={`self-start h-5 w-5  flex items-center justify-center rounded-full hover:bg-base-gray-300 border shadow-[0_0_3px] border-brand-blue ${
          task.completed && `bg-brand-purple-dark hover:bg-brand-purple`
        } `}
      >
        <Checkbox.Indicator>
          <CheckIcon className="text-base-gray-100" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <span className={`flex-1 text-justify`}>{task.title}</span>
      <button
        className={`self-start h-5 w-5 text-base-gray-300 `}
        disabled={task.completed}
        onClick={() => handleDeleteTask(task.id)}
      >
        <TbTrash
          size={20}
          className={`transition-colors duration-300 text-base-gray-300 ${
            !task.completed ? `hover:text-danger` : `opacity-70`
          }`}
        />
      </button>
    </div>
  )
}
