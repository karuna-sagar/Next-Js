import React from "react";
import ReservationForm from "./ReservationForm";
import DateSelector from "./DateSelector";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import LoginMessage from "./LoginMessage";
import { auth } from "../_lib/auth";

export default async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth();

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        cabin={cabin}
        settings={settings}
        bookedDates={bookedDates}
      />
      {session.user ? (
        <ReservationForm
          cabin={cabin}
          user={session.user}
        />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
