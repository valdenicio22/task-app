import { ActionTypes, StateAction } from './actions'

export interface Task {
  id: number
  title: string
  completed: boolean
  createdAt: Date
}

export interface TasksState {
  tasks: Task[]
  tasksAmount: number
}

export function tasksReducer(state: TasksState, action: StateAction) {
  switch (action.type) {
    case ActionTypes.ADD_TASK: {
      const updatedTasks = [...state.tasks, action.payload.newTask]

      return {
        ...state,
        tasks: updatedTasks,
        tasksAmount: updatedTasks.length,
      }
    }
    case ActionTypes.TOGGLE_COMPLETED: {
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.taskId
          ? { ...task, completed: !task.completed }
          : task,
      )
      return {
        ...state,
        tasks: updatedTasks,
      }
    }
    case ActionTypes.REMOVE_TASK: {
      const updatedTasks = state.tasks.filter(
        (task) => task.id !== action.payload.taskId,
      )
      return {
        ...state,
        tasks: updatedTasks,
        tasksAmount: updatedTasks.length,
      }
    }
    default:
      return state
  }
}
