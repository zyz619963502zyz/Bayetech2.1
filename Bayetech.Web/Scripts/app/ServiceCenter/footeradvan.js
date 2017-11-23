//头部模板
define(jsconfig.baseArr, function (Vue, $, common) {
    var html = `
         <div class ="advan">
                <ul>
                    <li v-for="item in list"  v-bind:class ="item.cl">{{item.text }}</li>
                </ul>
            </div>
        `
    var components = {
        template: html,
        props: ['list'],
    };
    return components;
});