import { ACCEPT_ALL_BUTTON_TEXT } from './presets'

export default function AcceptAllButton() {
  return (
    <button
      type="button"
      className="flex items-center justify-center w-36 h-12 text-white bg-cardBackground border border-[#23CE6B] hover:bg-[#23CE6B] rounded-lg transition-colors duration-300"
    >
      {ACCEPT_ALL_BUTTON_TEXT}
    </button>
  )
}
