//金币
//模块之间的操作
define(['jquery', 'common'], function ($, common) {
    var html=`<div class="account-info-con">
    <div class="common-form height-30" id="gameAccountInfo">
        <div class="form-item clearfix">
            <div class="form-item-l">
                <i>*</i>
                <span>游戏帐号：</span>
            </div>
            <div class="form-item-r">
                <div class="game-ipt">
                    <input type="text" class="common-input h-30" name="gameaccount" id="" value="" placeholder="请输入游戏帐号">
                </div>
            </div>
        </div>
        <div class="form-item clearfix">
            <div class="form-item-l">
                <i>*</i>
                <span>游戏密码：</span>
            </div>
            <div class="form-item-r">
                <div class="game-ipt">
                    <input type="password" class="common-input h-30" name="password" id="" value="" placeholder="请输入游戏密码">
                </div>
            </div>
        </div>
        <div class="form-item clearfix">
            <div class="form-item-l">
                <i>*</i>
                <span>二级密码：</span>
            </div>
            <div class="form-item-r">
                <div class="game-ipt">
                    <input type="text" class="common-input h-30" name="2Password" id="" value="" placeholder="请输入二级密码">
                </div>
            </div>
        </div>
        <div class="form-item clearfix">
            <div class="form-item-l">
                <i>*</i>
                <span>角色名称：</span>
            </div>
            <div class="form-item-r">
                <div class="game-ipt">
                    <input type="text" class="common-input h-30" name="rolename" id="" value="" placeholder="请输入角色名称">
                </div>
            </div>
        </div>
        <div class="form-item clearfix">
            <div class="form-item-l">
                <i>*</i>
                <span>发货号等级：</span>
            </div>
            <div class="form-item-r">
                <div class="game-ipt">
                    <input type="text" class="common-input h-30" name="Shipclass" id="" value="" placeholder="请输入发货号等级">
                </div>
            </div>
        </div>
        <div class="form-item clearfix">
            <div class="form-item-l">
                <i>*</i>
                <span>仓库密码：</span>
            </div>
            <div class="form-item-r">
                <div class="game-ipt">
                    <input type="password" class="common-input h-30" name="WarehousePassword" id="" value="" placeholder="请输入仓库密码">
                </div>
            </div>
        </div>
    </div>
</div>`;
    var components={
        name: "step1",
        template: html,
    };
    return components;
});