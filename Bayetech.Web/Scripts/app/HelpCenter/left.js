//左侧模板
define([], function () {
    debugger;
    var html = `<div class="help_left" id="help_left">
            <h3>使用帮助</h3>
            <ul v-for="value in list">
                <ol>
                    <a>{{ value.title }}</a>
                </ol>
                <li :class="value.class" v-for="item in value.items">
                    <a @click="view(item.itemid)">{{ item.title }}</a>
                </li >
            </ul >
        </div>`;

    var components = {
        props: ['list'],
        name: "help-left",
        template: html,
        methods: {
            view(itemId) {
                this.$parent.view(itemId);
                //this.$emit('view', itemId);
            },
        }
    };
    return components;
});
