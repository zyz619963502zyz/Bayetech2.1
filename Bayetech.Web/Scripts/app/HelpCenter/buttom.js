define([], function (Vue) {
    var html = `<div class="help_gg xxfl" style="text-align:left;" id="help_buttom">
                <h3>帮助信息分类</h3>
                <dl v-for="value in object" style="margin-left:30px;">
                    <dt>{{value.title}}</dt>
                    <dd v-for="item in value.items">
                        <a :href="item.url">{{item.title}}</a>
                    </dd>
                </dl>
            </div>`;

    var data = {
        object: [{
            title: '我是买家',
            items: [{ title: '如何购买', url: 'http://www.7881.com/helpcenter/53645345943894167.html' },
            { title: '信誉体系', url: 'http://www.7881.com/helpcenter/53645345943894167.html' },],
        },
        {
            title: '我是卖家',
            items: [{ title: '如何出售', url: 'http://www.7881.com/helpcenter/53645345943894167.html' },
            { title: '担保交易', url: 'http://www.7881.com/helpcenter/53645345943894167.html' },
            { title: '寄售交易', url: 'http://www.7881.com/helpcenter/53645345943894167.html' },
            { title: '无货赔付', url: 'http://www.7881.com/helpcenter/53645345943894167.html' },
            { title: '收费标准', url: 'http://www.7881.com/helpcenter/53645345943894167.html' },],
        },],
    };	

    var components = {
        name: "help-buttom",
        template: html,
        data() {
            return data;
        },
    };
    return components
});
