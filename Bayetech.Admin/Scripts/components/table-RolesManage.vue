import "../../Content/MyStyle.css"

<!--角色管理表格-->

<template id="BaseTable" lang="html">
    <table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center col-md-1">编号</th>
                <th class="text-center col-md-2">角色名称</th>
                <th class="text-center col-md-2">模块</th>
                <th class="text-center col-md-2">简写</th>
                <th class="text-center col-md-4">描述</th>
                <th class="text-center col-md-2">操作</th>
            </tr>
        </thead>
        <tbody v-for="item in rolesarray">
            <tr class="text-center">
                <td class="text-center"><label class="table-firsttitle">{{item.Role_id}}</label></td>
                <td>{{item.Role_Name}}</td>
                <td>{{item.Module_ID}}</td>
                <td>{{item.Role_Remark}}</td>
                <td>{{item.RoleSerial}}</td>
                <td><input id="test" type="radio" name="Operates" value="" @click="startcheck(item)" /></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    name:'RolesArray',
    props:['rolesarray','startcheck']
}
</script>