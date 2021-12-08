import { Heading, Button } from '@buildcities/build-ui.components.all'
import SingleColumnLayout from '../../layouts/SingleColumnLayout/SingleColumnLayout'
import { GlobeIcon } from '../../utils/svgs'
import {
  VERIFY_DISCORD_MEMBERSHIP_TEXT,
  VERIFY_DISCORD_CTA_TEXT,
} from './presets'

const HomePage = () => {
  return (
    <SingleColumnLayout metaTitle="Home">
      <div className="flex flex-col  justify-center items-center">
        <GlobeIcon className="w-[140px] md:w-[185px] mb-6 md:mb-8 lg:w-[285px]" />
        <Heading
          type="H3"
          className="text-mainText mb-6 md:mb-8 H5 md:H4 lg:H3 text-center block max-w-[464px]"
          text={VERIFY_DISCORD_MEMBERSHIP_TEXT}
        />
        <Button text={VERIFY_DISCORD_CTA_TEXT} />
      </div>
    </SingleColumnLayout>
  )
}

export default HomePage
