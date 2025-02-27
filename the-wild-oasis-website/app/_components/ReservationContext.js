"use Client";
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();
const intitalState = { from: undefined, to: undefined };
function ReservationProvider({ children }) {
  const [range, setRange] = useState(intitalState);
  return (
    <ReservationContext.Provider value={{ range, setRange }}>
      {children}
    </ReservationContext.Provider>
  );
}
function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("Context was used outside provider");
  }
  return context;
}
export { ReservationProvider, useReservation };
