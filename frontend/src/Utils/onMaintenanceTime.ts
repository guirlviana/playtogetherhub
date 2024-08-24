const saturday = 6
const sunday = 7

export function isOnMaintenanceTime() {
  const ENVIROMENT = process.env.NODE_ENV;
  const isDevelopmentEnviroment = ENVIROMENT === "development";
  if (isDevelopmentEnviroment) return false;

  const now = new Date();
  
  if ([saturday, sunday].includes(now.getDay())) return true

  
  const currentHourUTC = now.getUTCHours();
  const startHourUTC = 9;
  const endHourUTC = 22;

  return currentHourUTC < startHourUTC || currentHourUTC >= endHourUTC;
}
