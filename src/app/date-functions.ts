export class DateFunctions {

  private static _instace: DateFunctions;

  private constructor() {
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

}
