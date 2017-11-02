//广告位1
define([], function () {
    var html = `<div id="gameSelectBox">
                            <ul class="selectbox clearfix">
                                <li class="g_name" gameid="">游戏名称</li>
                                <li class="g_gameplatform" gameplatform="" style="display: none;">游戏平台</li>
                                <li class="g_run" carrierid="" style="display: none;">运营商</li>
                                <li class="g_area" groupid="">游戏区</li>
                                <li class="g_service" serverid="">服务器</li>
                                <li class="g_type" gtid="">物品类型</li>
                                <li class="g_input"><label class="placeholder"><input type="text" value="" /><span>商品编码或关键词</span></label></li>
                            </ul>
                        </div>`;

    var components = {
        name: "v-gameelect",
        template: html,
        methods: {
        }
    };
    return components;
});