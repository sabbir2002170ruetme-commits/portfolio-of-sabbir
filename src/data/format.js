export function dateReadable(dateStr) {
  if (!dateStr) return "";
  const [year, month] = String(dateStr).split("-");
  const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (month) return `${months[parseInt(month, 10)]} ${year}`;
  return year;
}

export function currentYear() {
  return new Date().getFullYear();
}
