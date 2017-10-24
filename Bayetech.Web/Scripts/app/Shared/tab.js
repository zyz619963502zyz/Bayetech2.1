//通用tab
define(['common'], function (common) {
    var html = `<div class="index-tab">
        <div class="index-tab-top tab-03">
            <ul class="clearfix">
                <li v-for="item in data.type">
                   <a target="_blank"  @click="switchtab(item.id)">{{item.name}}</a>
                </li>
            </ul>
        </div>
        <div class="index-tab-bot">
            <div class="index-tab-item" >
                <div :class="data.boxstyle">
                    <ul>
                        <li v-for="item in list">
                           <slot :obj="item"></slot>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;
    //gg-box qa-box deal-top-box <a :href="item.htmlurl" target="_blank">{{item.urltext}}</a> <slot name="centent" :obj="item"></slot>

    var data = {
        list: {},
    };

    var components = {
        name: "tab",
        props: ['data'],
        data() {
            return data;
        },
        created() {
            this.switchtab(this.data.default);
        },
        template: html,
        methods: {
            switchtab(itemId) {
                var obj = common.FindObjByProp(this.data.obj, "id", itemId);
                this.list = obj.content;
            },
            view(itemId) {
                //this.$emit('view', itemId);
            },
        }
    };
    return components;
});
