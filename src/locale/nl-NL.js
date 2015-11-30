import locale from "../locale";

export default locale({
  dateTime: "%a %e %B %Y %T",
  date: "%d-%m-%Y",
  time: "%H:%M:%S",
  periods: ["AM", "PM"], // unused
  days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
  shortDays: ["zo", "ma", "di", "wo", "do", "vr", "za"],
  months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
  shortMonths: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
});
