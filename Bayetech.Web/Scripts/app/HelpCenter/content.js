//底部模板1
define([], function (Vue) {
    var html = `<div class="help_gg" style="text-align:left;">
                    <h1>7881交易流程</h1>
                    <ul>
                      <li v-html="article.content"></li>
                    </ul>
                </div>`;
    //<li :is="item.component" :text="item.text" v-for="item in items"></li>
    var data = {
        object: [],
    };

    var components = {
        name:"help-content",
        template: html,
        props: ['article'],
        data() {
            return data;
        },
    };
    return components;
});

