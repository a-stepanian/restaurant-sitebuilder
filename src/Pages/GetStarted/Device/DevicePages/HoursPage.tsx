import React from "react";
import { Alert, Table } from "react-bootstrap";
import { useAppContext } from "../../../../AppContext";
import EditableTime from "../DeviceComponents/EditableTime";

const HoursPage = () => {
  const { basicInfo, device, updateBasicInfo } = useAppContext();

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
    <div
      className={`mt-5 d-flex align-items-center justify-content-center bg-frosted border border-black p-1 pt-3 rounded-2 ${
        device === "mobile" ? "flex-column" : ""
      }`}>
      <Alert variant={restaurantIsOpen ? "success" : "danger"}>
        We are currently&nbsp;{restaurantIsOpen ? "open" : "closed"}
      </Alert>
      <Table variant="dark" striped bordered className="w-auto" style={{ borderRadius: "6px", overflow: "hidden" }}>
        <tbody>
          {basicInfo.hours.map((x) => {
            let statusColor = `bg-${currentDay === x.day && restaurantIsOpen ? "success" : "danger"}-subtle`;
            return (
              <tr key={x.day}>
                <td className={`text-end ${currentDay === x.day ? statusColor : ""}`}>{x.day}</td>
                <td className={`text-end ${currentDay === x.day ? statusColor : ""}`}>
                  <EditableTime
                    innerJSX={<span>{convertTo12HourFormat(x.open)}</span>}
                    initialTime={convertTo12HourFormat(x.open)}
                    day={x.day}
                    onSave={(day: string, editedText: string) => {
                      const dayObject = basicInfo.hours.find((dayObject) => dayObject.day === day);
                      if (dayObject) {
                        dayObject.open = editedText;
                        updateBasicInfo({
                          ...basicInfo,
                          hours: [...basicInfo.hours.filter((x) => x.day !== day), dayObject].sort(
                            (a, b) => a.order - b.order
                          ),
                        });
                      }
                    }}
                  />
                </td>
                <td className={`text-end ${currentDay === x.day ? statusColor : ""}`}>
                  <EditableTime
                    innerJSX={<span>{convertTo12HourFormat(x.close)}</span>}
                    initialTime={convertTo12HourFormat(x.close)}
                    day={x.day}
                    onSave={(day: string, editedText: string) => {
                      const dayObject = basicInfo.hours.find((dayObject) => dayObject.day === day);
                      if (dayObject) {
                        dayObject.close = editedText;
                        updateBasicInfo({
                          ...basicInfo,
                          hours: [...basicInfo.hours.filter((x) => x.day !== day), dayObject].sort(
                            (a, b) => a.order - b.order
                          ),
                        });
                      }
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default HoursPage;
