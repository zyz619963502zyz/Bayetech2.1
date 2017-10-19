//注册模板
define("HomeTabBox", ['vue', 'jquery', 'common'], function (vue, $, common) {
    var html = ` <li style="width:539px">
                            <h4><img src="value.imgUrl" style="width:190px;height:340px"></img></h4>
                               <div class ="tabBody" style="display: block;">
                                    <h2>
                                        <span>商品类型</span>
                                        <a: href="item.url" target="_blank">{{item.title }}</a>
                                        <div class ="shop-type">
                                            <ul v-for="value in object">
                                                <li>
                                                    <a: href="items.url" >{{ items.title }}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </h2>
                               </div>
                               <h2 class ="new-cj-tit"><span>最新成交信息</span></h2>
                               <div  class ="txtScroll-top">
                                    <div class="bd">
                                        <div class ="tempWrap" style="overflow:hidden; position:relative; height:140px">
                                            <ul v-for="temp in value.temps" class ="infoList" style="height: 448px; position: relative; padding: 0px; margin: 0px; top: -84px;">
                                                <li  class ="clone" style="height: 28px;">
                                                     <p>
                                                     <span>{{temp.name}}</span>
                                                      {{temp.mation}}
                                                     </p>
                                                     <em>
                                                     <i>{{temp.money}} </i>
                                                      {{temp.element}}
                                                     </em>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                               </div>
                        </li>`

    var data = {
        object: [
            {
                imgUrl: "../../Content/Images/pic-01.jpg",
                item: [{ title: '进入游戏专题页', url: 'http://www.7881.com/buy-G10.html' }],
                items: [{ title: '游戏币', url: 'http://www.7881.com/buy-G10-0-100001-0-0-0-0-0-0-0-1a1500.html' },
                        { title: '装备', url: 'http://www.7881.com/buy-G10-0-100002-0-0-0-0-0-0-0-0.html' },
                        { title: '账号', url: 'http://www.7881.com/buy-G10-0-100003-0-0-0-0-0-0-0-0.html' },
                        { title: '点券', url: 'http://www.7881.com/buy-G10-0-100008-0-0-0-0-0-0-0-0.html' },
                        { title: '道具', url: 'http://www.7881.com/buy-G10-0-100111-0-0-0-0-0-0-0-0.html' },
                        { title: '点卡', url: 'http://www.7881.com/buy-G10-0-100119-0-0-0-0-0-0-0-0.html' },
                        { title: '激活码', url: 'http://www.7881.com/buy-G10-0-100120-0-0-0-0-0-0-0-0.html' },
                        { title: '领礼包', url: 'http://www.7881.com/activity-juneDnf.html' },
                ],
                temps: [{ name: 'u***91120970433', mation: '刚购买了6000万金=136元', money: '136', element: '元' },
                            { name: 'u***81721252312', mation: '刚购买了10000万金=222元', money: '222', element: '元' },
                            { name: 'u***81721252386', mation: '刚购买了4550万金=100元', money: '100', element: '元' },
                            { name: 'u***81722552358', mation: '刚购买了2190万金=50元', money: '50', element: '元' },
                            { name: 'u***81721252314', mation: '刚购买了1272万金=30元', money: '30', element: '元' },
                ],
            },
            {
                imgUrl: "../../Content/Images/pic-03.jpg",
                item: [{ title: '进入游戏专题页', url: 'http://www.7881.com/buy-G10.html' }],
                items: [{ title: '游戏币', url: 'http://www.7881.com/buy-G10-0-100001-0-0-0-0-0-0-0-1a1500.html' },
                        { title: '装备', url: 'http://www.7881.com/buy-G10-0-100002-0-0-0-0-0-0-0-0.html' },
                        { title: '账号', url: 'http://www.7881.com/buy-G10-0-100003-0-0-0-0-0-0-0-0.html' },
                        { title: '点券', url: 'http://www.7881.com/buy-G10-0-100008-0-0-0-0-0-0-0-0.html' },
                        { title: '道具', url: 'http://www.7881.com/buy-G10-0-100111-0-0-0-0-0-0-0-0.html' },
                        { title: '点卡', url: 'http://www.7881.com/buy-G10-0-100119-0-0-0-0-0-0-0-0.html' },
                        { title: '激活码', url: 'http://www.7881.com/buy-G10-0-100120-0-0-0-0-0-0-0-0.html' },
                        { title: '领礼包', url: 'http://www.7881.com/activity-juneDnf.html' },
                ],
                temps: [{ name: 'u***91120970433', mation: '刚购买了6000万金=136元', money: '136', element: '元' },
                            { name: 'u***81721252312', mation: '刚购买了10000万金=222元', money: '222', element: '元' },
                            { name: 'u***81721252386', mation: '刚购买了4550万金=100元', money: '100', element: '元' },
                            { name: 'u***81722552358', mation: '刚购买了2190万金=50元', money: '50', element: '元' },
                            { name: 'u***81721252314', mation: '刚购买了1272万金=30元', money: '30', element: '元' },
                ],
            },
            {
                imgUrl: "../../Content/Images/pic-04.jpg",
                item: [{ title: '进入游戏专题页', url: 'http://www.7881.com/buy-G10.html' }],
                items: [{ title: '游戏币', url: 'http://www.7881.com/buy-G10-0-100001-0-0-0-0-0-0-0-1a1500.html' },
                        { title: '装备', url: 'http://www.7881.com/buy-G10-0-100002-0-0-0-0-0-0-0-0.html' },
                        { title: '账号', url: 'http://www.7881.com/buy-G10-0-100003-0-0-0-0-0-0-0-0.html' },
                        { title: '点券', url: 'http://www.7881.com/buy-G10-0-100008-0-0-0-0-0-0-0-0.html' },
                        { title: '道具', url: 'http://www.7881.com/buy-G10-0-100111-0-0-0-0-0-0-0-0.html' },
                        { title: '点卡', url: 'http://www.7881.com/buy-G10-0-100119-0-0-0-0-0-0-0-0.html' },
                        { title: '激活码', url: 'http://www.7881.com/buy-G10-0-100120-0-0-0-0-0-0-0-0.html' },
                        { title: '领礼包', url: 'http://www.7881.com/activity-juneDnf.html' },
                ],
                temps: [{ name: 'u***91120970433', mation: '刚购买了6000万金=136元', money: '136', element: '元' },
                            { name: 'u***81721252312', mation: '刚购买了10000万金=222元', money: '222', element: '元' },
                            { name: 'u***81721252386', mation: '刚购买了4550万金=100元', money: '100', element: '元' },
                            { name: 'u***81722552358', mation: '刚购买了2190万金=50元', money: '50', element: '元' },
                            { name: 'u***81721252314', mation: '刚购买了1272万金=30元', money: '30', element: '元' },
                ],
            },
        ],
    };

    Vue.component('mainAreaBox02', {
    	name: "hometabox",
    	template: html,
    	data() {
    		return data;
    	},
    });

    return homeTabBox;
});
