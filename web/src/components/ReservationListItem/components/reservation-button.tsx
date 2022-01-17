type ReservationActionButtonProps = {
  type: string
  onClick?: () => void
}

export default function ReservationActionButton({
  type,
  onClick,
}: ReservationActionButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`bg-cardBackground w-32 h-10 flex items-center justify-center cursor-pointer rounded-lg border transition-colors duration-300 ${
          type === 'Reject' ? 'border-[#F2545B] hover:bg-[#F2545B]' : ''
        }
        ${
          type === 'Accept'
            ? 'border-[#23CE6B] bg-[#23CE6B] hover:bg-transparent'
            : ''
        }`}
      >
        {type}
      </button>
    </>
  )
}
