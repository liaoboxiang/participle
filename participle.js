/**
 * Created by sscf on 2017/10/16.
 */
var participle = module.exports;
var nodejieba = require("nodejieba");

// 分割字符串
participle.cut = function(text){
    var result = nodejieba.cut(text);
    return result;
};


participle.extract = function(text, topN){
    var result = extract.cut(text, topN);
    return result;
};