//个人中心主模块
define(['vue', 'jquery', 'common', 'personal-head', 'main-footer'], function () {
    alert(2);
    let html = `
        <personal-head></personal-head>
        `
    let Vue = arguments[0];
    let $ = arguments[1];
    let common = arguments[2];
    //api

    var components = {
        name: "personalModule",
        template: html,
        components: {}
    };

    for (let i = 2; i < arguments.length; i++) {
        components["components"][arguments[i].name] = arguments[i];
    }
    return components;

});