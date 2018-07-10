import "../../Content/MyStyle.css";

<template id="BaseTable" lang="html">
    <table class="table table-bordered text-center">
        <thead>
            <tr class="success">
				<th class="text-center col-md-1">编号</th>
				<th class="text-center col-md-1">二级菜单</th>
                <th class="text-center col-md-2">菜单名称</th>
                <th class="text-center col-md-2">链接地址</th>
                <th class="text-center col-md-1">是否显示</th>
                <th class="text-center col-md-1">排序</th>
                <th class="text-center col-md-1">父类Id</th>
				<th class="text-center col-md-1">操作</th>
            </tr>
        </thead>
        <tbody v-for="item in navigationsetsarray">
            <tr>
				<td class="text-center"><label class="table-firsttitle">{{item.KeyId}}</label></td>
				<td @click="OpterateAline(item.KeyId)"><input type="button" v-bind:id="'btn_'+item.KeyId" value="+"></td>
                <td>{{item.NavTitle}}</td>
                <td>{{item.Linkurl}}</td>
                <td>{{item.IsVisible}}</td>
                <td>{{item.Sortnum}}</td>
                <td>{{item.ParentID}}</td>
				<td><input type="radio" name="Operates"/></td>
            </tr>
            <tr v-bind:id="'key_'+item.KeyId" class="hide">
                <td colspan="10">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="warning">
                                <th class="text-center">导航标题</th>
                                <th class="text-center">链接</th>
                                <th class="text-center">父级ID</th>
                                <th class="text-center">排序</th>
                            </tr>
                        </thead>
                        <tbody v-for="itemChild in item.ChildNodes">
                            <tr>
                                <td>{{itemChild.NavTitle}}</td>
                                <td>{{itemChild.Linkurl}}</td>
                                <td>{{itemChild.ParentID}}</td>
                                <td>{{itemChild.Sortnum}}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
let data={
	isActive:false
}

export default{
	data(){
		return data;
	},
    name:'NavigtionTable',
    props:['navigationsetsarray'],
	methods:{
		OpterateAline(id){
			let self = this;
			$("#key_"+id).hasClass("hide")?
			($("#key_"+id).removeClass("hide"),$("#btn_"+id).val("-"))
			:($("#key_"+id).addClass("hide"),$("#btn_"+id).val("+"));
		}		
	}
}
</script>