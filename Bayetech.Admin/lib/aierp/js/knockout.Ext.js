//#region 公共方法
//将json对象转换为Knockout viewModel对象

self.JsonToViewModel = function (jsonData, viewModel) {
    ko.mapping.fromJSON(jsonData, {}, viewModel);
}

//将json对象转换为Knockout viewModel对象,可以选择忽略字段属性
self.JsonToViewModel_Ignore = function (jsonData, viewModel, mapping) {
    var d = ko.mapping.fromJSON(jsonData, mapping);
    //设置Model中的observable数据
    for (var obj in d) {
        if (ko.isWriteableObservable(d[obj])) {
            viewModel[obj](d[obj]());
        }
    }
}

//将js对象转换为viewModel
self.ObjectToViewModel = function (object, viewModel) {
    ko.mapping.fromJS(object, {}, viewModel);
}

//清空对象基方法
self.ClearBase = function (viewModel) {
    //清除Model中的observable数据
    for (var obj in viewModel) {
        if (ko.isWriteableObservable(viewModel[obj])) {
            switch (typeof (viewModel[obj]())) {
                case 'boolean':
                    viewModel[obj](false);
                    break;
                case 'number':
                    viewModel[obj](0);
                    break;
                case 'string':
                    viewModel[obj]("");
                    break;
                default:
                    viewModel[obj]("");
                    break;
            }
        }
    }

}

//时间替换T
self.replaceTimeStr = function (v) {
    if (v() !== null) {
        v(v().replace('T', ' ').substr(0, 19));
    }
}

//日期范围比较
self.CompareDate = function (v1, v2) {
    var d1 = new Date(v1().replace(/\-/g, "\/"));
    var d2 = new Date(v2().replace(/\-/g, "\/"));
    if (d1 > d2) {
        layer.alert('开始日期不能大于结束日期');
        //v1(v2());
        return false;
    } else {
        return true;
    }
}

//根据对象数组组合出Select2所需的数据,data类型为后台返回json数组，filedName为要显示的字段名称
self.GetComboxData = function (data, filedName) {
    var comboxData = [];
    var array = JSON.parse(data);
    //var ar;
    //for (var i = 0; i < array.length; i++) {
    //    ar = array[i];
    //    comboxData.push({ id: ar.KeyId, text: eval('ar.' + filedName) });
    //}
    //return comboxData;

    return $.map(array,
        function (obj) {
            obj.id = obj.id || obj.KeyId; // replace pk with your identifier
            obj.text = eval('obj.' + filedName);
            return obj;
        });
}

self.Message = function (msg, msgType) {
    $.scojs_message(msg, (msgType) ? $.scojs_message.TYPE_OK : $.scojs_message.TYPE_ERROR);
}

//错误处理
self.AjaxErrorHandle = function (data) {
    if (data.ErrorCode === '103') {
        reLogin();
    } else {
        self.Message(data.ErrorMsg, false);
    }
}

//输出结果
self.WriteResult = function (data) {
    //console.info(data);
    var result = JSON.parse(data);
    self.Message(result.ErrorMsg, result.Success);
};

            //#endregion