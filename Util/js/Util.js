/**
 * 【javascript语言】FestivalsUtil工具类
 */
export default class FestivalsUtil {
  /**
   * 构造函数
   * @param {Object} festivalsData 节日信息数据包
   * @param {Object} yearsData 每年休息/加班数据包
   */
  constructor(festivalsData, yearsData) {
    this.festivalsData = festivalsData;
    this.yearsData = yearsData;
  }
  /**
   * 指定日期是否上班
   * @param {String} year 年，格式YYYY（如：2023）
   * @param {String} date 日期，格式MM-DD（如：01-01）
   * @return {boolean}
   */
  getWork(year, date) {
    if (this.yearsData.hasOwnProperty(year)) {
      let work = this.yearsData[year].work;
      return work.indexOf(date) !== -1;
    }
    return false;
  }
  /**
   * 指定日期是否休息
   * @param {String} year 年，格式YYYY（如：2023）
   * @param {String} date 日期，格式MM-DD（如：01-01）
   * @return {boolean}
   */
  getRest(year, date) {
    if (this.yearsData.hasOwnProperty(year)) {
      let rest = this.yearsData[year].rest;
      return rest.indexOf(date) !== -1;
    }
    return false;
  }
  /**
   * 获取指定日期节日列表
   * @param {String} year 年，格式YYYY（如：2023）
   * @param {String} date 日期，格式MM-DD（如：01-01）
   * @return {Array}
   */
  getFestivalArray(year, date) {
    let arr = [];
    for (let key in this.festivalsData) {
      let obj = this.festivalsData[key];
      if (obj.date && obj.date == date) {
        arr.push(obj);
      } else if (obj.dates && obj.dates.includes(year + "-" + date)) {
        arr.push(obj);
      }
    }
    return arr;
  }
}
