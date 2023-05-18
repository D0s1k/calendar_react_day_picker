import React from "react";
import "./Calendar.scss";
import { addDays, format } from "date-fns";
import { ru } from "date-fns/locale";
import {
  DateRange,
  DayPicker,
  SelectRangeEventHandler,
} from "react-day-picker";

interface CalendarProps {
  selectedDays: DateRange | undefined;
  onSelect: SelectRangeEventHandler;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDays, onSelect }) => {
  const pastMonth = new Date();
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 0),
  };

  let footer = <p>Выберите период отпуска сотрудника</p>;
  if (selectedDays?.from) {
    if (!selectedDays.to) {
      footer = <p>{format(selectedDays.from, "PPP", { locale: ru })}</p>;
    } else if (selectedDays.to) {
      footer = (
        <p className="footer">
          {`${format(selectedDays.from, "PPP", { locale: ru })} - ${format(
            selectedDays.to,
            "PPP",
            { locale: ru }
          )}`.split(".")}
        </p>
      );
    }
  }

  return (
    <DayPicker
      locale={ru}
      ISOWeek
      showOutsideDays
      id="test"
      mode="range"
      captionLayout="dropdown"
      selected={selectedDays || defaultSelected}
      footer={footer}
      onSelect={onSelect}
    />
  );
};

export default Calendar;