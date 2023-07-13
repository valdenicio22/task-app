import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { TasksProvider } from './context/TasksContext'

export default function App() {
  return (
    <>
      <Header />
      <TasksProvider>
        <TaskList />
      </TasksProvider>
    </>
  )
}
