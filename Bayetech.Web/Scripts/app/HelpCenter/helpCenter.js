//底部模板1
define(['vue', 'jquery', 'head', 'foot','helpLeft', 'helpButtom', 'helpContent'], function () {
    var html = `<div class="center">
            <help-left></help-left>
            <div class="help_right">
                <help-content></help-content>
                <help-buttom></help-buttom>
            </div>
        </div>`;
    var components = {
        name: "helpCenter",
        template: html,
        components: {},
    };
    for (var i = 4; i < arguments.length; i++) {
        components["components"][arguments[i].name] = arguments[i];
    }
    return components;
});

