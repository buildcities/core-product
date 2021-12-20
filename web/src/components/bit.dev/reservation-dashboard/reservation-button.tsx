type ReservationButtonProps = {
  type: string
}

export default function ReservationButton({ type }: ReservationButtonProps) {
  console.log(type)
  return (
    <>
      <button
        type="button"
        className={`bg-cardBackground w-32 h-10 flex items-center justify-center cursor-pointer rounded-lg border ${
          type === 'Reject' ? 'border-red-600 hover:bg-red-600' : ''
        }
        ${type === 'Accept' ? 'border-green-600 bg-green-600' : ''}`}
      >
        {type}
      </button>
    </>
  )
}
