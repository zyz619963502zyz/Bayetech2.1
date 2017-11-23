//头部模板
define(jsconfig.baseArr, function (Vue, $, common) {
     
    var html = `
         <div class ="center">
        <div class ="security_news" v-for="item in list">
            <h3>{{item.title}}</h3>
            <ul>
                <li v-for="it in item.content">
                    <a :href="it.url" target="_blank">
                        {{it.text}}
                    </a>
                </li>
            </ul>
        </div>
        <div class ="security_index_right">
            <ul>
                <li>
                <a href="http://www.7881.com/tradesafe/knowledge.html" title="安全知识中心"><img src="../../Content/Images/security_index_right_1.jpg"></a>
                </li>
                <ol>
                    <a href="http://www.7881.com/tradesafe/safeCenter.html" title="验证中心"><img src="../../Content/Images/security_index_right_2.jpg"></a>
                </ol>
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