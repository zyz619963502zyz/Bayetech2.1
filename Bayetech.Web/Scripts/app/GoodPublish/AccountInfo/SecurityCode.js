//DNF金币
define(['jquery', 'common'], function ($, common) {
    var html=`<div class="common-form height-30">
    <div class="form-item clearfix" style="z-index: 1;">
      <div class="form-item-l">
        <i>*</i>
        <span>安全交易码：</span></div>
      <div class="form-item-r" style="z-index: 1;">
        <div class="game-ipt">
          <input type="text" name="tradeCode" id="" value="" placeholder="请输入安全交易码" maxlength="16" class="common-input h-30"></div>
      </div>
    </div>
  </div>`;
    var components={
        name: "SecurityCode",
            template: html,
            };
    return components;
    });