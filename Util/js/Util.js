/**
 * JS下的Util工具类
 */
export default class Util {
  /**
   * 构造函数
   * @param {Object} yearData 年的数据包
   * @param {Object} common 公共的数据包
   */
  constructor(yearData, commonData) {
    this.yearData = yearData;
    this.commonData = commonData;
    this.festivals = {};
    for (const key in this.commonData.festivals) {
      let arr = this.commonData.festivals[key];
      if (this.yearData.festivals.hasOwnProperty(key)) {
        //包含
        this.festivals[key] = [...arr, ...this.yearData.festivals[key]];
      } else {
        //不包含
        this.festivals[key] = this.commonData.festivals[key];
      }
    }
  }
  /**
   * 指定日期是否上班
   * @param {String} date 日期，格式MM-DD（如：01-01）
   * @return {boolean}
   */
  getWork(date) {
    let work = this.yearData.work;
    return work.indexOf(date) !== -1;
  }
  /**
   * 指定日期是否休息
   * @param {String} date 日期，格式MM-DD（如：01-01）
   * @return {boolean}
   */
  getRest(date) {
    let rest = this.yearData.rest;
    return rest.indexOf(date) !== -1;
  }
  /**
   * 获取指定日期节日名称(name)
   * @param {String} date 日期，格式MM-DD（如：01-01）
   * @return {Array}
   */
  getFestivalNameArray(date) {
    return this.festivals[date].map((obj) => obj.name);
  }
  /**
   * 获取指定日期节日列表
   * @param {String} date 日期，格式MM-DD（如：01-01）
   * @return {Array}
   */
  getFestivalArray(date) {
    return this.festivals[date];
  }
}
