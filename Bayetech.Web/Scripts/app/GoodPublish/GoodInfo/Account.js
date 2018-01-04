//金币
define(['jquery', 'common', 'Scripts/app/GoodPublish/TradeType'], function ($, common, TradeType) {
    var html=`<div class="one-step-con">
  <div class="title-group-box common-form height-30 clearfix" id="vProps">
    <div class="form-item">
      <div class="form-item-l">
        <i>*</i>
        <span>等级：</span></div>
      <div class="form-item-r">
        <input datatype="n,onenine" type="text" class="common-input role-ranking title-prefix w120 h-30" name="parameters[50232]" id="" value="" nullmsg="请输入角色等级">
        <span class="form-tips-r">
          <i>级</i>　0≤等级≤90</span>
        <span class="Validform_checktip"></span>
      </div>
    </div>
    <div class="form-item">
      <div class="form-item-l">
        <i>*</i>
        <span>性别：</span></div>
      <div class="form-item-r">
        <div class="comselect callback must h-30">
          <div class="comselect-val">
            <input type="text" readonly="readonly" class="comselect-input title-prefix" placeholder="请选择" value="" data-value="">
            <input datatype="comselect" type="hidden" name="parameters[50233]" value="" class="value" nullmsg="请选择角色性别">
            <div class="comselect-icon">
              <em class="iconfont icon-down"></em>
              <em class="iconfont icon-up"></em></div>
            <span class="Validform_checktip"></span>
          </div>
          <ul class="comselect-menu">
            <li data-value="">请选择</li>
            <li data-value="男">男</li>
            <li data-value="女">女</li></ul>
        </div>
      </div>
    </div>
    <div class="form-item">
      <div class="form-item-l">
        <i>*</i>
        <span>职业：</span></div>
      <div class="form-item-r">
        <div class="comselect callback must h-30">
          <div class="comselect-val">
            <input type="text" readonly="readonly" class="comselect-input title-prefix" placeholder="请选择" value="" data-value="">
            <input datatype="comselect" type="hidden" name="parameters[50234]" value="" class="value" nullmsg="请选择角色性别">
            <div class="comselect-icon">
              <em class="iconfont icon-down"></em>
              <em class="iconfont icon-up"></em></div>
            <span class="Validform_checktip"></span>
          </div>
          <ul class="comselect-menu">
            <li data-value="">请选择</li>
            <li data-value="剑魂">剑魂</li>
            <li data-value="剑圣">剑圣</li>
            <li data-value="剑神">剑神</li>
            <li data-value="鬼泣">鬼泣</li>
            <li data-value="弑魂">弑魂</li>
            <li data-value="黑暗君主">黑暗君主</li>
            <li data-value="狂战士">狂战士</li>
            <li data-value="狱血魔神">狱血魔神</li>
            <li data-value="帝血弑天">帝血弑天</li>
            <li data-value="阿修罗">阿修罗</li>
            <li data-value="大暗黑天">大暗黑天</li>
            <li data-value="天帝">天帝</li>
            <li data-value="狂虎帝">狂虎帝</li>
            <li data-value="念皇">念皇</li>
            <li data-value="武极">武极</li>
            <li data-value="极武皇">极武皇</li>
            <li data-value="千手罗汉">千手罗汉</li>
            <li data-value="暗街之王">暗街之王</li>
            <li data-value="风林火山">风林火山</li>
            <li data-value="宗师">宗师</li>
            <li data-value="枪神">枪神</li>
            <li data-value="掠天之翼">掠天之翼</li>
            <li data-value="狂暴者">狂暴者</li>
            <li data-value="毁灭者">毁灭者</li>
            <li data-value="机械战神">机械战神</li>
            <li data-value="机械元首">机械元首</li>
            <li data-value="大将军">大将军</li>
            <li data-value="战场统治者">战场统治者</li>
            <li data-value="元素爆破师">元素爆破师</li>
            <li data-value="魔皇">魔皇</li>
            <li data-value="湮灭之瞳">湮灭之瞳</li>
            <li data-value="冰结师">冰结师</li>
            <li data-value="冰冻之心">冰冻之心</li>
            <li data-value="刹那永恒">刹那永恒</li>
            <li data-value="血法师">血法师</li>
            <li data-value="血狱伯爵">血狱伯爵</li>
            <li data-value="血狱君主">血狱君主</li>
            <li data-value="逐风者">逐风者</li>
            <li data-value="御风者">御风者</li>
            <li data-value="风神">风神</li>
            <li data-value="次元行者">次元行者</li>
            <li data-value="虚空行者">虚空行者</li>
            <li data-value="混沌行者">混沌行者</li>
            <li data-value="天启者">天启者</li>
            <li data-value="神思者">神思者</li>
            <li data-value="蓝拳圣使">蓝拳圣使</li>
            <li data-value="神之手">神之手</li>
            <li data-value="正义仲裁者">正义仲裁者</li>
            <li data-value="驱魔师">驱魔师</li>
            <li data-value="龙斗士">龙斗士</li>
            <li data-value="真龙星君">真龙星君</li>
            <li data-value="复仇者">复仇者</li>
            <li data-value="末日审判者">末日审判者</li>
            <li data-value="永生者">永生者</li>
            <li data-value="魔枪士">魔枪士</li>
            <li data-value="征战者">征战者</li>
            <li data-value="战魂">战魂</li>
            <li data-value="不灭战神">不灭战神</li>
            <li data-value="决战者">决战者</li>
            <li data-value="无双之魂">无双之魂</li>
            <li data-value="圣武枪魂">圣武枪魂</li>
            <li data-value="黑暗武士">黑暗武士</li>
            <li data-value="全职业">全职业</li>
            <li data-value="鬼剑士">鬼剑士</li>
            <li data-value="驭剑士">驭剑士</li>
            <li data-value="剑宗">剑宗</li>
            <li data-value="剑皇">剑皇</li>
            <li data-value="暗殿骑士">暗殿骑士</li>
            <li data-value="暗帝">暗帝</li>
            <li data-value="裁决女神">裁决女神</li>
            <li data-value="契魔者">契魔者</li>
            <li data-value="剑魔">剑魔</li>
            <li data-value="弑神者">弑神者</li>
            <li data-value="流浪武士">流浪武士</li>
            <li data-value="剑豪">剑豪</li>
            <li data-value="剑帝">剑帝</li>
            <li data-value="格斗家">格斗家</li>
            <li data-value="气功师">气功师</li>
            <li data-value="百花缭乱">百花缭乱</li>
            <li data-value="念帝">念帝</li>
            <li data-value="散打">散打</li>
            <li data-value="武神">武神</li>
            <li data-value="极武圣">极武圣</li>
            <li data-value="街霸">街霸</li>
            <li data-value="毒王">毒王</li>
            <li data-value="毒神绝">毒神绝</li>
            <li data-value="柔道家">柔道家</li>
            <li data-value="暴风眼">暴风眼</li>
            <li data-value="风暴女皇">风暴女皇</li>
            <li data-value="神枪手">神枪手</li>
            <li data-value="漫游枪手">漫游枪手</li>
            <li data-value="沾血玫瑰">沾血玫瑰</li>
            <li data-value="绯红玫瑰">绯红玫瑰</li>
            <li data-value="枪炮师">枪炮师</li>
            <li data-value="重炮掌控者">重炮掌控者</li>
            <li data-value="风暴骑兵">风暴骑兵</li>
            <li data-value="机械师">机械师</li>
            <li data-value="机械之心">机械之心</li>
            <li data-value="机械之灵">机械之灵</li>
            <li data-value="弹药专家">弹药专家</li>
            <li data-value="战争女神">战争女神</li>
            <li data-value="芙蕾雅">芙蕾雅</li>
            <li data-value="魔法师">魔法师</li>
            <li data-value="元素师">元素师</li>
            <li data-value="大魔导师">大魔导师</li>
            <li data-value="元素圣灵">元素圣灵</li>
            <li data-value="召唤师">召唤师</li>
            <li data-value="月之女皇">月之女皇</li>
            <li data-value="月蚀">月蚀</li>
            <li data-value="战斗法师">战斗法师</li>
            <li data-value="贝亚娜斗神">贝亚娜斗神</li>
            <li data-value="伊斯塔战灵">伊斯塔战灵</li>
            <li data-value="魔道学者">魔道学者</li>
            <li data-value="魔术师">魔术师</li>
            <li data-value="古灵精怪">古灵精怪</li>
            <li data-value="圣职者">圣职者</li>
            <li data-value="圣骑士">圣骑士</li>
            <li data-value="福音传道者">福音传道者</li>
            <li data-value="炽天使">炽天使</li>
            <li data-value="异端审判者">异端审判者</li>
            <li data-value="神焰行刑官">神焰行刑官</li>
            <li data-value="炎狱裁决者">炎狱裁决者</li>
            <li data-value="巫女">巫女</li>
            <li data-value="神女">神女</li>
            <li data-value="神龙天女">神龙天女</li>
            <li data-value="诱魔者">诱魔者</li>
            <li data-value="断罪者">断罪者</li>
            <li data-value="救世主">救世主</li>
            <li data-value="暗夜使者">暗夜使者</li>
            <li data-value="刺客">刺客</li>
            <li data-value="银月">银月</li>
            <li data-value="月影星劫">月影星劫</li>
            <li data-value="死灵术士">死灵术士</li>
            <li data-value="灵魂收割者">灵魂收割者</li>
            <li data-value="亡魂主宰">亡魂主宰</li>
            <li data-value="忍者">忍者</li>
            <li data-value="毕方之炎">毕方之炎</li>
            <li data-value="不知火">不知火</li>
            <li data-value="影舞者">影舞者</li>
            <li data-value="梦魇">梦魇</li>
            <li data-value="幽冥">幽冥</li>
            <li data-value="缔造者">缔造者</li>
            <li data-value="守护者">守护者</li>
            <li data-value="精灵骑士">精灵骑士</li>
            <li data-value="星辰之光">星辰之光</li>
            <li data-value="大地女神">大地女神</li>
            <li data-value="混沌魔灵">混沌魔灵</li>
            <li data-value="黑魔后">黑魔后</li>
            <li data-value="黑曜神">黑曜神</li>
            <li data-value="帕拉丁">帕拉丁</li>
            <li data-value="曙光">曙光</li>
            <li data-value="破晓女神">破晓女神</li>
            <li data-value="龙骑士">龙骑士</li>
            <li data-value="龙皇">龙皇</li>
            <li data-value="龙神">龙神</li></ul>
        </div>
      </div>
    </div>
    <div class="form-item">
      <div class="form-item-l">
        <i>*</i>
        <span>身份证：</span></div>
      <div class="form-item-r">
        <div class="comselect callback must h-30">
          <div class="comselect-val">
            <input type="text" readonly="readonly" class="comselect-input title-prefix" placeholder="请选择" value="" data-value="">
            <input datatype="comselect" type="hidden" name="parameters[50235]" value="" class="value" nullmsg="请选择角色性别">
            <div class="comselect-icon">
              <em class="iconfont icon-down"></em>
              <em class="iconfont icon-up"></em></div>
            <span class="Validform_checktip"></span>
          </div>
          <ul class="comselect-menu">
            <li data-value="">请选择</li>
            <li data-value="身份证已设置">身份证已设置</li>
            <li data-value="身份证未设置">身份证未设置</li></ul>
        </div>
      </div>
    </div>
    <div class="form-item">
      <div class="form-item-l">
        <i>*</i>
        <span>QQ等级：</span></div>
      <div class="form-item-r">
        <div class="comselect callback must h-30">
          <div class="comselect-val">
            <input type="text" readonly="readonly" class="comselect-input title-prefix" placeholder="请选择" value="" data-value="">
            <input datatype="comselect" type="hidden" name="parameters[50236]" value="" class="value" nullmsg="请选择角色性别">
            <div class="comselect-icon">
              <em class="iconfont icon-down"></em>
              <em class="iconfont icon-up"></em></div>
            <span class="Validform_checktip"></span>
          </div>
          <ul class="comselect-menu">
            <li data-value="">请选择</li>
            <li data-value="QQ等级0级">QQ等级0级</li>
            <li data-value="QQ等级1-5级">QQ等级1-5级</li>
            <li data-value="QQ等级6-10级">QQ等级6-10级</li>
            <li data-value="QQ等级11-20级">QQ等级11-20级</li>
            <li data-value="QQ等级21-30级">QQ等级21-30级</li>
            <li data-value="QQ等级31-40级">QQ等级31-40级</li>
            <li data-value="QQ等级40级以上">QQ等级40级以上</li></ul>
        </div>
      </div>
    </div>
    <div class="form-item">
      <div class="form-item-l">
        <i>*</i>
        <span>QQ好友：</span></div>
      <div class="form-item-r">
        <div class="comselect callback must h-30">
          <div class="comselect-val">
            <input type="text" readonly="readonly" class="comselect-input title-prefix" placeholder="请选择" value="" data-value="">
            <input datatype="comselect" type="hidden" name="parameters[50237]" value="" class="value" nullmsg="请选择角色性别">
            <div class="comselect-icon">
              <em class="iconfont icon-down"></em>
              <em class="iconfont icon-up"></em></div>
            <span class="Validform_checktip"></span>
          </div>
          <ul class="comselect-menu">
            <li data-value="">请选择</li>
            <li data-value="有QQ好友">有QQ好友</li>
            <li data-value="无QQ好友">无QQ好友</li></ul>
        </div>
      </div>
    </div>
  </div>
  <div class="goods-box common-form height-36 clearfix">
    <div class="form-item clearfix" style="z-index: 1;">
      <div class="form-item-l">
        <i>*</i>
        <span>商品标题：</span></div>
      <div class="form-item-r" style="z-index: 1;">
        <p class="goods-title" name="spellTitle">
          <em>【</em>
          <span></span>
          <em>】</em></p>
        <p class="goods-title-extra">
          <em class="iconfont"></em>
          <input placeholder="您可以写填写个性化商品标题，吸引买家眼球" datatype="*" type="text" class="common-input w768 h-36" name="inputTitle" id="" value="" maxlength="50">
          <span>
            <i>0</i>/50</span>
          <span class="Validform_checktip"></span>
        </p>
      </div>
      <input name="title" type="hidden">
      <p class="goods-title-extra aftertit"></p>
    </div>
    <div class="form-item clearfix" style="z-index: 1;">
      <div class="form-item-l">
        <i>*</i>
        <span>卖多少钱：</span></div>
      <div class="form-item-r" style="z-index: 1;">
        <input maxlength="12" datatype="*,howmuch" type="text" class="common-input w100 h-36 wntsell onlynums" name="price" id="" value="">
        <span class="val-unit">元</span>
        <em class="serfee">需要收取手续费
          <i>0.0</i>元
          <a href="http://www.7881.com/helpcenter/73790970494518017.html" target="_blank">[了解更多]</a></em>
        <span class="Validform_checktip"></span>
      </div>
    </div>
    <div class="form-item mrg-b-38 clearfix" style="z-index: 1;">
      <div class="form-item-l">
        <span>账号描述：</span></div>
      <div class="form-item-r" style="z-index: 1;">
        <textarea placeholder="描述一下您的账号情况，丰富详细的描述将更有利于帮助您尽快找到合适的买家。" maxlength="1000" name="description"></textarea>
        <p class="form-tips-b">请您将不出售的商品转移出账号，如未转移，则视为与账号一起出售</p></div>
    </div>
    <div class="form-item twochose clearfix" style="z-index: 1;">
      <div class="form-item-l">
        <i>*</i>
        <span>账号截图服务：</span></div>
      <div class="form-item-r" datatype="onetwo" style="z-index: 1;">
        <input type="hidden" id="hideList" value="[{&quot;machineUploadList&quot;:[&quot;http://userimg.7881.com/2121/2017-09-07/741969bde52f4e90ad1d14229e36d4a7.png&quot;],&quot;picType&quot;:&quot;1&quot;,&quot;serviceCost&quot;:5,&quot;userUploadList&quot;:[]},{&quot;machineUploadList&quot;:[],&quot;picType&quot;:&quot;0&quot;,&quot;serviceCost&quot;:0,&quot;userUploadList&quot;:[{&quot;sort&quot;:2,&quot;typeName&quot;:&quot;个人信息&quot;,&quot;urlList&quot;:[&quot;http://userimg.7881.com/2121/2017-11-28/65ee3113a45a47628c07fed7cf90e609.jpg&quot;]},{&quot;sort&quot;:3,&quot;typeName&quot;:&quot;背包&quot;,&quot;urlList&quot;:[&quot;http://userimg.7881.com/2121/2017-09-07/b9cbfd3ecdd44398804ed6a6816c4fc1.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/946b8229e0534982a8bc2e9154da2314.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/512b5e9affa5411ba7143243f9a472cb.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/d96caf47de8f4c13af3adaae0d0d91f6.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/e0535532410349bf885c46dec850a02a.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/cc81d4bb4d8e442ea31dba1629eaf3f9.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/d2431eed2ce14beabef38504091c7781.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/0c0d83ef003048fc98e79325381cbdba.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/a95fb7d4077248b6be1925c919020987.jpg&quot;]},{&quot;sort&quot;:4,&quot;typeName&quot;:&quot;技能栏&quot;,&quot;urlList&quot;:[&quot;http://userimg.7881.com/2121/2017-11-28/3215474de0df4cd2b756240b677ea4d5.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-11-28/8c962576b34b4552b3ce04941002df01.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-11-28/63fa0b07cdb84bcd87d56f13a7ce89f1.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-11-28/628469da83b245ed8af1f7b5379c1e04.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-11-28/94c6ffff528d4f399ed68922fd2990cf.jpg&quot;]},{&quot;sort&quot;:5,&quot;typeName&quot;:&quot;仓库&quot;,&quot;urlList&quot;:[&quot;http://userimg.7881.com/2121/2017-09-07/7f32840e342b43499796bf6bf0d88fbc.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/b3533b8833b34a14aa7469886ced9caa.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/7fb641c5aa564bc3a940169e411496dc.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/d014bf448e504da884ea98cce2e26b91.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/31a97259ce93460bba842f3e232cd835.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/abc595ce3a6744569959f11d3bc4f559.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/38e38d7b963842faafd4047fa62dd830.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/4a74850094884a758c07d35f927c5063.jpg&quot;,&quot;http://userimg.7881.com/2121/2017-09-07/36134f51d62547099e6928aa83d0cab8.jpg&quot;]},{&quot;sort&quot;:7,&quot;typeName&quot;:&quot;游戏主界面&quot;,&quot;urlList&quot;:[&quot;http://userimg.7881.com/2121/2017-11-28/e6688924c78b426986670fefd2a124f0.jpg&quot;]}]}]">
        <input type="hidden" name="goodsImages">
        <input type="hidden" name="transVoucherImages">
        <input type="hidden" name="machinePrintScreenCert">
        <input type="hidden" name="userPrintScreenCert">
        <input type="hidden" name="passwordcard">
        <input type="hidden" name="hasUploadIdcard">
        <input type="hidden" name="supportRoleSeparation">
        <input type="hidden" name="supportAccountTransfer">
        <input type="hidden" name="gameExtProps" value="[{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号基本信息&quot;,&quot;id&quot;:&quot;56&quot;,&quot;keyid&quot;:&quot;gameaccount&quot;,&quot;keyname&quot;:&quot;游戏账号&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;请填写您的游戏账号信息&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号附加信息&quot;,&quot;id&quot;:&quot;38734&quot;,&quot;keyid&quot;:&quot;idcardpic&quot;,&quot;keyname&quot;:&quot;上传身份证&quot;,&quot;must&quot;:&quot;false&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;image&quot;,&quot;value&quot;:&quot;&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号图片信息&quot;,&quot;id&quot;:&quot;60&quot;,&quot;keyid&quot;:&quot;gameimg1&quot;,&quot;keyname&quot;:&quot;游戏截图1&quot;,&quot;must&quot;:&quot;false&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;image&quot;,&quot;value&quot;:&quot;&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号属性信息&quot;,&quot;id&quot;:&quot;50232&quot;,&quot;keyid&quot;:null,&quot;keyname&quot;:&quot;等级&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;level&quot;},{&quot;compareWith&quot;:&quot;&quot;,&quot;description&quot;:&quot;账号增值服务&quot;,&quot;id&quot;:null,&quot;keyid&quot;:null,&quot;keyname&quot;:&quot;&quot;,&quot;must&quot;:&quot;false&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;&quot;,&quot;value&quot;:&quot;&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号属性信息&quot;,&quot;id&quot;:&quot;50233&quot;,&quot;keyid&quot;:&quot;sex&quot;,&quot;keyname&quot;:&quot;性别&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;select&quot;,&quot;value&quot;:&quot;男,女&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号图片信息&quot;,&quot;id&quot;:&quot;61&quot;,&quot;keyid&quot;:&quot;gameimg2&quot;,&quot;keyname&quot;:&quot;游戏截图2&quot;,&quot;must&quot;:&quot;false&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;image&quot;,&quot;value&quot;:&quot;&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号基本信息&quot;,&quot;id&quot;:&quot;57&quot;,&quot;keyid&quot;:&quot;gamepassword&quot;,&quot;keyname&quot;:&quot;游戏密码&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;password&quot;,&quot;value&quot;:&quot;请输入游戏密码&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号增值服务&quot;,&quot;id&quot;:&quot;1045&quot;,&quot;keyid&quot;:&quot;serviceprice&quot;,&quot;keyname&quot;:&quot;增值服务手续费&quot;,&quot;must&quot;:&quot;false&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;0&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号附加信息&quot;,&quot;id&quot;:&quot;38735&quot;,&quot;keyid&quot;:&quot;idcardpic&quot;,&quot;keyname&quot;:&quot;上传身份证&quot;,&quot;must&quot;:&quot;false&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;image&quot;,&quot;value&quot;:&quot;&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号增值服务&quot;,&quot;id&quot;:&quot;1046&quot;,&quot;keyid&quot;:&quot;accountprice&quot;,&quot;keyname&quot;:&quot;账号过户费用&quot;,&quot;must&quot;:&quot;false&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;0&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号属性信息&quot;,&quot;id&quot;:&quot;50234&quot;,&quot;keyid&quot;:&quot;profession&quot;,&quot;keyname&quot;:&quot;职业&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;50233&quot;,&quot;type&quot;:&quot;select&quot;,&quot;value&quot;:&quot;全职业,鬼剑士,剑魂,剑圣,剑神,鬼泣,弑魂,黑暗君主,狂战士,狱血魔神,帝血弑天,阿修罗,大暗黑天,天帝,格斗家,气功师,狂虎帝,念皇,散打,武极,极武皇,街霸,千手罗汉,暗街之王,柔道家,风林火山,宗师,漫游枪手,枪神,掠天之翼,枪炮师,狂暴者,毁灭者,机械师,机械战神,机械元首,弹药专家,大将军,战场统治者,魔法师,元素爆破师,魔皇,湮灭之瞳,冰结师,冰冻之心,刹那永恒,血法师,血狱伯爵,血狱君主,逐风者,御风者,风神,次元行者,虚空行者,混沌行者,圣职者,圣骑士,天启者,神思者,蓝拳圣使,神之手,正义仲裁者,驱魔师,龙斗士,真龙星君,复仇者,末日审判者,永生者,魔枪士,征战者,战魂,不灭战神,决战者,无双之魂,圣武枪魂,黑暗武士;全职业,鬼剑士,驭剑士,剑宗,剑皇,暗殿骑士,暗帝,裁决女神,契魔者,剑魔,弑神者,流浪武士,剑豪,剑帝,格斗家,气功师,百花缭乱,念帝,散打,武神,极武圣,街霸,毒王,毒神绝,柔道家,暴风眼,风暴女皇,神枪手,漫游枪手,沾血玫瑰,绯红玫瑰,枪炮师,重炮掌控者,风暴骑兵,机械师,机械之心,机械之灵,弹药专家,战争女神,芙蕾雅,魔法师,元素师,大魔导师,元素圣灵,召唤师,月之女皇,月蚀,战斗法师,贝亚娜斗神,伊斯塔战灵,魔道学者,魔术师,古灵精怪,圣职者,圣骑士,福音传道者,炽天使,异端审判者,神焰行刑官,炎狱裁决者,巫女,神女,神龙天女,诱魔者,断罪者,救世主,暗夜使者,刺客,银月,月影星劫,死灵术士,灵魂收割者,亡魂主宰,忍者,毕方之炎,不知火,影舞者,梦魇,幽冥,缔造者,守护者,精灵骑士,星辰之光,大地女神,混沌魔灵,黑魔后,黑曜神,帕拉丁,曙光,破晓女神,龙骑士,龙皇,龙神&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号图片信息&quot;,&quot;id&quot;:&quot;62&quot;,&quot;keyid&quot;:&quot;gameimg3&quot;,&quot;keyname&quot;:&quot;游戏截图3&quot;,&quot;must&quot;:&quot;false&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;image&quot;,&quot;value&quot;:&quot;&quot;},{&quot;compareWith&quot;:&quot;57&quot;,&quot;description&quot;:&quot;账号基本信息&quot;,&quot;id&quot;:&quot;59&quot;,&quot;keyid&quot;:&quot;gamepassword2&quot;,&quot;keyname&quot;:&quot;确认输入密码&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;password&quot;,&quot;value&quot;:&quot;请再次输入游戏密码&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号图片信息&quot;,&quot;id&quot;:&quot;63&quot;,&quot;keyid&quot;:&quot;gameimg4&quot;,&quot;keyname&quot;:&quot;游戏截图4&quot;,&quot;must&quot;:&quot;false&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;image&quot;,&quot;value&quot;:&quot;&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号属性信息&quot;,&quot;id&quot;:&quot;50235&quot;,&quot;keyid&quot;:&quot;idcard&quot;,&quot;keyname&quot;:&quot;身份证&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;select&quot;,&quot;value&quot;:&quot;身份证已设置,身份证未设置&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号基本信息&quot;,&quot;id&quot;:&quot;58&quot;,&quot;keyid&quot;:&quot;gamerole&quot;,&quot;keyname&quot;:&quot;游戏角色名&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;请填写您在游戏中所创建的角色名称&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号增值服务&quot;,&quot;id&quot;:&quot;69273&quot;,&quot;keyid&quot;:&quot;depositservice&quot;,&quot;keyname&quot;:&quot;保证金服务&quot;,&quot;must&quot;:&quot;false&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;hidden&quot;,&quot;value&quot;:&quot;&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号属性信息&quot;,&quot;id&quot;:&quot;50236&quot;,&quot;keyid&quot;:&quot;level&quot;,&quot;keyname&quot;:&quot;QQ等级&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;select&quot;,&quot;value&quot;:&quot;QQ等级0级,QQ等级1-5级,QQ等级6-10级,QQ等级11-20级,QQ等级21-30级,QQ等级31-40级,QQ等级40级以上&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号基本信息&quot;,&quot;id&quot;:&quot;59828&quot;,&quot;keyid&quot;:&quot;idcard&quot;,&quot;keyname&quot;:&quot;身份证号码&quot;,&quot;must&quot;:&quot;false&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;请填写您的身份证号码&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号图片信息&quot;,&quot;id&quot;:&quot;64&quot;,&quot;keyid&quot;:&quot;gameimg5&quot;,&quot;keyname&quot;:&quot;游戏截图5&quot;,&quot;must&quot;:&quot;false&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;image&quot;,&quot;value&quot;:&quot;&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号基本信息&quot;,&quot;id&quot;:&quot;59829&quot;,&quot;keyid&quot;:&quot;pwdproblem1&quot;,&quot;keyname&quot;:&quot;密保问题1&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;selectinput&quot;,&quot;value&quot;:&quot;您母亲的姓名是？,您父亲的姓名是？,您配偶的姓名是？,您的出生地是？,您的高中班主任的名字是？,您的初中班主任的名字是？,您的小学班主任的名字是？,您的学号（或工号）是？,您父亲的生日是？,您母亲的生日是？,您配偶的生日是？,您最熟悉的童年好友名字是？,对您影响最大的人名字是？,您配偶的职业是？,您父亲的职业是？,您母亲的职业是？,您小学的校名是？,您最熟悉的学校宿舍室友名是?&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号属性信息&quot;,&quot;id&quot;:&quot;50237&quot;,&quot;keyid&quot;:&quot;friend&quot;,&quot;keyname&quot;:&quot;QQ好友&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;select&quot;,&quot;value&quot;:&quot;有QQ好友,无QQ好友&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号基本信息&quot;,&quot;id&quot;:&quot;91396&quot;,&quot;keyid&quot;:&quot;pwdanswer1&quot;,&quot;keyname&quot;:&quot;密保答案1&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号基本信息&quot;,&quot;id&quot;:&quot;59830&quot;,&quot;keyid&quot;:&quot;pwdproblem2&quot;,&quot;keyname&quot;:&quot;密保问题2&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;selectinput&quot;,&quot;value&quot;:&quot;您母亲的姓名是？,您父亲的姓名是？,您配偶的姓名是？,您的出生地是？,您的高中班主任的名字是？,您的初中班主任的名字是？,您的小学班主任的名字是？,您的学号（或工号）是？,您父亲的生日是？,您母亲的生日是？,您配偶的生日是？,您最熟悉的童年好友名字是？,对您影响最大的人名字是？,您配偶的职业是？,您父亲的职业是？,您母亲的职业是？,您小学的校名是？,您最熟悉的学校宿舍室友名是?&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号基本信息&quot;,&quot;id&quot;:&quot;91397&quot;,&quot;keyid&quot;:&quot;pwdanswer2&quot;,&quot;keyname&quot;:&quot;密保答案2&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号基本信息&quot;,&quot;id&quot;:&quot;59833&quot;,&quot;keyid&quot;:&quot;pwdproblem3&quot;,&quot;keyname&quot;:&quot;密保问题3&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;selectinput&quot;,&quot;value&quot;:&quot;您母亲的姓名是？,您父亲的姓名是？,您配偶的姓名是？,您的出生地是？,您的高中班主任的名字是？,您的初中班主任的名字是？,您的小学班主任的名字是？,您的学号（或工号）是？,您父亲的生日是？,您母亲的生日是？,您配偶的生日是？,您最熟悉的童年好友名字是？,对您影响最大的人名字是？,您配偶的职业是？,您父亲的职业是？,您母亲的职业是？,您小学的校名是？,您最熟悉的学校宿舍室友名是?&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号基本信息&quot;,&quot;id&quot;:&quot;91398&quot;,&quot;keyid&quot;:&quot;pwdanswer3&quot;,&quot;keyname&quot;:&quot;密保答案&quot;,&quot;must&quot;:&quot;true&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号基本信息&quot;,&quot;id&quot;:&quot;59834&quot;,&quot;keyid&quot;:&quot;secondpassword&quot;,&quot;keyname&quot;:&quot;二级密码&quot;,&quot;must&quot;:&quot;false&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;请填写您的二级密码，未设置请填0&quot;},{&quot;compareWith&quot;:&quot;0&quot;,&quot;description&quot;:&quot;账号基本信息&quot;,&quot;id&quot;:&quot;59835&quot;,&quot;keyid&quot;:&quot;pwdstore&quot;,&quot;keyname&quot;:&quot;仓库密码&quot;,&quot;must&quot;:&quot;false&quot;,&quot;parentid&quot;:&quot;&quot;,&quot;pid&quot;:&quot;&quot;,&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;&quot;}]">
        <input type="hidden" name="needUploadTransVoucher">
        <div class="upload-box on">
          <div class="upload-title">
            <label>
              <input type="checkbox" checked="checked" id="machineCertCbox">
              <span>上号截图认证</span></label>
            <p>
              <span>5元/次</span>，费用将在交易成功后自动扣除</p></div>
          <div class="upload-content">
            <p class="orange-stip">1.据7881准确数据统计，选择“上号截图认证”服务，可以有效的将出售成功率提升80%以上；
              <br>2.为保证客服顺利上号截图，请您提供正确的密码及密保卡信息，并在发布后半小时内不要登录游戏或修改相关密码；
              <br>3.如您的帐号有密保手机，手机令牌或者安全锁，请解除以便账号能够顺利交易，否则可能无法通过审核。</p>
            <div class="imgs-exp">
              <img src="http://userimg.7881.com/2121/2017-09-07/741969bde52f4e90ad1d14229e36d4a7.png" width="100%" height="112"></div>
          </div>
        </div>
        <div class="upload-box" filenumlimit="10">
          <div class="upload-title">
            <label class="title-left">
              <input type="checkbox" id="userCertCbox">
              <span>自行上传截图</span></label>
            <p>
              <span>免费</span>，可以上传您认为有卖点的账号图片</p></div>
          <div class="upload-content">
            <p class="orange-stip">1.如您的帐号有密保手机，手机令牌或者安全锁，请解除以便账号能够顺利交易，否则可能无法通过审核；
              <br>2.截图中不能带有人物角色名、QQ号、联系方式、广告等违规信息(违规将被删除)，支持jpg、png格式；
              <br>3.上传装备、人物属性等图片建议800×800以上，单张图片需小于2M，买家购买时可大图查看，更利于出售。</p>
            <div class="upload-tabs clearfix">
              <ul>
                <li class="on" id="uploadTab0">个人信息
                  <em></em></li>
                <li id="uploadTab1">背包
                  <em></em></li>
                <li id="uploadTab2">技能栏
                  <em></em></li>
                <li id="uploadTab3">仓库
                  <em></em></li>
                <li id="uploadTab4">游戏主界面
                  <em></em></li>
              </ul>
            </div>
            <div class="imgs-exp">
              <h3>
                <b>图例</b>不懂该截什么样的图？点击以下图例查看大图</h3>
              <div class="picScroll-left">
                <div class="hd">
                  <a class="next iconfont nextStop"></a>
                  <a class="prev iconfont prevStop"></a></div>
                <div class="bd">
                  <div class="tempWrap" style="overflow:hidden; position:relative; width:600px">
                    <ul class="picList" id="picListUl" style="width: 700px; left: 0px; position: relative; overflow: hidden; padding: 0px; margin: 0px;">
                      <li style="float: left; width: 90px;">
                        <div class="pic">
                          <a href="http://userimg.7881.com/2121/2017-11-28/65ee3113a45a47628c07fed7cf90e609.jpg" class="example-image-link" data-lightbox="example-set" data-title="7881示例截图">
                            <img class="example-image" src="http://userimg.7881.com/2121/2017-11-28/65ee3113a45a47628c07fed7cf90e609.jpg" width="90" height="90"></a>
                        </div>
                        <div class="title">个人信息</div>
                        <div class="title2">
                          <img src="http://pic.7881.com/7881-2016/images/goods-publish/pic-example-icon.png" width="90" height="20"></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p class="upload-tips">
              <span>
                <em class="iconfont"></em>请自行登录账号截图上传，合计最多上传10张，每张图片的大小不能超过2M</span>
              <b>还能上传
                <em id="residueNum">10</em>张</b></p>
            <div class="upload-area printScreen" datatype="acc_nopic">
              <div id="uploader" class="bl-uploader-box clearfix">
                <div class="uploader-list"></div>
                <div class="uploader-list"></div>
                <!--用来存放文件信息-->
                <div id="thelist" class="uploader-list"></div>
                <div class="btns">
                  <div id="picker" class="tppicker webuploader-container">
                    <div class="webuploader-pick">
                      <div class="webuploader-pick">
                        <div class="webuploader-pick">
                          <em class="iconfont"></em></div>
                        <div id="rt_rt_1bopd21qh1im9v8facnor51g2u1" style="position: absolute; top: 0px; left: 0px; width: 118px; height: 118px; overflow: hidden; bottom: auto; right: auto;">
                          <input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="image/jpg,image/jpeg,image/png">
                          <label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label>
                        </div>
                      </div>
                      <div id="rt_rt_1c3070ls4ac96kkbgur5d1c601" style="position: absolute; top: 0px; left: 0px; width: 118px; height: 118px; overflow: hidden; bottom: auto; right: auto;">
                        <input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="image/jpg,image/jpeg,image/png">
                        <label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label>
                      </div>
                    </div>
                    <div id="rt_rt_1c3070m231epif631f701om910opa" style="position: absolute; top: 0px; left: 0px; width: 118px; height: 118px; overflow: hidden; bottom: auto; right: auto;">
                      <input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="image/jpg,image/jpeg,image/png">
                      <label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span class="Validform_checktip"></span>
          </div>
        </div>
      </div>
      <span class="Validform_checktip"></span>
    </div>
  </div>
</div>`;

    var components={
        name: "Gold",
        template: html,
        watch: {
            num: function (newQuestion) {
                // this.price;
            },
        },
        data: function () {
            return {
                dealway: "邮寄交易",
                num: 0,
                percent: 0.02,
            }
        },
        created() {
            this.$parent.account_info_com="GoldAccountInfo";
        },
        methods: {
            ChangeTradeType: function (type) {
                this.$parent.account_info_com=type===1?"SecurityCode":"GoldAccountInfo";
            },
        },
        computed: {
            // 计算属性的 getter
            price: function () {
                return this.num*this.percent;
            }
        },
        components: {
            "TradeType": TradeType,
        },
    };
    return components;
});