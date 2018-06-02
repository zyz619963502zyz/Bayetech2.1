import "../../Content/MyStyle.css"

<!--注册客户管理-->

<template id="BaseTable" lang="html">
    <table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center col-md-1">编号</th>
                <th class="text-center col-md-1">姓名</th>
                <th class="text-center col-md-2">用户名</th>
                <th class="text-center col-md-1">手机</th>
                <th class="text-center col-md-1">QQ</th>
                <th class="text-center col-md-1">注册日期</th>
                <th class="text-center col-md-3">状态</th>
                <th class="text-center col-md-1">备注</th>
				<th class="text-center col-md-1">操作</th>
            </tr>
        </thead>
        <tbody v-for="item in adminsetsarray">
            <tr class="text-center">
                <td><label class="table-firsttitle">{{item.KeyId}}</label></td>
                <td>{{item.UserName}}</td>
                <td>{{item.TrueName}}</td>
                <td>{{item.depname}}</td>
                <td>{{item.Mobile}}</td>
                <td>{{item.IsAdmin}}</td>
                <td>{{item.Remark}}</td>
                <td><input type="radio" name="Operates"/></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    name:'AdminSetsTable',
    props:['adminsetsarray']
}
</script>