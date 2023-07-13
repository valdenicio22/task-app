import { useMemo } from 'react'
import { useTasks } from '../../../context/TasksContext'

export function TasksQuantity() {
  const { tasks } = useTasks()
  const taskCompleted = useMemo(
    () => tasks.filter((task) => task.completed),
    [tasks],
  ).length

  return (
    <section className="flex items-center justify-between mt-16 mb-6">
      <div className="flex items-center gap-2">
        <strong className="text-brand-blue text-sm font-bold">
          Tasks created
        </strong>
        <span className="py-[2px] px-2 rounded-full bg-base-gray-400 font-bold text-xs">
          {tasks.length}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <strong className="text-brand-purple text-sm font-bold">
          Completed
        </strong>
        <span className="py-[2px] px-2 rounded-full bg-base-gray-400 font-bold text-xs">
          {!tasks.length ? 0 : `${taskCompleted} of ${tasks.length}`}
        </span>
      </div>
    </section>
  )
}
