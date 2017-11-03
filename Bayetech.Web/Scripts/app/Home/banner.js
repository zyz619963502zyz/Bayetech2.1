//banner-box
define(["index-slidebox", "index-adv01"], function (slidebox, adv01) {
    var html = `<div class="banner-box">
    <index-slidebox></index-slidebox>
    <index-adv01></index-adv01>
</div>`;

    var components = {
        name: "index-banner",
        template: html,
        components: {
            "index-slidebox": slidebox,
            "index-adv01": adv01,
        },
        methods: {
        }
    };
    return components;
});