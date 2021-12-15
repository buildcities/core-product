type TimePickerProps = {
  day: string
}
const TimePicker = ({ day }: TimePickerProps) => {
  return (
    <div className="flex items-center w-80 ml-4 mr-11">
      <select
        name={`${day}-from-time`}
        className="bg-[#171717] text-lg appearance-none outline-none border-0 rounded-xl focus:border-0"
      >
        <option value="12:00AM">12:00AM</option>
        <option value="12:30AM">12:30AM</option>
        <option value="1:00AM">1:00AM</option>
        <option value="1:30AM">1:30AM</option>
        <option value="2:00AM">2:00AM</option>
        <option value="2:30AM">2:30AM</option>
        <option value="3:00AM">3:00AM</option>
        <option value="3:30AM">3:30AM</option>
        <option value="4:00AM">4:00AM</option>
        <option value="4:30AM">4:30AM</option>
        <option value="5:00AM">5:00AM</option>
        <option value="5:30AM">5:30AM</option>
        <option value="6:00AM">6:00AM</option>
        <option value="6:30AM">6:30AM</option>
        <option value="7:00AM">7:00AM</option>
        <option value="7:30AM">7:30AM</option>
        <option value="8:00AM">8:00AM</option>
        <option value="8:30AM">8:30AM</option>
        <option value="9:00AM">9:00AM</option>
        <option value="9:30AM">9:30AM</option>
        <option value="10:00AM">10:00AM</option>
        <option value="10:30AM">10:30AM</option>
        <option value="11:00AM">11:00AM</option>
        <option value="11:30AM">11:30AM</option>
        <option value="12:00PM">12:00PM</option>
        <option value="12:30PM">12:30PM</option>
        <option value="1:00PM">1:00PM</option>
        <option value="1:30PM">1:30PM</option>
        <option value="2:00PM">2:00PM</option>
        <option value="2:30PM">2:30PM</option>
        <option value="3:00PM">3:00PM</option>
        <option value="3:30PM">3:30PM</option>
        <option value="4:00PM">4:00PM</option>
        <option value="4:30PM">4:30PM</option>
        <option value="5:00PM">5:00PM</option>
        <option value="5:30PM">5:30PM</option>
        <option value="6:00PM">6:00PM</option>
        <option value="6:30PM">6:30PM</option>
        <option value="7:00PM">7:00PM</option>
        <option value="7:30PM">7:30PM</option>
        <option value="8:00PM">8:00PM</option>
        <option value="8:30PM">8:30PM</option>
        <option value="9:00PM">9:00PM</option>
        <option value="9:30PM">9:30PM</option>
        <option value="10:00PM">10:00PM</option>
        <option value="10:30PM">10:30PM</option>
        <option value="11:00PM">11:00PM</option>
        <option value="11:30PM">11:30PM</option>
      </select>
      <span className="text-lg text-[#969696] mx-4">TO</span>
      <select
        name={`${day}-to-time`}
        className="bg-[#171717] text-lg appearance-none outline-none border-0 rounded-xl"
      >
        <option value="12:00AM">12:00AM</option>
        <option value="12:30AM">12:30AM</option>
        <option value="1:00AM">1:00AM</option>
        <option value="1:30AM">1:30AM</option>
        <option value="2:00AM">2:00AM</option>
        <option value="2:30AM">2:30AM</option>
        <option value="3:00AM">3:00AM</option>
        <option value="3:30AM">3:30AM</option>
        <option value="4:00AM">4:00AM</option>
        <option value="4:30AM">4:30AM</option>
        <option value="5:00AM">5:00AM</option>
        <option value="5:30AM">5:30AM</option>
        <option value="6:00AM">6:00AM</option>
        <option value="6:30AM">6:30AM</option>
        <option value="7:00AM">7:00AM</option>
        <option value="7:30AM">7:30AM</option>
        <option value="8:00AM">8:00AM</option>
        <option value="8:30AM">8:30AM</option>
        <option value="9:00AM">9:00AM</option>
        <option value="9:30AM">9:30AM</option>
        <option value="10:00AM">10:00AM</option>
        <option value="10:30AM">10:30AM</option>
        <option value="11:00AM">11:00AM</option>
        <option value="11:30AM">11:30AM</option>
        <option value="12:00PM">12:00PM</option>
        <option value="12:30PM">12:30PM</option>
        <option value="1:00PM">1:00PM</option>
        <option value="1:30PM">1:30PM</option>
        <option value="2:00PM">2:00PM</option>
        <option value="2:30PM">2:30PM</option>
        <option value="3:00PM">3:00PM</option>
        <option value="3:30PM">3:30PM</option>
        <option value="4:00PM">4:00PM</option>
        <option value="4:30PM">4:30PM</option>
        <option value="5:00PM">5:00PM</option>
        <option value="5:30PM">5:30PM</option>
        <option value="6:00PM">6:00PM</option>
        <option value="6:30PM">6:30PM</option>
        <option value="7:00PM">7:00PM</option>
        <option value="7:30PM">7:30PM</option>
        <option value="8:00PM">8:00PM</option>
        <option value="8:30PM">8:30PM</option>
        <option value="9:00PM">9:00PM</option>
        <option value="9:30PM">9:30PM</option>
        <option value="10:00PM">10:00PM</option>
        <option value="10:30PM">10:30PM</option>
        <option value="11:00PM">11:00PM</option>
        <option value="11:30PM">11:30PM</option>
      </select>
    </div>
  )
}

export default TimePicker
