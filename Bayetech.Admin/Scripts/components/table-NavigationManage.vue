import "../../Content/MyStyle.css"

<!--导航菜单表格-->

<template id="BaseTable" lang="html">
    <table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center col-md-1">编号</th>
                <th class="text-center col-md-2">菜单名称</th>
                <th class="text-center col-md-2">链接地址</th>
                <th class="text-center col-md-1">是否显示</th>
                <th class="text-center col-md-1">排序</th>
                <th class="text-center col-md-1">父类Id</th>
				<th class="text-center col-md-1">操作</th>
            </tr>
        </thead>
        <tbody v-for="item in navigatiosetsarray">
            <tr>
                <td class="text-center"><label class="table-firsttitle">{{item.KeyId}}</label></td>
                <td>{{item.NavTitle}}</td>
                <td>{{item.Linkurl}}</td>
                <td>{{item.IsVisible}}</td>
                <td>{{item.Sortnum}}</td>
                <td>{{item.ParentID}}</td>
				<td><input type="radio" name="Operates"/></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    name:'NavigationbTable',
    props:['navigatiosetsarray']
}
</script>