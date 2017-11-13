//头部模板
define("PersonRight", jsconfig.baseArr, function (Vue, $, common) {
    var html = `
            <div class="help_gg" style="text-align:left;">
                    <h1>7881交易流程</h1>
                    <ul>
                      <li v-html="object.content"></li>
                    </ul>
                </div>
        `
    var components = {
        template: html,
        props: ['object'],


    };

    return components;
});