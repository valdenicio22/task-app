import { TbClipboardText } from 'react-icons/tb'

export function EmptyTasks() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border-t border-base-gray-400 rounded-lg py-16 px-6">
      <TbClipboardText size={56} className="opacity-30" />
      <p className="text-base-gray-300 text-center">
        <strong>You don&apos;t have any tasks registered yet.</strong>
        <br />
        Create tasks and organize your to-do items.
      </p>
    </div>
  )
}
