//底部模板1
define([], function (Vue) {
    var html = `<div class="help_gg" style="text-align:left;">
                    <h1>7881交易流程</h1>
                    <ul>
                      <li v-html="object.content"></li>
                    </ul>
                </div>`;

    var components = {
        name:"help-content",
        template: html,
        props: ['object'],
    };
    return components;
});

