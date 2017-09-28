var _xqkinput_opt = {
    inputs: [],
    current: -1,
	itemsCount: 0,
    last: ""
}; 

(function($) {    
  $.fn.xqkinput = function(options) {    
    var opts = $.extend({}, $.fn.xqkinput.defaults, options);    

    return this.each(function() {    
		$this = $(this);    
		// build element specific options    
		var o = $.meta ? $.extend({}, opts, $this.data()) : opts;    
		
        // 生成基本提示框
        var xihtml = '<div id="xi_box" style="position:absolute; visibility:hidden; padding-left:5px; padding-top:5px; line-height:24px; background:#ffffff;left:0px; top:0px; width:'+o.width+'px; height:'+o.height+'px; border:solid 1px #3983e8;overflow: auto;z-index: 100000;"></div>';
        $(xihtml).appendTo('body');
    
		var idx = _xqkinput_opt.inputs.length;
		// 生成参数
		var xi = {};
		if( typeof(o.words[0]) == "string") xi.words = Character.createCTextArray(o.words);
		else xi.words = o.words;
		
		xi.$source = $this;
		xi.divid = "xqk_input_" + idx;

		// 保存参数
		_xqkinput_opt.inputs.push(xi);
		$this.attr("xqkinput_index", idx);
		
		// 绑定事件
        $this.keyup(handle);
        // 获得光标
        $this.focus(function(){
        	if (isShown()) {
        		return;
        	}
        	
			var items = getItemsByVal($this);
			// 找到
			if(items.length>0) {
				showbox($(this), $('#xi_box'));
				createbox($(this), $('#xi_box'), items);
			}
			
		});
		// 失去光标
		 $this.blur(function(){
        	if (isShown()) {
				if ($('.xii_row.xii_selected').length != 0) {
					$('.xii_row.xii_selected').trigger('click');
				} else {
        			hidebox();
        		}
        	}
		});
    });    
  };  
  
	function isShown() { return _xqkinput_opt.current >= 0; }
	
    function hidebox() {
        _xqkinput_opt.last = _xqkinput_opt.current;
        _xqkinput_opt.current = -1;
        $("#xi_box").css("visibility", "hidden");
    }

    function showbox($this, $xibox) {
        if(!isShown()) {
            var xi_index = $this.attr("xqkinput_index");
			// 如果这次的输入框与上次的不一致，则重新确定xi_box的位置
            if( _xqkinput_opt.last != xi_index ){
                y = $this.offset().top;   
                x = $this.offset().left;   
                h = $this.height();   
                w = $this.width();   

                $xibox.css("left", x+"px");
                $xibox.css("top", (y+h+6)+"px");
            }
            _xqkinput_opt.current = parseInt(xi_index);
            $xibox.css("visibility", "visible");
        }
    }
    	
	function createbox($this, $xibox, items) {
		var s = '<table border="0" width="100%">';
		for(var i=1;i<=items.length;i++) {
			s += '<tr class="xii_row"><td id="xi_item_'+i +'">' +items[i-1] +'</td></tr>';
		}
		s += '</table>';
		$xibox.html(s);
		$('.xii_row').mouseenter(function() {
			$(this).addClass('xii_selected');
		}).mouseout(function(){
			$(this).removeClass('xii_selected');
		}).click(function(){
			var $src = _xqkinput_opt.inputs[_xqkinput_opt.current].$source;
			$src.val($(this).text());
			hidebox();
			$('#hlk_search_simple').trigger('click');
		});
	}
	
	function getItemsByVal($this) {
		var items  = [];
		var xi = getXqkInput($this);
		var words = xi.words;
		var pinyin = $this.val();
		
		if (pinyin == '') {
			for(var i=0; i<words.length; i++){
				items.push(words[i].text);
				if( items.length == 8 ) break;
			}
			return items;
		}
		pinyin = pinyin.toLowerCase();
		var _pinyin = '';
		// 将输入框中的中文汉字转成拼音
		$.each(pinyin, function(){
			if (/[\u4e00-\u9fa5\d]/.test(this)) {
				_pinyin += Character.getPinyinOfChar(this);
			} else {
				_pinyin += this;
			}
		});
		pinyin = _pinyin;
		if( (pinyin.length >0) && !Character.checkPinyin(pinyin) ) return [];
		
		if(pinyin.length > 0)
		{
			for(var i=0; i<words.length; i++){
				if( Character.testPinyinAbbrByPinyin(words[i].pinyin, pinyin) ) {
					items.push(words[i].text);
					if( items.length == 8 ) break;
				}
			}
		}
		return items;
	}
	
	function handle(e) {
    
		var $this = $(this);
        var $xibox = $("#xi_box");
		
        var lastch = e.which;
        
        if (isShown()) {
			// 支持键盘上下键选择
			switch(lastch) {
				case 38: // up
					prevResult();
					return false;
				case 40: // down
					nextResult();
					return false;
				case 13: // enter
					currentResult();
					return false;
			}
        }
        
        var items = getItemsByVal($this);
        
		
		// 找到
		if(items.length>0) {
			showbox($this, $xibox);
			createbox($this, $xibox, items);
		}
			
	}
	
	function prevResult() {
		if ($('.xii_row.xii_selected').length != 0) {
			$('.xii_row.xii_selected').removeClass('xii_selected').prev().addClass('xii_selected');
		} else {
			$('.xii_row:last').addClass('xii_selected');
		}
	}
	
	function nextResult() {
		if ($('.xii_row.xii_selected').length != 0) {
			$('.xii_row.xii_selected').removeClass('xii_selected').next().addClass('xii_selected');
		} else {
			$('.xii_row:first').addClass('xii_selected');
		}
	}
	
	function currentResult() {
		if ($('.xii_row.xii_selected').length != 0) {
			$('.xii_row.xii_selected').trigger('click');
		} else {
			$('.xii_row:first').trigger('click');
		}
		if ($('#btnSearch').length == 1) {
			$('#btnSearch').trigger('click');
		}
	}
	
	function getXqkInput($obj) {
		var idx = parseInt($obj.attr("xqkinput_index"));
		return _xqkinput_opt.inputs[idx];
	}
 
	$.fn.xqkinput.defaults = {
		words: ""
	};    
// 结束    
})(jQuery);   
