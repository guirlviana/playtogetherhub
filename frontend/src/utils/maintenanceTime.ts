export function isOnMaintenanceTime() {
  const ENVIROMENT = process.env.NODE_ENV;
  const isDevelopmentEnviroment = ENVIROMENT === "development";
  if (isDevelopmentEnviroment) return false;

  const now = new Date();
  const currentHourUTC = now.getUTCHours();

  const startHourUTC = 9;
  const endHourUTC = 22;

  return currentHourUTC < startHourUTC || currentHourUTC >= endHourUTC;
}
