export function formatDigitalTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return [hours, minutes, remainingSeconds]
      .map((unit) => String(unit).padStart(2, "0"))
      .join(":");
  }

  return [minutes, remainingSeconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");
}
