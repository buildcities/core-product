import React from 'react'
import ReservationActionButton from './reservation-button'
import { useMutation } from '@redwoodjs/web'
import { UPDATE_RESERVATION } from './mutation'
import { toast } from '@redwoodjs/web/toast'
import { RESERVATIONS_QUERY } from 'src/utils/graphql/queries/reservations'

const REJECTED = 'REJECTED'
const APPROVED = 'APPROVED'
const LOADING_MSG = 'Updating reservation status'
const SUCCESS_MSG = 'Status successfully updated'
const ERROR_MSG = 'Opps! Failed to update status'

type TableActionButtonGroupProp = {
  id: string
  status: 'NEW' | 'APPROVED' | 'REJECTED'
}

export default function TableActionButtonGroup({
  id,
  status,
}: TableActionButtonGroupProp) {
  const [updateStatus] = useMutation(UPDATE_RESERVATION)
  const onUpdate = (status: 'REJECTED' | 'APPROVED') => () => {
    const input = { status }
    toast.promise(
      updateStatus({
        variables: { input, id },
        refetchQueries: [RESERVATIONS_QUERY],
      }),
      {
        loading: LOADING_MSG,
        success: SUCCESS_MSG,
        error: ERROR_MSG,
      }
    )
  }
  return (
    <>
      <td className="flex xl:justify-center xl:pr-0 pr-2 justify-end xl:w-1/5 w-1/2">
        {status == REJECTED ? (
          <div className="rounded-full p-2 bg-error text-mainText">
            {REJECTED}
          </div>
        ) : (
          <ReservationActionButton onClick={onUpdate(REJECTED)} type="Reject" />
        )}
      </td>
      <td className="flex xl:justify-end xl:pl-0 pl-2 justify-start xl:w-1/5 w-1/2">
        <ReservationActionButton onClick={onUpdate(APPROVED)} type="Accept" />
      </td>
    </>
  )
}
