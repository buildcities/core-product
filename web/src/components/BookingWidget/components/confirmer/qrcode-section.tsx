import { PageSection } from 'src/components/bit.dev/page-section'
import {
  QR_CODE_SECTION_TEXT,
  QR_CODE_SECTION_TITLE,
  CTA_TEXT,
  QR_ID,
} from './presets'
import QRCode from 'qrcode.react'
import { Paragraph } from '@buildcities/build-ui.components.all'
type QRCodeSectionProps = {
  code: string
}
const QRCodeViewer: React.FC<{ code: string }> = ({ code }) => (
  <div className="bg-white   p-3 rounded-md">
    <div className="md:block hidden">
      <QRCode includeMargin id={QR_ID} size={120} value={code} />
    </div>
    <div className="md:hidden">
      <QRCode includeMargin id={QR_ID} size={90} value={code} />
    </div>
  </div>
)

export default function QRCodeSection({ code }: QRCodeSectionProps) {
  const handleQRDownload = () => {
    const canvas = document.getElementById(QR_ID) as HTMLCanvasElement
    //console.log(canvas)
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')
    const downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = `${code}.png`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <PageSection title={QR_CODE_SECTION_TITLE}>
      <div className="flex justify-evenly items-center space-x-4 rounded-lg bg-cardBackground py-3 px-[17px]">
        <QRCodeViewer code={code} />
        <div className=" flex-shrink">
          <Paragraph
            className="max-w-[171px] pb-2 text-paragraph"
            text={QR_CODE_SECTION_TEXT}
          />
          <button
            onClick={handleQRDownload}
            type="button"
            className="flex flex-grow items-center justify-center rounded-lg border px-2 border-blue h-12 w-full max-w-44 transition-colors duration-300 hover:bg-blue"
          >
            <Paragraph type="P2" className="text-mainText" text={CTA_TEXT} />
          </button>
        </div>
      </div>
    </PageSection>
  )
}

QRCodeSection.defaultProps = {
  code: 'test data',
}
/* <div className="mb-6">
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
    </div> */
