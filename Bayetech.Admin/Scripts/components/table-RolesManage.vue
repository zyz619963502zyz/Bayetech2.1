import "../../Content/MyStyle.css"

<!--角色管理表格-->

<template id="BaseTable" lang="html">
    <table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center col-md-1">编号</th>
                <th class="text-center col-md-2">角色名称</th>
                <th class="text-center col-md-2">排序</th>
                <th class="text-center col-md-4">描述</th>
            </tr>
        </thead>
        <tbody v-for="item in adminInfo">
            <tr>
                <td class="text-center"><label class="table-firsttitle">{{item.KeyId}}</label></td>
                <td>{{item.RoleName}}</td>
                <td>{{item.Sortnum}}</td>
                <td>{{item.Remark}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    name:'AdminSetsTable',
    //props:['pagetype','goodinfoarray','startcheck','itemtype']
}
</script>