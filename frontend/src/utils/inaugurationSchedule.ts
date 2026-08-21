/**
 * Inauguration Schedule Utility
 * 
 * Schedule windows in Asia/Kolkata (IST, UTC+5:30):
 * 1. From now until August 22, 2026 at 10:00 AM IST
 * 2. August 26, 2026 from 11:00 AM IST until 1:00 PM IST (13:00 IST)
 * 
 * Outside these exact windows, the popup will not be displayed.
 */

export interface InaugurationWindow {
  start?: number; // Epoch timestamp ms (optional start)
  end: number;    // Epoch timestamp ms
  label: string;
}

// Fixed ISO strings with explicit IST offset (+05:30) ensure exact calculation in all visitor timezones
export const INAUGURATION_WINDOWS: InaugurationWindow[] = [
  {
    // Window 1: From now until August 22, 2026 at 10:00 AM IST
    end: Date.parse('2026-08-22T10:00:00+05:30'),
    label: 'Initial Launch Phase (until Aug 22, 2026, 10:00 AM IST)'
  },
  {
    // Window 2: August 26, 2026 from 11:00 AM IST until 1:00 PM IST
    start: Date.parse('2026-08-26T11:00:00+05:30'),
    end: Date.parse('2026-08-26T13:00:00+05:30'),
    label: 'Formal Inauguration Event (Aug 26, 2026, 11:00 AM - 1:00 PM IST)'
  }
];

/**
 * Checks whether the specified time is within any active inauguration window.
 * @param currentTime Epoch timestamp ms or Date object (defaults to Date.now())
 * @returns boolean
 */
export function isWithinInaugurationWindow(
  currentTime: number | Date = Date.now()
): boolean {
  const nowMs = typeof currentTime === 'number' ? currentTime : currentTime.getTime();

  return INAUGURATION_WINDOWS.some((window) => {
    const isAfterStart = window.start !== undefined ? nowMs >= window.start : true;
    const isBeforeEnd = nowMs <= window.end;
    return isAfterStart && isBeforeEnd;
  });
}
