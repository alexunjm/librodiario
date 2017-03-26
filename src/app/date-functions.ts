export class DateFunctions {

  private static _instace: DateFunctions;
  private month;

  private constructor() {

    this.month = new Array();
    this.month[0] = "January";
    this.month[1] = "February";
    this.month[2] = "March";
    this.month[3] = "April";
    this.month[4] = "May";
    this.month[5] = "June";
    this.month[6] = "July";
    this.month[7] = "August";
    this.month[8] = "September";
    this.month[9] = "October";
    this.month[10] = "November";
    this.month[11] = "December";
  }

  public static getInstance(): DateFunctions {
    if(!DateFunctions._instace) {
      DateFunctions._instace = new DateFunctions();
    }
    return DateFunctions._instace;
  }

  defaultFormat(date: Date, separator = '/'): string {
    var mm = date.getMonth() + 1;
    var dd = date.getDate();
    return [
      (dd > 9 ? '' : '0') + dd,
      (mm > 9 ? '' : '0') + mm,
      date.getFullYear(),
    ].join(separator);
  }

  getDate(dateStr: string, splitter = '-'): Date {
    var e = dateStr.split(splitter);
    var d = new Date(Date.UTC(parseInt(e[0]), parseInt(e[1])-1, parseInt(e[2])));
    d.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    return d;
  }

  getMonth(date: Date) {
    return this.month[date.getMonth()];
  }

}
