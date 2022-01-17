type ReservationSelectionButtonProps = {
  text: string
  className?: string
  selected?: boolean
}
export default function ReservationSelectionButton({
  text,
  className,
  selected,
}: ReservationSelectionButtonProps) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center text-white bg-cardBackground p-2.5 border hover:border-selected rounded-lg transition-colors duration-300 sm:text-sm text-xs  ${className} ${
        selected ? 'border-selected' : 'border-transparent'
      }`}
    >
      {text}
    </button>
  )
}
