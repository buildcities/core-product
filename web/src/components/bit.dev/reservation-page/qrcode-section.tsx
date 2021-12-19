type QRCodeSectionProps = {
  codeImage: string
}
export default function QRCodeSection({ codeImage }: QRCodeSectionProps) {
  return (
    <div className="mb-6">
      <span className="block md:text-3xl text-2xl mb-4 font-sans font-medium">
        2. Your QR code
      </span>
      <div className="rounded-lg bg-cardBackground p-3 flex items-center justify-center md:flex-row flex-row-reverse">
        <picture className="block w-full h-full max-h-[153px] max-w-[153px]">
          <img src={codeImage} alt="QR code" className="w-full h-full" />
        </picture>
        <div className="md:ml-4 mr-4 w-min">
          <p className="md:mb-2 mb-4 text-paragraph font-medium text-sm">
            This code should be used as identifier, so keep it safe.
          </p>
          <button className="flex items-center justify-center rounded-lg border border-blue h-12 w-44 font-medium text-sm transition-colors duration-300 hover:bg-blue">
            Download code
          </button>
        </div>
      </div>
    </div>
  )
}
