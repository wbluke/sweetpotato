const monthDiff = (d1: Date, d2: Date): number => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

const isSameYearMonth = (d1: Date, d2: Date) => {
  return monthDiff(d1, d2) === 0
    && monthDiff(d2, d1) === 0
}

export {
  monthDiff,
  isSameYearMonth,
};

