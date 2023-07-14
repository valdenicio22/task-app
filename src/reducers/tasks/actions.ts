import { Task } from './reducer'

export enum ActionTypes {
  ADD_TASK = 'ADD_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  TOGGLE_COMPLETED = 'TOGGLE_COMPLETED',
}

export type StateAction =
  | { type: ActionTypes.ADD_TASK; payload: { newTask: Task } }
  | { type: ActionTypes.REMOVE_TASK; payload: { taskId: Task['id'] } }
  | {
      type: ActionTypes.TOGGLE_COMPLETED
      payload: { taskId: Task['id'] }
    }

export const addTaskAction = (newTask: Task): StateAction => ({
  type: ActionTypes.ADD_TASK,
  payload: { newTask },
})
export const removeTaskAction = (taskId: Task['id']): StateAction => ({
  type: ActionTypes.REMOVE_TASK,
  payload: { taskId },
})
export const toggleCompletedAction = (taskId: Task['id']): StateAction => ({
  type: ActionTypes.TOGGLE_COMPLETED,
  payload: { taskId },
})
