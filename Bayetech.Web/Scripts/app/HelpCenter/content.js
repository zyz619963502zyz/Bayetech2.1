//底部模板1
define([], function (Vue) {
    var html = `<div class="help_gg" style="text-align:left;">
                    <h1>7881交易流程</h1>
                    <ul>
                        <li><img src="../../Content/Images/wymlc.jpg"></li>
                        <li></li>
                    </ul>
                </div>`;

    var data = {
        object: [],
    };

    var components = {
        name:"help-content",
        template: html,
        data() {
            return data;
        },
    };
    return components;
});

