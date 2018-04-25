//两列自定义绑定
{
    ko.bindingHandlers.comboBox_Options = {//绑定CombBox数据
        init: function (element, valueAccessor, allBindingsAccessor, viewModal) {
            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);
            $(element).ComboBox({
                data: valueUnwrapped,
                display: [
                    { text: "编号", value: "code" },
                    { text: "名称", value: "name" }
                ],
                displayValue: "code",
                value: "code",
                twidth: '116px'
            });
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModal) {
            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);
            $(element).Reload({ data: valueUnwrapped });    // 重新绑定option数据
            //allBindingsAccessor.get("comboBox_Value3")("");  // option绑定数据变化时，清除combobox value绑定值
        }
    }

    ko.bindingHandlers.comboBox_OptionsName = {//绑定CombBox数据，与上面方法的区别在于，combox显示的值为标题，上面的方法显示的是编号
        init: function (element, valueAccessor, allBindingsAccessor, viewModal) {
            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);
            $(element).ComboBox({
                data: valueUnwrapped,
                display: [
                    { text: "编号", value: "code" },
                    { text: "名称", value: "name" }
                ],
                displayValue: "name",
                value: "code",
                twidth: '116px'
            });
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModal) {
            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);
            $(element).Reload({ data: valueUnwrapped });    // 重新绑定option数据
            //allBindingsAccessor.get("comboBox_Value3")("");  // option绑定数据变化时，清除combobox value绑定值
        }
    }

    // knockout 自定义combobox值绑定
    ko.bindingHandlers.comboBox_Value = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModal) {
            var values = valueAccessor();
            $(element).change(function (e, value, data) {   // 设置变更事件
                if (value) {
                    values(value);
                }
                else {
                    values("");
                }
            });
        },
        update: function (element, valueAccessor) {
            if ($(element).attr("type") == "ComboBox") {
                var value = valueAccessor();
                var valueUnwrapped = ko.unwrap(value);
                var selectValue = $(element)[0].setValue(valueUnwrapped);   // 根据value值设置combobox选项值
            }
        }
    }

    // knockout 自定义combobox文本绑定
    ko.bindingHandlers.comboBox_Text = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModal) {
            var values = valueAccessor();
            $(element).change(function (e, value, data) {   // 设置变更事件
                if ($(element).find('input').val()) {
                    console.debug('change:' + $(element).find('input').val());
                    values($(element).find('input').val())
                }
                else {
                    //values("");
                }
            });
        }
    }
}

//一列自定义绑定
{
    ko.bindingHandlers.comboBox_OptionsOne = {//绑定CombBox数据
        init: function (element, valueAccessor, allBindingsAccessor, viewModal) {
            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);
            $(element).ComboBox({
                data: valueUnwrapped,
                display: [
                    { text: "名称", value: "name" }
                ],
                displayValue: "name",
                value: "name",
                twidth: '116px'
            });
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModal) {
            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);
            $(element).Reload({ data: valueUnwrapped });    // 重新绑定option数据
            allBindingsAccessor.get("comboBox_ValueOne")("");  // option绑定数据变化时，清除combobox value绑定值
        }
    }

    // knockout 自定义combobox值绑定
    ko.bindingHandlers.comboBox_ValueOne = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModal) {
            var values = valueAccessor();
            $(element).change(function (e, value, data) {   // 设置变更事件
                if (value) {
                    values(value);
                }
                else {
                    values("");
                }
            });
        },
        update: function (element, valueAccessor) {
            if ($(element).attr("type") == "ComboBox") {
                var value = valueAccessor();
                var valueUnwrapped = ko.unwrap(value);
                var selectValue = $(element)[0].setValue(valueUnwrapped);   // 根据value值设置combobox选项值
            }
        }
    }

    // knockout 自定义combobox文本绑定
    ko.bindingHandlers.comboBox_TextOne = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModal) {
            var values = valueAccessor();
            $(element).change(function (e, value, data) {   // 设置变更事件
                if (value) {
                    values($(e.target).find('input').val())
                }
                else {
                    values("");
                }
            });
        }
    }
}

var initialKnockout = function () {


}