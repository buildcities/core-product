/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react'
import ReservationWidget from './reservation-widget'
import OwnerScoreWidget from './owner-score'
import { Button } from '@buildcities/build-ui.components.all'
import { useStore } from 'src/utils/stores/bookReservationStore'
import { useStore as useAuthStore } from 'src/utils/stores/authStore'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { navigate, routes } from '@redwoodjs/router'
import { CREATE_RESERVATION, UPDATE_RESERVATION } from './mutation'
import { motion } from 'framer-motion'
import { useMoralis } from 'react-moralis'


const BUSY_TEXT = 'Booking your reservation'
const SUCCESS_TEXT = 'Reservation successfully booked'
const ERROR_TEXT = 'Oops! failed booking'
const RESERVE_TEXT = 'Reserve booking'

const EDIT_BUSY_TEXT = 'Change your reservation'
const EDIT_SUCCESS_TEXT = 'Reservation successfully changed'
const EDIT_ERROR_TEXT = 'Oops! failed booking'

type BookerProps = {
  id?: string | number
  editMode?: boolean
}

export const Booker = ({ id, editMode }: BookerProps) => {
  const { setBookingDate, checkInDate, checkOutDate } = useStore((store) => ({
    ...store,
  }))
  const ownerId = useAuthStore((store) => store.userId)

  const { user } = useMoralis()

  const [mutate, { data, loading }] = useMutation(
    editMode ? UPDATE_RESERVATION : CREATE_RESERVATION
  )

  const preparePayload = () => {
    return editMode
      ? { input: { checkOutDate, checkInDate }, id }
      : {
          input: {
            checkOutDate,
            checkInDate,
            hubId: id,
            ownerId,
            address: user.attributes.ethAddress,
          },
        }
  }

  const handleReserveBooking = useCallback(() => {
    //console.log(checkInDate)
    if (checkInDate && checkOutDate && id) {
      toast.promise(
        mutate({
          variables: {
            ...preparePayload(),
          },
        }),
        {
          loading: editMode ? EDIT_BUSY_TEXT : BUSY_TEXT,
          success: editMode ? EDIT_SUCCESS_TEXT : SUCCESS_TEXT,
          error: editMode ? EDIT_ERROR_TEXT : ERROR_TEXT,
        }
      )
    }
  }, [checkOutDate, checkInDate, id])

  useEffect(() => {
    console.log(user.attributes.ethAddress)
    if (data) {
      const id = data?.createReservation?.id
      id && navigate(routes.confirmReservation({ id }))
    }
    return () => {}
  }, [loading])

  return (
    <div className="space-y-[17px]">
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
        <ReservationWidget onDateChange={setBookingDate} />
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
        <OwnerScoreWidget />
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
        <Button onClick={handleReserveBooking} text={RESERVE_TEXT} />
      </motion.div>
    </div>
  )
}
