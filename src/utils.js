export const toNumber = (value) => {
  if (typeof value === "string") {
    return Number(value.replace(/[^\d]/g, ""));
  }

  return value;
};

export const declineYears = (value) => {
  if (value === 21 || value === 1) {
    return "год";
  }

  if ((value >= 22 && value <= 24) || (value >= 2 && value <= 4)) {
    return "года";
  }

  return "лет";
};

export const zeroFill = (number, width) => {
  width -= number.toString().length;

  if (width > 0) {
    return new Array(width + (/\./.test(number) ? 2 : 1)).join("0") + number;
  }

  return number + "";
};
