# (中国)每年节日列表数据

## :envelope_with_arrow:当每年国务院发布次年的节假日安排的通知后，随后不久将更新一个json文件，格式为：年.json

## :alarm_clock:使用说明

1. <年>.json的数据文件是一个对象，属性解释

   | 属性名              | 说明                                                         | 必填 |
   | ------------------- | ------------------------------------------------------------ | ---- |
   | rest                | 当前年哪些日子是放假休息，数组，格式01-01                    | 是   |
   | work                | 当前年哪些日子是放假休息，数组，格式01-01                    | 是   |
   | festivals           | 当前年的节日列表，对象，没有包含每年固定日期的节日，需要与common_festivals.json合并使用，以下是属性说明 | 是   |
   | > 键                | 日期                                                         | 是   |
   | > as                | 别名，固定的，如果需要判断是否为某个节日，建议开发者使用别名来判断 | 是   |
   | > name              | 节日名称                                                     | 是   |
   | > en                | 节日名称的英文翻译（节日判断请使用as属性，name和en属性有概率会改动，请提前做好预置） | 是   |
   | > solar_terms_order | 中国农历24节气的第几个节气，1-24。24个节气可能会是跨年的，请开发者自行计算好。如果这个节日不是24节气则没有这个属性 | 否   |

2. 节日别名(as)的对应表

   | 别名         | 节日         |
   | ------------ | ------------ |
   | xiaohan      | 小寒         |
   | chuxi        | 除夕夜       |
   | chunjie      | 春节         |
   | lichun       | 立春         |
   | yuanxiao     | 元宵节       |
   | yushui       | 雨水         |
   | longtou      | 龙头节       |
   | jingzhe      | 惊蛰         |
   | chunfen      | 春分         |
   | qingming     | 清明节       |
   | fuhuojie     | 复活节       |
   | guyu         | 谷雨         |
   | lixia        | 立夏         |
   | muqinjie     | 母亲节       |
   | xiaoman      | 小满         |
   | mangzhong    | 芒种         |
   | fuqinjie     | 父亲节       |
   | xiazhi       | 夏至         |
   | duanwu       | 端午节       |
   | xiaoshu      | 小暑         |
   | dashu        | 大暑         |
   | liqiu        | 立秋         |
   | qixi         | 七夕节       |
   | chushu       | 处暑         |
   | zhongyuanjie | 中元节       |
   | bailu        | 白露         |
   | qiufen       | 秋分         |
   | zhongqiu     | 中秋节       |
   | hanshuang    | 寒霜         |
   | chongyang    | 重阳节       |
   | shuangjiang  | 霜降         |
   | lidong       | 立冬         |
   | xiaoxue      | 小雪         |
   | ganenjie     | 感恩节       |
   | daxue        | 大雪         |
   | dongzhi      | 冬至         |
   | yuandan      | 元旦         |
   | qingrenjie   | 情人节       |
   | funvjie      | 妇女节       |
   | zhishujie    | 植树节       |
   | sanyaowu     | 消费者权益日 |
   | yurenjie     | 愚人节       |
   | laodongjie   | 劳动节       |
   | jiandangjie  | 建党节       |
   | jianjunjie   | 建军节       |
   | jiaoshijie   | 教师节       |
   | guoqingjie   | 国庆节       |
   | wanshengye   | 万圣夜       |
   | wanshengjie  | 万圣节       |
   | pinganye     | 平安夜       |
   | shengdanjie  | 圣诞节       |
   | dahan        | 大寒         |

3. 其他json文件说明

   | 文件名                | 名称               | 说明                                                         |
   | --------------------- | ------------------ | ------------------------------------------------------------ |
   | common_festivals.json | 公共的节日数据列表 | 每年固定的（公历）日期的节日列表，对象结构，和单个每年的festivals属性结构一致，见上文 |

## :hammer:更多

- 欢迎一起贡献
- 欢迎打赏激励我和我们所有的贡献者
- 微信号：**_xiaoxing1617**（前面有一个下划线）
- 如有不当的信息可以联系我们进行更改或校正
- 如有建议或者问题也欢迎联系我们

## 贡献者名单

- 小星xiaoxing：https://github.com/xiaoxing1617/

## 加微信拉你进微信交流群