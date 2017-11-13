//头部模板
jsconfig.baseArr.push('PersonRight');
jsconfig.baseArr.push('PersonButtom');
jsconfig.baseArr.push('helpLeft');
define(jsconfig.baseArr, function ($, Vue, common, perR, perB, helpleft) {
    alert(1);
    let html = `
         <div class ="center">
               <regleft :list="articleList"></regleft>
                <div class ="personal_right">
                    <regperright></regperright>
                    <regpersonbuttom></regpersonbuttom>
                </div>
        </div>
        `

    let findListUrl = "/api/Article/FindList"; //查询列表

    //表头数据
    var data = {
        mouduleid: "23",//帮助中心id
        articleList: []
    }
    var components11 = {
        template: html,
        components: {
            "regleft": helpleft,
            "regperright": perR,
            "regpersonbuttom": perB,
        },
        data: function () {
            return data;
        },
        created: function () {
            this.findList();
        },
        nowVue: this,
        methods: {
            findList() {
                let nowVue = this;
                common.getWebJson(findListUrl, { value: this.mouduleid }, function (data) {
                    nowVue.articleList = data;
                });
            },
        },
    };


    return components11;
});