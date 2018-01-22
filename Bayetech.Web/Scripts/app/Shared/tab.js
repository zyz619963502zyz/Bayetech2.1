//通用tab
define(['common'], function (common) {
    var html = `<div class="index-tab">
        <div class="index-tab-top">
            <ul>
                <li v-for="item in data.type" @click="switchtab(item.id)" :class ="{'active':flag==item.id}">
                   <a target="_blank" >{{item.name}}</a>
                </li>
            </ul>
        </div>
        <div class="index-tab-bot">
            <div class="index-tab-item" >
                <div class="gg-box" :class="data.boxclass">
                    <ul>
                        <li v-for="item in list">
                           <slot :obj="item"></slot>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;

    var components = {
        name: "v-tab",
        props: ['data'],
        data() {
            return {
                list: {},
                flag: "",
            };
        },
        created() {
             
            this.switchtab(this.data.default);
        },
        template: html,
        methods: {
            switchtab(itemId) {
                 
                var obj = common.FindObjByProp(this.data.obj, "id", itemId);
                this.list=obj.content;
                this.flag=itemId;
            },
            view(itemId) {
                //this.$emit('view', itemId);
            },
        }
    };
    return components;
});
