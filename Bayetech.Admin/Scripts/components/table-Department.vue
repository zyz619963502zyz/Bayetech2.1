import "../../Content/MyStyle.css"

<!--部门管理表格-->

<template id="BaseTable" lang="html">
    <table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center col-md-2">部门编号</th>
                <th class="text-center col-md-2">部门简称</th>
                <th class="text-center col-md-1">部门名称</th>
                <th class="text-center col-md-1">创建时间</th>
                <th class="text-center col-md-1">操作</th>
            </tr>
        </thead>
        <tbody v-for="item in departmentarray">
            <tr class="text-center">
                <td>{{item.Org_Code}}</td>
                <td>{{item.Org_GB}}</td>
                <td>{{item.Org_Name}}</td>
                <td>{{item.CreateTime}}</td>
                <td><input id="test" type="radio" name="Operates" value="" @click="startcheck(item)"/></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    name:'DepartmentTable',
    props: ['departmentarray','startcheck']
}
</script>