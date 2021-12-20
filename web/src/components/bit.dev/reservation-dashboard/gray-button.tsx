type GrayButtonProps = {
  children: string
}
export default function GrayButton({ children }: GrayButtonProps) {
  return (
    <>
      <button
        type="button"
        className="bg-cardBackground focus:outline-purple-selected hover:opacity-75 rounded-full p-3 lg:p-4"
      >
        {children}
      </button>
    </>
  )
}
