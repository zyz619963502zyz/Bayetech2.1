/*
 * jquery.ComboBox.js
 * 下拉HTML控件
 * @author        张晶
 * @version       1.0.0
 * @requires      jQuery 1.9+ , jquery.control.css
 * @license 
 * Copyright 2013 中华商务联合印刷有限公司
 * 使用方法很简单
 * 1、<div id ="test"></div>
 * 2、$("#test1").ComboBox({
 *      data: [//数据
 *          { name: "张三", value: "1", tel: "123456" },
 *          { name: "李四", value: "2", tel: "123456" },
 *          { name: "王五", value: "3", tel: "123456" },
 *          { name: "赵六", value: "4", tel: "123456" }
 *      ],
 *      display: [//列表显示列
 *          { text: "姓名", value: "name" },
 *          { text: "值", value: "value" },
 *          { text: "电话", value: "tel" },
 *      ],
 *      displayValue: "name",//控件显示列
 *      value:"value"//值
 *  });
 *
 *  $("#test2").ComboBox({
 *      url: CCSHmobi.website + "HR/GetDepartment",//服务地址
 *      display: [
 *          { text: "ID", value: "Dept_ID" },
 *          { text: "部门", value: "Dept_Name" },
 *      ],
 *      c: "Dept_Name",
 *      value:"value"//值
 *  });
 *
 *  $("#test3").ComboBox({
 *      data: [
 *          { name: "张三", value: "1", tel: "123456" },
 *          { name: "李四", value: "2", tel: "123456" },
 *          { name: "王五", value: "3", tel: "123456" },
 *          { name: "赵六", value: "4", tel: "123456" }
 *      ],
 *      display: "name",
 *      value:"value"
 *  });
 *
 *  $("#test4").ComboBox({
 *      url: CCSHmobi.website + "HR/GetDepartment",
 *      display: "Dept_Name",
 *      value:"value"
 *  });
 * 3、可以为控件添加chang事件
 *  $(".combobox").change(function (e,value, data) {
 *      //data为选择的值
 *      console.debug(data);
 *  });
 * API 文档
 */
