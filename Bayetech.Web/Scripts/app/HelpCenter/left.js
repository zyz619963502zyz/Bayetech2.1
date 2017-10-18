//左侧模板
define(['vue', 'jquery', 'common'], function (Vue, $, common) {
    var findListUrl = "/api/Article/FindList"; //查询列表
    var findContentUrl = "/api/Article/FindContent"; //查询详情
    //:onclick="value.clickFn"
    var html = `<div class="help_left" id="help_left">
            <h3>使用帮助</h3>
            <ul v-for="value in object">
                <ol>
                    <a>{{ value.title }}</a>
                </ol>
                <li :class="value.class" v-for="item in value.items">
                    <a @click="view(item.itemid)">{{ item.title }}</a>
                </li >
            </ul >
        </div>`;
    //@click="goToFatherDetail(233)"@click="view(item.itemid)"
    var helpLeft = {
        props: ['object'],
        name: "help-left",
        template: html,
        methods: {
            view(itemId) {
                this.$parent.view(itemId);
                //this.$emit('view', itemId);
            },
        }
    };
    return helpLeft;
});
