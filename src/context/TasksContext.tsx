import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface Task {
  id: number
  title: string
  completed: boolean
  createdAt: Date
}

interface TasksContextProps {
  tasks: Array<Task>
  onToggleCompleted: (id: number) => void
  onDeleteTask: (id: number) => void
  createNewTask: (title: Task['title']) => void
}

const TasksContext = createContext({} as TasksContextProps)

const LOCAL_STORAGE_KEY = 'tasks:TasksApp'
interface TasksProviderProps {
  children: ReactNode
}
export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storedTasks) return JSON.parse(storedTasks)
    else return []
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function createNewTask(taskTitle: Task['title']): void {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      completed: false,
      createdAt: new Date(),
    }
    setTasks([...tasks, newTask])
  }

  function onToggleCompleted(taskId: Task['id']): void {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task,
    )
    setTasks(updatedTasks)
  }

  function onDeleteTask(taskId: Task['id']): void {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        onDeleteTask,
        onToggleCompleted,
        createNewTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TasksContext)
  return context
}
