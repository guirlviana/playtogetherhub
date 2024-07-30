export function isOnMaintenanceTime() {
    const now = new Date();
    const currentHourUTC = now.getUTCHours();

    const startHourUTC = 9;
    const endHourUTC = 22;

    return currentHourUTC < startHourUTC || currentHourUTC >= endHourUTC;
}