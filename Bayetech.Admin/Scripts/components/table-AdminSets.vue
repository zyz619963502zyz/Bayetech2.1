import "../../Content/MyStyle.css"

<!--管理员设置表格-->

<template id="BaseTable" lang="html">
    <table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center col-md-1">编号</th>
                <th class="text-center col-md-2">用户账号</th>
                <th class="text-center col-md-2">真实姓名</th>
                <th class="text-center col-md-1">手机</th>
                <th class="text-center col-md-1">超管</th>
                <th class="text-center col-md-1">状态</th>
                <th class="text-center col-md-4">描述</th>
            </tr>
        </thead>
        <tbody v-for="item in adminInfo">
            <tr>
                <td class="text-center"><label class="table-firsttitle">{{item.KeyId}}</label></td>
                <td>{{item.UserName}}</td>
                <td>{{item.TrueName}}</td>
                <td>{{item.depname}}</td>
                <td>{{item.Mobile}}</td>
                <td>{{item.IsAdmin}}</td>
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