//底部模板1
define(jsconfig.baseArr, function (Vue, $, common) {
    var html = `
            <div>
                <div class ="qList pusht clearfix" v-for="item in object">
                    <h3>{{item.title}}</h3>
                    <ul>
                        <li v-for="it in item.content">
                            <span class ="num">{{it.id}}</span>
                            <a :href="it.url" target="_blank">{{it.text }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        `;

    var components = {
        template: html,
        props: ['object']
    };
    return components;
});



