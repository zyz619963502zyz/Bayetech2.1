import "../../Content/MyStyle.css"

<!--按钮管理-->

<template id="BaseTable" lang="html">
    <table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center col-md-1">编号</th>
                <th class="text-center col-md-1">名称</th>
                <th class="text-center col-md-2">编码</th>
                <th class="text-center col-md-1">排序</th>
                <th class="text-center col-md-1">图标</th>
				<th class="text-center col-md-1">操作</th>
            </tr>
        </thead>
        <tbody v-for="item in buttonssetsarray">
            <tr class="text-center">
                <td><label class="table-firsttitle">{{item.KeyId}}</label></td>
                <td>{{item.ButtonText}}</td>
                <td>{{item.ButtonTag}}</td>
                <td>{{item.Sortnum}}</td>
                <td>{{item.IconCls}}</td>
                <td><input type="radio" name="Operates"/></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    name:'buttonsSetsTable',
    props:['buttonssetsarray']
}
</script>