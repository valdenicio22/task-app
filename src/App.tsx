import { Form } from './components/Form'
import { Header } from './components/Header'

export default function App() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto">
        <Form />
      </main>
    </>
  )
}
