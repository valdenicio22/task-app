import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import {
  addTaskAction,
  removeTaskAction,
  saveEditedTaskAction,
  toggleCompletedAction,
  toggleEnableEditTaskAction,
} from '../reducers/tasks/actions'
import { Task, TasksState, tasksReducer } from '../reducers/tasks/reducer'

interface TasksContextProps {
  tasks: Array<Task>
  tasksAmount: number
  onToggleCompleted: (id: number) => void
  onDeleteTask: (id: number) => void
  createNewTask: (title: Task['title']) => void
  onToggleEnableEditTask: (taskId: number) => void
  onSaveEditedTask: (task: Task) => void
}

const TasksContext = createContext({} as TasksContextProps)

const LOCAL_STORAGE_KEY = 'tasks:TasksApp'
interface TasksProviderProps {
  children: ReactNode
}

const initialState: TasksState = {
  tasks: [],
  tasksAmount: 0,
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasksState, dispatch] = useReducer(
    tasksReducer,
    initialState,
    (initialValue) => {
      const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (storedTasks) {
        const { tasks, tasksAmount } = JSON.parse(storedTasks)
        return {
          tasks,
          tasksAmount,
        }
      }
      return initialValue
    },
  )
  const { tasks, tasksAmount } = tasksState

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasksState))
  }, [tasksState])

  function createNewTask(taskTitle: Task['title']): void {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      completed: false,
      isEditEnable: false,
      createdAt: new Date(),
    }
    dispatch(addTaskAction(newTask))
  }

  function onToggleCompleted(taskId: Task['id']): void {
    dispatch(toggleCompletedAction(taskId))
  }

  function onToggleEnableEditTask(taskId: Task['id']): void {
    dispatch(toggleEnableEditTaskAction(taskId))
  }

  function onDeleteTask(taskId: Task['id']): void {
    dispatch(removeTaskAction(taskId))
  }

  function onSaveEditedTask(task: Task): void {
    dispatch(saveEditedTaskAction(task))
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        tasksAmount,
        onDeleteTask,
        onToggleCompleted,
        createNewTask,
        onToggleEnableEditTask,
        onSaveEditedTask,
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
