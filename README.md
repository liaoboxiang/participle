# participle
a server for words division by nodejieba
服务器需要部署在linux环境下


### 完整分词
* API:/cut
* METHOD: get

*  请求参数说明:
名称 | 类型 | 必传 | 说明 | 例子
---|--- | ---|--- | ---|
text | string | Y  | 中文句子 | ""

* 返回格式:Json
* 返回参数说明：
```
{
    code: 0,
    msg: "成功",
    module: "stock.business.stock",
    data: {
        date: 20170911,
        code: "300676",
        status: 3
    }
}