import "../../Content/MyStyle.css"

<!--管理员设置表格-->

<template id="BaseTable" lang="html">
    <table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center col-md-1">游戏名称</th>
                <th class="text-center col-md-2">游戏简称</th>
                <th class="text-center col-md-2">游戏首字母</th>
                <th class="text-center col-md-1">游戏图标</th>
                <th class="text-center col-md-1">游戏状态</th>
                <th class="text-center col-md-1">操作</th>
            </tr>
        </thead>
        <tbody v-for="item in gamearray">
            <tr class="text-center">
                <td><label class="table-firsttitle">{{item.Name}}</label></td>
                <td>{{item.Alias}}</td>
                <td>{{item.Letter}}</td>
                <td>{{item.Img}}</td>
                <td>{{item.IsDelete=='true'?'已删除':'正常'}}</td>
                <td><a href="#" @click=operatemodal(item)>编辑游戏属性</a></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    name:'AdminSetsTable',
    props:['gamearray','operatemodal'],
    methods:{
    
    }
}
</script>