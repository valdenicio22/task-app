import { useTasks } from '../../context/TasksContext'
import { Form } from './Form'
import { TaskCard } from './TaskCard'
import { EmptyTasks } from './TaskCard/EmptyTasks'
import { TasksQuantity } from './TasksQuantity'

export function TaskList() {
  const { tasks, tasksAmount, onDeleteTask, onToggleCompleted } = useTasks()

  return (
    <main className="max-w-3xl mx-auto">
      <Form />
      <TasksQuantity />

      {!tasksAmount && <EmptyTasks />}
      {!!tasksAmount && (
        <section className={`flex flex-col gap-3 px-4`}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleOnToggle={onToggleCompleted}
              handleDeleteTask={onDeleteTask}
            />
          ))}
        </section>
      )}
    </main>
  )
}
