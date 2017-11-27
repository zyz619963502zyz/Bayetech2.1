//底部模板1
define(jsconfig.baseArr, function (Vue, $, common) {
    var html = `
        <div>
                <div class="change-info">
                    <ul>
                        <li v-for="item in object">
                            <i v-bind:class ="item.cla"></i>
                            <p>
                                <strong>{{item.str}}</strong>
                                <span>{{item.spa}}</span>
                                <a :href="item.url">{{item.text}}</a>
                            </p>
                        </li>
                    </ul>
                </div>
                </div>`;

    var components = {
        template: html,
        props: ['object']
    };
    return components;
});



