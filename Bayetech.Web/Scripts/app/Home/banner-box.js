//banner-box
define(["slideBox", "adv-01"], function (slideBox, adv01) {
    var html = `<div class="banner-box">
    <slideBox></slideBox>
    <adv-01></adv-01>
</div>`;

    var components = {
        name: "banner-box",
        template: html,
        components: {
            slideBox,
            "adv-01": adv01,
        },
        methods: {
        }
    };
    return components;
});