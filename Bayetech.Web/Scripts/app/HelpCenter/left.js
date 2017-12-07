//左侧模板
define([], function () {
    var html = `<div class="help_left" id="help_left">
            <h3>使用帮助</h3>
            <ul v-for="value in list">
                <ol>
                    <a>{{ value.Title }}</a>
                </ol>
                <li :class="value.class" v-for="item in value.Items">
                    <a @click="view(item.ID)">{{ item.Title }}</a>
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
