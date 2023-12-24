import React from "react";
import { Alert, Table } from "react-bootstrap";
import { useAppContext } from "../../../../AppContext";

const HoursTab = () => {
  const { basicInfo } = useAppContext();

  const convertTo12HourFormat = (time24hr: string) => {
    let timeArray = time24hr.split(":");
    let hours = parseInt(timeArray[0], 10);
    let minutes = parseInt(timeArray[1], 10);
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 ? hours % 12 : 12; // 0 should be converted to 12 in 12-hour format
    let minuteString = minutes < 10 ? "0" + minutes : minutes;
    return hours.toString() + ":" + minuteString + " " + period;
  };

  const getCurrentDay = () => {
    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let today = new Date();
    let dayIndex = today.getDay();
    return daysOfWeek[dayIndex];
  };
  let currentDay = getCurrentDay();

  function isCurrentlyOpen(hours: { day: string; open: string; close: string }[]): boolean {
    const dayMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate = new Date();
    const currentDay = dayMap[currentDate.getDay()];
    // Get current time as integer HHMM format
    const hrs = currentDate.getHours();
    const mins = currentDate.getMinutes();
    const currentTime = hrs * 100 + mins;
    const todaySchedule = hours.find((day) => day.day === currentDay);
    if (todaySchedule) {
      const openingTime = Number(todaySchedule.open.replace(":", ""));
      const closingTime = Number(todaySchedule.close.replace(":", ""));
      const isOpen = currentTime >= openingTime && currentTime <= closingTime;
      return isOpen;
    }
    return false;
  }
  const restaurantIsOpen: boolean = isCurrentlyOpen(basicInfo?.hours);

  return (
    <section>
      <Alert variant={restaurantIsOpen ? "success" : "danger"}>
        We are currently&nbsp;{restaurantIsOpen ? "open" : "closed"}
      </Alert>
      <Table striped bordered hover>
        <tbody>
          {basicInfo.hours.map((x) => {
            let statusColor = `bg-${currentDay === x.day && restaurantIsOpen ? "success" : "danger"}-subtle`;
            return (
              <tr key={x.day}>
                <td className={`text-end ${currentDay === x.day ? statusColor : ""}`}>{x.day}</td>
                <td className={`text-end ${currentDay === x.day ? statusColor : ""}`}>
                  {convertTo12HourFormat(x.open)}
                </td>
                <td className={`text-end ${currentDay === x.day ? statusColor : ""}`}>
                  {convertTo12HourFormat(x.close)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </section>
  );
};

export default HoursTab;
