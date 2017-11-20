//头部模板
define(jsconfig.baseArr, function (Vue, $, common) {
     
    var html = `
           <div class ="Navigation">
        <div class ="center Part">
            <ul>
                <li>
                    <a v-for="item in list" :href="item.url">{{item.text}}</a>
                </li>
            </ul>
        </div>
    </div>
        `
    var components = {
        template: html,
        props: ['list'],


    };

    return components;
});