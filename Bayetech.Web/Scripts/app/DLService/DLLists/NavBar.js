jsconfig.baseArr.push("bootstrap-paginator");
define(jsconfig.baseArr, function (Vue, $, common, paginator) {
    var NavBarHtml=
        `<div class="fasttips-box">
            <div class="sort-inner clearfix">
                <ul class="sorts">
                    <li class="sort on"><a class="link" href="javascript:void(0);" title="默认排序"><span>默认排序</span><em class="create_time down default"></em></a></li>
                    <li class="sort"><a class="link" href="javascript:void(0);" title="价格排序"><span>价格排序</span><em class="price down"></em></a></li>
                    <li class="sort"><a class="link" href="javascript:void(0);" title="发布时间"><span>发布时间</span><em class="create_time down"></em></a></li>
                </ul>
                <div class="filter">
                    <label><input type="checkbox" value="2"><span>只看工作室套餐</span></label>
                </div>
            </div>
            <div class="pager">
                <div class="item"><span class="current">1</span>/<span class="pages">2</span></div>
                <a class="link prev" title="上一页" href="javascipt:void(0);"><span class="icon icon-btn-prev-1"></span></a>
                <a class="link next" title="下一页" href="javascipt:void(0);"><span class="icon icon-btn-next-2"></span></a>
            </div>
        </div>`;

        
	    var Navcomponent = {
		    name:'NavBar',
		    template: NavBarHtml,
		    created(){

		    },
		    mounted(){
		    
		    },
		    methods:{
		    
		    }
	    };
	    return Navcompnent;
})
