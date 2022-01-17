import { navigate, routes } from '@redwoodjs/router'
import moment from 'moment'
import React from 'react'
import { useStore } from 'src/utils/stores/bookReservationStore'
import { DATE_FORMAT } from '../preset'
import DateSection from './date-section'
import LeaveNoteSection from './note-section'
import QRCodeSection from './qrcode-section'

type ConfirmerProps = {
  id?: string | number
}

export const Confirmer = ({ id }: ConfirmerProps) => {
  const { checkInDate, checkOutDate } = useStore((store) => ({
    ...store,
  }))

  const onClickContact = () => {
    window.alert('Feature coming soon!')
  }

  const onClickConfirm = () => {
    navigate(routes.viewReservations())
  }

  return (
    <div>
      <>
        <DateSection
          checkInDate={moment(checkInDate).format(DATE_FORMAT)}
          checkOutDate={moment(checkOutDate).format(DATE_FORMAT)}
          id={id as string}
        />
        <QRCodeSection code={id as string} />
        <LeaveNoteSection
          onClickContact={onClickContact}
          onClickConfirm={onClickConfirm}
        />
      </>
    </div>
  )
}
