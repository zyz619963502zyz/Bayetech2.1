import "../../Content/MyStyle.css";

<template id="BaseTable" lang="html">
    <table class="table table-bordered text-center">
        <thead>
            <tr class="success">
				<th class="text-center col-md-1">编号</th>
				<th class="text-center col-md-1">折行操作</th>
                <th class="text-center col-md-2">菜单标题</th>
                <th class="text-center col-md-2">菜单地址</th>
                <th class="text-center col-md-1">是否显示</th>
                <th class="text-center col-md-1">排序</th>
                <th class="text-center col-md-1">父类Id</th>
				<th class="text-center col-md-1">操作</th>
            </tr>
        </thead>
        <tbody v-for="item in navigationsetsarray">
            <tr>
				<td class="text-center"><label class="table-firsttitle">{{item.MenuID}}</label></td>
				<td @click="OpterateAline(item.MenuID)"><input type="button" v-bind:id="'btn_'+item.MenuID" value="+"></td>
                <td>{{item.MenuName}}</td>
                <td>{{item.url}}</td>
                <td>{{item.isdelete=='0'?'是':'不是'}}</td>
                <td>{{item.sortid}}</td>
                <td>{{item.ParentID}}</td>
				<td><input type="radio" name="Operates" @click="startcheck(item)"/></td>
            </tr>
            <tr v-bind:id="'key_'+item.MenuID" class="hide">
                <td colspan="10">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="warning">
                                <th class="text-center">菜单标题</th>
                                <th class="text-center">菜单地址</th>
                                <th class="text-center">父级ID</th>
                                <th class="text-center">排序</th>
								<th class="text-center col-md-1">操作</th>
                            </tr>
                        </thead>
                        <tbody v-for="itemChild in item.ChildNodes">
                            <tr>
                                <td>{{itemChild.MenuName}}</td>
                                <td>{{itemChild.url}}</td>
                                <td>{{itemChild.ParentID}}</td>
                                <td>{{itemChild.sortid}}</td>
								<td><input type="radio" name="Operates" @click="startcheck(itemChild)"/></td>
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
    props:['navigationsetsarray','startcheck'],
	methods:{
		OpterateAline(id){
			let self = this;
			$("#key_"+id).hasClass("hide")?($("#key_"+id).removeClass("hide"),$("#btn_"+id).val("-"))
			:($("#key_"+id).addClass("hide"),$("#btn_"+id).val("+"));
		}		
	}
}
</script>