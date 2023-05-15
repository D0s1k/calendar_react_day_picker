import React, { useState } from "react";

import "./Calendar.scss";

import { addDays, format } from "date-fns";
import { ru } from "date-fns/locale";
import { DateRange, DayPicker } from "react-day-picker";

const pastMonth = new Date();

export default function Calendar() {
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 0),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let footer = <p>Выберите период отпуска сотрудника</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")} - {format(range.to, "PPP")}
        </p>
      );
    }
  }

  return (
    <DayPicker
      locale={ru}
      id="test"
      mode="range"
      captionLayout="dropdown-buttons"
      selected={range}
      footer={footer}
      onSelect={setRange}
    />
  );
}
