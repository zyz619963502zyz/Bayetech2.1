import "../../Content/MyStyle.css";

<template id="BaseTable" lang="html">
    <table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center col-md-1">单据类型</th>
                <th class="text-center col-md-1">环节名称</th>
                <th class="text-center col-md-2">订单编号</th>
                <th class="text-center col-md-2">游戏名称</th>
                <th class="text-center col-md-1">交易类型</th>
                <th class="text-center col-md-1">关键词</th>
                <th class="text-center col-md-3">商品标题</th>
                <th class="text-center col-md-1">审核商品</th>
            </tr>
        </thead>
        <tbody v-for="item in goodinfoarray">
            <tr>
                <td class="text-center"><label class="table-firsttitle">订单</label></td>
                <td>{{item.CURSTATUS_NAME}}</td>
                <td>{{item.OrderNo}}</td>
                <td>{{item.GameName}}</td>
                <td>{{item.GoodTypeName}}</td>
                <td>{{item.GoodKeyWord}}</td>
                <td>{{item.GoodTitle}}</td>
                <td class="text-center"><input type="button" v-bind:flag="item.Status" class="btn btn-primary" v-bind:value="(item.Status=='PutOnsale'||item.Status=='PutDownsale')?'查看':'审核'" @click="startcheck(item)"></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    name:'BaseTable',
    props:['pagetype','goodinfoarray','startcheck','itemtype']
    }
</script>