if (typeof Object.create !== 'function') {
    Object.create = function (obj) {
        function F() { }
        F.prototype = obj;
        return new F();
    };
}
(function ($) {
    $.addComboBox = function (t, p) {
        if (t.comboBox) return false;//return if already exist
        var selectedItem = null;//选择的数据

        p = $.extend({
            url: null,//url
            method: "GET",
            dataType: "json",
            param: {},//参数
            display: null,//显示列
            displayValue: null,//显示值
            value: null,//值
            data: [],//显示数据
            autoLoad: true, //自动下拉功能
            twidth: "160px" // table的最小尺寸，防止内容过多显示问题周瑞修改
        }, p);

        var _html = "<div class=\"input-group\">\
            <input type=\"text\" class=\"form-control\">\
            <span class=\"input-group-btn\">\
                <button class=\"btn btn-default dropDown\" type=\"button\"><span style=\"display:;\" class=\"caret\"></span><div class=\"loading-icon\" style=\"display:none;\"></div></button>\
            </span>\
        </div>";

        $(t).append(_html);
        $(t).attr("type", "ComboBox");

        if (p.autoLoad) {
            init();
        }


        $(".dropDown", t).click(function (e) {//打开下拉列表
            allItemShow();
            $('.dropdown-menu', t).toggle();
            e.stopPropagation();
        });

        $(document).click(function (e) {//点击其他地方，隐藏下拉列表
            $('.dropdown-menu', t).hide();
        });

        $("input", t).on("keyup", function () {//在文本框输入内容触发
            allItemShow();
            selectedItem = null;
            $(t).trigger("change", null, selectedItem);//触发change事件，若不触发，则不能选择值********
            $('.dropdown-menu', t).show();
            search();
        });

        function init() {
            $("table", t).empty(); $("table", t).remove();//先清空后加装
            if (p.data && p.data.length) {
                loadData();
            } else {
                getDataFromServer();
            }
            var isFocus = $("input", t).is(":focus");
            if (true == isFocus) {
                $('.dropdown-menu', t).show();
            } else {
                
            }
        };

        function loadData() {//加载数据
            var model = "";
            
            if (p.display && typeof p.display == "string") {//若显示单个
                model = "ul";
                addULMenu();
            } else if (p.display && typeof p.display == "object") {//若显示多个
                model = "table";
                addTableMenu();
            }
        };

        function addULMenu() {//添加UL列表
            $("ul", t).empty(); $("ul", t).remove();
            if (p.display && typeof p.display == "string") {
                var _ul = $("<ul class=\"dropdown-menu pull-right\" style=\"width: 100%;\"></ul>");
                $(p.data).each(function (i, item) {
                    var _tr = $("<li role=\"presentation\"><a href=\"javascript:void(0)\"><span style=\"display: inline-block\" role=\"menuitem\" tabindex=\"-1\" ></span></a></li>");
                    $("span", _tr).text(item[p.display]);
                    _ul.append(_tr);
                    _tr.click(function () {
                        selectItem(item);
                    });

                });
                $(".input-group", t).append(_ul);
            }
        };

        function addTableMenu() {//添加表格下拉列表
            addTableHead();
            addTableBody();
        };

        function addTableHead() {//添加表及表头
            $("table", t).empty(); $("table", t).remove();
            if (p.display && p.display.length) {
                var _table = $("<table class=\"table table-hover table-condensed dropdown-menu pull-left\" style=\"min-width: " + p.twidth + ";\"><thead><tr></tr></thead><tbody></tbody></table>");
                $(p.display).each(function (index, item) {

                    $("tr", _table).first().append("<th>" + item.text + "</th>");

                });
                $(".input-group", t).append(_table);
            }
        };
        function addTableBody() {//添加数据
            if (p.display && p.display.length && p.data && p.data.length) {
                var _head = $("tbody", t).first();
                $(p.data).each(function (i, dataItem) {
                    var _tr = $("<tr></tr>");
                    _head.append(_tr);
                    $(p.display).each(function (index, item) {
                        _tr.append("<td>" + dataItem[item.value] + "</td>");
                    });
                    $(_tr).click(function () {
                        selectItem(dataItem);
                    });
                });

            }
        };
        function selectItem(item) {//选择行            
            selectedItem = item;
            var text = "";
            if (p.displayValue) {
                text = selectedItem[p.displayValue];
            } else {
                if (p.display && typeof p.display == "string") {
                    text = selectedItem[p.display];
                }
            }
            $("input", t).val(text);
            var value = null;
            if (p.value) {
                value = selectedItem[p.value];
            }
            $(t).trigger("change", value, selectedItem);
        };

        function getDataFromServer() {//从服务器获取数据      

            if (p.url) {
                var btn = $("button", t);
                btn.find("span").hide();
                btn.find("div").show();
                $.ajax({
                    type: p.method,
                    url: p.url,
                    data: p.param,
                    contentType: "application/json",
                    success: function (data) {
                        p.data = data;
                        loadData();
                        btn.find("span").show();
                        btn.find("div").hide();
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert(XMLHttpRequest);
                    }
                });
            }
        };

        function search() {//查询
            var seh = $("input", t).val();
            $("tr", t).each(function () {
                var _tr = this;
                $("td", this).each(function () {
                    var tdText = $(this).text();
                    if (tdText.indexOf(seh) >= 0) {
                        $(_tr).show();
                        return false;
                    }
                    $(_tr).hide();
                });
            });
            $("li", t).each(function () {
                var liText = $(this).find("span").text();
                if (liText.indexOf(seh) >= 0) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        };

        function allItemShow() {//显示所有数据
            $("tr", t).each(function () {
                $(this).show();
            });
            $("li", t).each(function () {
                $(this).show();
            });
        };

        t.comboBox = true;
        t.reload = function (param) {
            p = $.extend(p, { data: [] }, param);
            selectedItem = null;
           // $("input", t).val("");//20150617用于防止刷新清空。2016-03-09 zr注释，因为无法触发keyup事件，一触发填写就被情况了
            init();
        };
        t.getValue = function () {
            if (p.value && selectedItem && selectedItem[p.value]) {
                return selectedItem[p.value];
            }
            return null;
        };
        t.getItem = function () {
            return selectedItem;
        };
        t.setValue = function (newValue) {
            selectedItem = null;
            $("input", t).val("");
            $(p.data).each(function (index, item) {
                var value;
                if (p.value) {
                    value = item[p.value];
                }
                if (value == newValue) {
                    selectItem(item);
                }
            });
        };
        t.clean = function () {
            selectedItem = null;
        };
        return t;
    };
    var docloaded = false;
    $(document).ready(function () {
        docloaded = true;
    });
    $.fn.ComboBox = function (p) {//创建控件
        return this.each(function () {
            if (!docloaded) {
                $(this).hide();
                var t = this;
                $(document).ready(function () {
                    $.addComboBox(t, p);
                });
            } else {
                $.addComboBox(this, p);
            }
        });
    };
    $.fn.Reload = function (p) {
       
        return this.each(function () {
            if (this.comboBox) {
                this.reload(p);
            }
        });
    };
})(jQuery);

