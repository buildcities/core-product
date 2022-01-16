import moment from 'moment'
import React from 'react'
import { useStore } from 'src/utils/stores/bookReservationStore'
import { DATE_FORMAT } from '../preset'
import DateSection from './date-section'
import LeaveNoteSection from './note-section'
import QRCodeSection from './qrcode-section'
import { motion } from 'framer-motion'

type ConfirmerProps = {
  id?: string | number
}

export const Confirmer = ({ id }: ConfirmerProps) => {
  const { checkInDate, checkOutDate } = useStore((store) => ({
    ...store,
  }))
  return (
    <div>
      <>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.7,
          }}
        >
          <DateSection
            checkInDate={moment(checkInDate).format(DATE_FORMAT)}
            checkOutDate={moment(checkOutDate).format(DATE_FORMAT)}
            id={id as string}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <QRCodeSection code={id as string} />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.7,
            delay: 0.4,
          }}
        >
          <LeaveNoteSection />
        </motion.div>
      </>
    </div>
  )
}
