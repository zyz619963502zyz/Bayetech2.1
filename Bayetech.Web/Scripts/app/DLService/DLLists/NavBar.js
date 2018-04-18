jsconfig.baseArr.push("bootstrap-paginator");
define(jsconfig.baseArr, function (Vue, $, common, paginator) {
    var NavBarHtml=
        `<div class="sort-inner clearfix">
                <!--<ul class="sorts">
                    <li class="sort on"><a class="link" href="javascript:void(0);" title="默认排序"><span>默认排序</span><i class="fa fa-sort-down"></i></a></li>
                    <li class="sort"><a class="link" href="javascript:void(0);" title="价格排序"><span>价格排序</span><i class="fa fa-sort-down"></i></a></li>
                    <li class="sort"><a class="link" href="javascript:void(0);" title="发布时间"><span>发布时间</span><i class="fa fa-sort-down"></i></a></li>
                </ul>-->

				<div class="btn-group btn-group-sm" role="group" aria-label="Justified button group">
				  <a href="#" class="btn btn-default-grey" role="button">默认排序</a>
				  <a href="#" class="btn btn-default" role="button">价格排序</a>
				  <a href="#" class="btn btn-default" role="button">发布时间</a>
				</div>
                <div class="filter">
                    <label><input type="checkbox" value="2"><span>只看工作室套餐</span></label>
                </div>
            </div>
            <!--<div class="pager">
                <div class="item"><span class="current">1</span>/<span class="pages">2</span></div>
                <a class="link prev" title="上一页" href="javascipt:void(0);"><span class="icon icon-btn-prev-1"></span></a>
                <a class="link next" title="下一页" href="javascipt:void(0);"><span class="icon icon-btn-next-2"></span></a>
            </div>-->`;

        
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
	    return Navcomponent;
})
