import { useCallback } from 'react'
type ReservationSelectionButtonProps = {
  text: string
  className?: string
  selected?: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}
export default function ReservationSelectionButton({
  text,
  className,
  selected,
  setSelected,
}: ReservationSelectionButtonProps) {
  const _setClosed = useCallback(() => {
    setSelected && setSelected(text)
  }, [text, setSelected])
  return (
    <button
      type="button"
      className={`flex items-center justify-center text-white bg-cardBackground p-2.5 border hover:border-[#7B61FF] rounded-lg transition-colors duration-300 ${className} ${
        selected === text ? 'border-[#7B61FF]' : 'border-transparent'
      }`}
      onClick={_setClosed}
    >
      {text}
    </button>
  )
}
