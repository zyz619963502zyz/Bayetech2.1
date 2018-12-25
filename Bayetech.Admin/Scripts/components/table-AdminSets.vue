import "../../Content/MyStyle.css"

<!--管理员设置表格-->

<template id="BaseTable" lang="html">
    <table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center col-md-2">用户账号</th>
                <th class="text-center col-md-2">真实姓名</th>
                <th class="text-center col-md-1">是否有效</th>
                <th class="text-center col-md-1">人员编号</th>
                <th class="text-center col-md-1">性别</th>
                <th class="text-center col-md-3">描述</th>
                <th class="text-center col-md-1">操作</th>
            </tr>
        </thead>
        <tbody v-for="item in adminsetsarray">
            <tr class="text-center">
                <td>{{item.User_ID}}</td>
                <td>{{item.User_Name}}</td>
                <td>{{item.IsAvailab=='0'?'不是':'是'}}</td>
                <td>{{item.User_Code}}</td>
                <td>{{item.User_SEX=='0'?'男':'女'}}</td>
                <td>{{item.Remark}}</td>
                <td><input id="test" type="radio" name="Operates" value="" @click="startcheck(item)"/></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    name:'AdminSetsTable',
    props:['adminsetsarray','startcheck']
}
</script>