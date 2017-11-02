//首页导航下拉框
define([], function () {
    var html = `<div class="dropdown-nav-box dl-dropdown">
    <div class="dropdown-nav">
        <ul>
            <li v-for="item in object">
                <h3><a :href="item.url" target="_blank">{{item.title}}</a></h3>
                <p><a v-for="fn in item.fnlist" :href="fn.url" target="_blank">{{fn.title}}<em></em></a></p>
                <img :src="item.img" width="200" height="76" alt="" />
            </li>
        </ul>
    </div>
</div>`;

    var components = {
        name: "index-nav-dropdown",
        props: ['object'],
        template: html,
        methods: {
            showdropdown() {
                this.isShow = true;
            },
            hidedropdown1() {
                this.isShow = false;
            },
        }
    };
    return components;
});