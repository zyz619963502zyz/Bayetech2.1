//头部模板
define(jsconfig.baseArr, function (Vue, $, common) {
    var html = `
        <div>
         <div class ="mainMenu" v-for="item in list">
                    <h3>{{item.title}}</h3>
                    <section>
                        <div class ="menuItem" v-for="it in item.content">
                            <dl class ="sortItem">
                                <dt class ="sort1">
                                <i></i>
                                {{ it.dttitle}}
                                </dt>
                                <dd  v-for="itm in it.dtcontent">
                                    <label>{{itm.lbtitle}}</label>
                                    <a v-for="i in itm.lbcontent" :href="i.url">{{i.text}}</a>
                                </dd>
                            </dl>
                        </div>
                    </section>
                </div>
        </div>
        `
    var components = {
        template: html,
        props: ['list'],
    };
    return components;
});