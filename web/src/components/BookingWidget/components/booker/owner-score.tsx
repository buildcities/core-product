import { Heading, Paragraph } from '@buildcities/build-ui.components.all'
import React from 'react'

import { OWNER_LABEL_TEXT, SCORE_LABEL_TEXT } from './presets'

type OwnerScoreType = {
  owner?: string
  score?: string
}

export default function OwnerScore({ score, owner }: OwnerScoreType) {
  //const userName = useStore((store) => store.userName)
  return (
    <div className="bg-cardBackground text-left flex-1 rounded-lg flex w-full divide-x divide-outline">
      <div className="flex-shrink-0 flex py-5 flex-1 pl-10 justify-start  flex-col  ">
        <Heading className="text-paragraph" type="H3" text={SCORE_LABEL_TEXT} />
        <Heading className="text-mainText w-full" type="H3" text={score} />
      </div>
      <div className="space-y-[14px] py-5 flex flex-1 pl-10 flex-col justify-start">
        <Heading
          className="text-paragraph -ml-8 "
          type="H3"
          text={OWNER_LABEL_TEXT}
        />
        <Paragraph className="text-paragraph -ml-[24px]  w-full" text={owner} />
      </div>
    </div>
  )
}

OwnerScore.defaultProps = {
  score: 'N/A',
}
