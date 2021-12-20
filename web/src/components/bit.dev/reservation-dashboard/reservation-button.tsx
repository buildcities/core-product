type ReservationButtonProps = {
  type: string
}

export default function ReservationButton({ type }: ReservationButtonProps) {
  console.log(type)
  return (
    <>
      <button
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
