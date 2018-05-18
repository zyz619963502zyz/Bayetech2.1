import "../../Content/MyStyle.css";

<template>
    <div class="toolbar">
        <div class="btn-group">
            <a class="btn btn-default" id="refreshBtn"><span class="glyphicon glyphicon-refresh"></span></a>
        </div>
        <div class="btn-group">
            <button id="AddBtn" class="btn btn-primary"><i class="fa fa-plus"></i>添加</button>
            <button class="btn btn-primary"><i class="fa fa-pencil-square-o"></i>修改</button>
            <button class="btn btn-primary"><i class="fa fa-trash-o"></i>删除</button>
            <button class="btn btn-primary"><i class="fa fa-key"></i>重置密码</button>
            <button class="btn btn-primary"><i class="fa fa-key"></i>角色设定</button>
        </div>
    </div>
</template>

<script>
export default{
    name:'ComToolBar',
    props:['1','2','3']
}
</script>