<template>
  <div id="wrapper">
    <div class="" style="display: block">
      <div class="top-header fixed-top border-bottom" style="z-index: 61;">
        <div class="top-back">
          <a>
          </a>
        </div>
        <h2 class="f36">{{searchModel.GameName}}</h2>
        <div class="top-right"></div>
      </div>
      <div data-v-6b09e788="" id="#goodslist">
        <div data-v-6b09e788="" class="fixed-top fixed-box" style="z-index: 39;">
          <div data-v-6b09e788="" class="mobilegames-nav border-bottom mt-97 bg-fff ">
            <div data-v-6b09e788="" class="gmnav-mle">
              <div data-v-6b09e788="" class="navdemo">
                <a data-v-6b09e788="" @click="ToggleConditionTab('goodsType')">
                  <span data-v-6b09e788="" class="mold color-666 f30">{{searchModel.GoodTypeName}}</span>
                </a>
              </div>
              <div data-v-6b09e788="" class="navdemo">
                <a data-v-6b09e788="" @click="ToggleConditionTab('server')">
                  <span data-v-6b09e788="" class="server color-666 f30" v-show="!searchModel.GameServerName">全区全服</span>
                  <span data-v-6b09e788="" class="server color-666 f30" v-show="!!searchModel.GameServerName">{{searchModel.GameServerName}}</span>
                </a>
              </div>
              <div data-v-6b09e788="" class="navdemo">
                <a data-v-6b09e788="" @click="ToggleConditionTab('sort')">
                  <span data-v-6b09e788="" class="sortin color-666 f30">
                    默认排序 <span class="color-999">(按最新发布排序)</span>
                  </span>
                </a>
              </div>
              <div data-v-6b09e788="" class="navdemo">
                <a data-v-6b09e788="">
                  <span data-v-6b09e788="" class="screen color-666 f30" @click="ToggleConditionTab('filter')">筛选</span>
                </a>
              </div>
            </div>
          </div>
          <div data-v-6b09e788="" class="default_numb" v-show="conditionTab.goodsType">
            <ul data-v-6b09e788="" class="dft-coin">
              <li data-v-6b09e788="" v-for="goodtype in searchModel.goodsTypes" v-bind:key="goodtype.Id" :class="setActive(goodtype.Name,'goodsTypes')">
                <a data-v-6b09e788="" @click="setValue({GoodTypeId:goodtype.Id,GoodTypeName:goodtype.Name});ToggleConditionTab('goodsType')">{{goodtype.Name}}</a>
              </li>

            </ul>
            <div data-v-6b09e788="" class="mstfiv" style="margin-top: 0.96rem;"></div>
          </div>
          <!---->
          <div data-v-6b09e788="" class="default_numb" v-show="conditionTab.sort">
            <ul data-v-6b09e788="">
              <li data-v-6b09e788="" class="active">
                <a data-v-6b09e788="">
                  默认排序 <span class="color-999">(按最新发布排序)</span>
                </a>
              </li>
              <li data-v-6b09e788="" class="">
                <a data-v-6b09e788="">
                  价格最低 <span class="color-999">(按价格从低到高排序)</span>
                </a>
              </li>
              <li data-v-6b09e788="" class="">
                <a data-v-6b09e788="">
                  价格最高 <span class="color-999">(按价格从高到低排序)</span>
                </a>
              </li>
            </ul>
            <div data-v-6b09e788="" class="mstfiv" style="margin-top: 0.96rem;"></div>
          </div>

          <div data-v-7b64404c="" data-v-6b09e788="" v-show="conditionTab.server">
            <div data-v-7b64404c="" class="seach-list">
              <div data-v-7b64404c="" class="gmvst-profile ">
                <div data-v-7b64404c="" class="gmvst-server fl">
                  <ul data-v-7b64404c="">
                    <!---->
                    <li data-v-7b64404c="" class="border-bottom curren">
                      <a data-v-7b64404c="" @click='setValue({GameGroupName:""})'>
                        <span data-v-7b64404c="" class="f30 color-000" v-show="!searchModel.GameGroupName">
                          选择区
                          <i data-v-7b64404c="" class="close"></i>
                        </span>
                        <span data-v-7b64404c="" class="f30 color-000" v-show="!!searchModel.GameGroupName">
                          {{searchModel.GameGroupName}}
                          <i data-v-7b64404c="" class="close"></i>
                        </span>
                      </a>
                    </li>
                    <li data-v-7b64404c="" class="border-bottom">
                      <a data-v-7b64404c="">
                        <span data-v-7b64404c="" class="f30 color-000">
                          选择服
                          <i data-v-7b64404c="" class="close"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div data-v-7b64404c="" class="gmvst-area bg-fff">
                  <div data-v-7b64404c="" class="gmvst-server">
                    <div data-v-7b64404c="" class="gvst-seach mx-30 my-20 border py-15 px-20">
                      <input data-v-7b64404c="" name="" type="text" placeholder="请输入服务器名称" class="server-input" v-model="serverKeyWords">
                    </div>
                  </div>
                  <ul data-v-7b64404c="" class="pl-30" v-show="!searchModel.GameGroupName">
                    <a @click='setValue({GameGroupName:group.Name,GameGroupId:group.Id})' v-for='group in filterGroupList' v-bind:key="group.Id">
                      <li data-v-7b64404c="" class="border-bottom">
                        <span data-v-7b64404c="" class="f30 color-000">{{group.Name}}</span>
                      </li>
                    </a>

                    <li data-v-7b64404c="" class="border-bottom">
                      <span data-v-7b64404c="" class="f30 color-000">体验区</span>
                    </li>
                  </ul>
                  <ul data-v-7b64404d="" class="pl-30" v-show="!!searchModel.GameGroupName">
                    <a @click="setValue({GameServerName:server.Name,GameServerId:server.Id});ToggleConditionTab('server');SearchList();" v-for='server in filterServerList' v-bind:key="server.Id">
                      <li data-v-7b64404c="" class="border-bottom">
                        <span data-v-7b64404c="" class="f30 color-000">{{server.Name}}</span>
                      </li>
                    </a>

                    <li data-v-7b64404c="" class="border-bottom">
                      <span data-v-7b64404c="" class="f30 color-000">体验区</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!---->
            <div data-v-7b64404c="" class="shade" style="display:none"></div>
          </div>
        </div>
        <div data-v-6b09e788="" class="fixed-top mt-193" v-show="!conditionTab.filter">
          <div data-v-6b09e788="" class="mbaccounts-seach">
            <div data-v-6b09e788="" class="container-ms px-30">
              <div data-v-6b09e788="" class="container-inp bg-fff">
                <span data-v-6b09e788="" class="color-ccc f30">输入关键字搜索</span>
              </div>
              <i data-v-6b09e788="" class="fr del-icon" style="display: none;"></i>
            </div>
          </div>
        </div>
        <div data-v-6b09e788="" class="goods-container pt-287" v-show="!conditionTab.filter">
          <div data-v-6b09e788=""></div>
          <!---->
          <div data-v-6b09e788="" class="list-main content " style="overflow: visible;">
            <div class="mint-loadmore" id="boxs" infinite-scroll-disabled="busy" infinite-scroll-distance="100" infinite-scroll-immediate-check="false" data-v-6b09e788="">
              <div class="mint-loadmore-content" style="transform: translate3d(0px, 0px, 0px);">
                <!---->
                <div data-v-6b09e788="" id="istScroll 111" class="lists bg-f1">
                  <div v-for="good in goodsList" v-bind:key="good.Id">

                    <router-link :to="{ path: '/goodsDetail', query: {GoodNo:good.GoodNo} }" class="dis-b clearfix ps-r">
                      <div data-v-6b09e788="" class="account-01 pro-list-01 mb-20 border-top" style="overflow: visible;">
                        <div data-v-6b09e788="" class="mbilegames-list" style="overflow: visible;">
                          <div data-v-6b09e788="" class="listware">
                            <div data-v-6b09e788="" class="mbgmes-img fl">
                              <img data-v-6b09e788="" src="" />
                              <div data-v-6b09e788="" class="picmun">
                                <span data-v-6b09e788="" class="f22 color-fff fontarial">1</span>
                              </div>
                            </div>
                            <div data-v-6b09e788="" class="mbgmes-con">
                              <div data-v-6b09e788="" class="mbl-title f32 color-000">
                                {{good.GoodTitle}}
                              </div>
                              <div data-v-6b09e788="" class="mbl-cper">
                                <div data-v-6b09e788="" class="mbl-money color-m1 f32 fl">
                                  ￥{{good.GoodPrice}}
                                </div>
                                <!---->
                                <div data-v-6b09e788="" class="mbl-icon fr">
                                  <i data-v-6b09e788="" class="an"></i>
                                  <i data-v-6b09e788="" class="tu"></i>
                                  <i data-v-6b09e788="" class="zhao"></i>
                                  <i data-v-6b09e788="" class="pei"></i>
                                </div>
                              </div>
                              <div data-v-6b09e788="" class="mbl-parea color-666 f26">
                                {{good.GroupName}}/{{good.ServerName}}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </router-link>
                    <a data-v-6b09e788="" style="display: block; width: 100%;">

                      <!---->
                      <!---->
                      <!---->
                    </a>
                  </div>

                  <div data-v-6b09e788="" class="tab-empty" v-show="waterInfo.isEnd">
                    <div data-v-6b09e788="" class="empty-conn">
                      <div data-v-6b09e788="" class="list-img">
                        <img data-v-6b09e788="" src="" />
                      </div>
                      <div data-v-6b09e788="" class="emp-text f28 color-999 text-center">
                        抱歉，没有更多商品了~
                      </div>
                    </div>
                  </div>
                </div>
                <!---->
              </div>
            </div>
            <div data-v-f8a2cc82="" data-v-6b09e788="">
              <a data-v-f8a2cc82="" id="BackToTop" style="display: none;" class=""></a>
            </div>
          </div>
          <div data-v-6b09e788="" class="xiaoneng">
            <em data-v-6b09e788=""></em>
          </div>
          <div data-v-6b09e788="" class="smallfood">
            <em data-v-6b09e788=""></em>
          </div>
          <div data-v-6b09e788="" class="tab-empty" style="display: none;">
            <div data-v-6b09e788="" class="empty-conn">
              <div data-v-6b09e788="" class="list-img">
                <img data-v-6b09e788="" src="" />
              </div>
              <div data-v-6b09e788="" class="emp-text f28 color-999 text-center">抱歉，没有更多商品了~</div>
            </div>
          </div>
          <div data-v-6b09e788="" class="page-infinite-loading" v-show="waterInfo.loading">
            <span data-v-6b09e788="" class="loading">加载中...</span>
          </div>
          <div data-v-9a6d962a="" data-v-6b09e788="">
            <div data-v-9a6d962a="" id="navigation"></div>
            <div data-v-9a6d962a="" id="navigationModal">
              <span data-v-9a6d962a="">
                <div data-v-9a6d962a="" id="navigationList" class="navigationList" style="display: none;">
                  <div data-v-9a6d962a="" class="navigationBody f28 fw">
                    <a data-v-9a6d962a="" href="https://m.5173.com/" class="nav01">
                      <span data-v-9a6d962a=""></span>主页
                    </a>
                    <a data-v-9a6d962a="" href="https://m.5173.com/vue/choice/buyEntry?goodsType=3&amp;typename=%E6%B8%B8%E6%88%8F%E5%B8%81" class="nav02">
                      <span data-v-9a6d962a=""></span>买游戏币
                    </a>
                    <a data-v-9a6d962a="" href="https://m.5173.com/vue/choice/buyEntry?goodsType=2&amp;typename=%E5%B8%90%E5%8F%B7" class="nav03">
                      <span data-v-9a6d962a=""></span>买帐号
                    </a>
                    <a data-v-9a6d962a="" href="https://m.5173.com/vue/dl" class="nav04">
                      <span data-v-9a6d962a=""></span>代练
                    </a>
                    <a data-v-9a6d962a="" href="https://m.5173.com/vue/choice/buyEntry?goodsType=1&amp;typename=%E8%A3%85%E5%A4%87" class="nav07">
                      <span data-v-9a6d962a=""></span>买装备
                    </a>
                    <a data-v-9a6d962a="" href="https://m.5173.com/vue/center" class="nav08">
                      <span data-v-9a6d962a=""></span>我的
                    </a>
                  </div>
                  <div data-v-9a6d962a="" class="navigationBuy f32 fw">
                    <a data-v-9a6d962a="" href="https://m.5173.com/vue/sell-home/2" class="toBuy">我要卖</a>
                  </div>
                  <div data-v-9a6d962a="" class="navigationClose fw">
                    <a data-v-9a6d962a="" href="https://m.5173.com/vue/pcGoodsList/44343b06076d4a7a95a0ef22aac481ae/%E5%9C%B0%E4%B8%8B%E5%9F%8E%E4%B8%8E%E5%8B%87%E5%A3%AB/2#" class="toClose">关闭</a>
                  </div>
                </div>
                <div data-v-9a6d962a="" class="maskdiv4" style="display: none;"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-v-6b09e788="" class="goodslist-02 pb-200" v-show="conditionTab.filter">
      <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
        <div data-v-6b09e788="" class="top-back">
          <a data-v-6b09e788=""></a>
        </div>
        <h2 data-v-6b09e788="" class="f36 ">精准筛选</h2>
        <div data-v-6b09e788="" class="top-right"></div>
      </div>
      <div data-v-6b09e788="" class="mt-97"></div>
      <div data-v-6b09e788="" class="screen-price bg-fff">
        <div data-v-6b09e788="" class="screen-titl border-bottom color-000 f32 px-30 bg-fff screen-ico">
          价格区间
        </div>
        <div data-v-6b09e788="" class="price-list px-30 py-30">
          <input data-v-6b09e788="" type="tel" placeholder="最低价" maxlength="7" class="price-input fl f30" v-model="searchModelSub.minPrice" />
          <span data-v-6b09e788="" class="hern fl"></span>
          <input data-v-6b09e788="" type="tel" placeholder="最高价" maxlength="7" class="price-input fl f30" v-model="searchModelSub.maxPrice" />
        </div>
      </div>
      <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico">
        <i data-v-6b09e788="" class="fr src-ico manycheck" @click="searchModelSub.chooseZQ=true">不限</i>
        战区
        <!---->
      </div>
      <div data-v-6b09e788="" class="screen-price bg-fff">
        <!---->
        <!---->
        <!---->
        <div data-v-6b09e788="" v-show="searchModelSub.chooseZQ">
          <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
          <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
            <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
              <div data-v-6b09e788="" class="top-back">
                <a data-v-6b09e788="">返回</a>
              </div>
              <h2 data-v-6b09e788="" class="f36">战区</h2>
            </div>
            <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
              <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
                <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
              </div>
            </div>
            <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
              <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;"></ul>
            </div>
            <div data-v-6b09e788="" class="filter-confirm  bg-fff">
              <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff">确定</a>
            </div>
          </div>
        </div>
      </div>
      <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico">
        <i data-v-6b09e788="" class="fr src-ico manycheck">不限</i>
        角色职业
        <!---->
      </div>
      <div data-v-6b09e788="" class="screen-price bg-fff">
        <!---->
        <!---->
        <!---->
        <div data-v-6b09e788="" style="display: none;">
          <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
          <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
            <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
              <div data-v-6b09e788="" class="top-back">
                <a data-v-6b09e788="">返回</a>
              </div>
              <h2 data-v-6b09e788="" class="f36">角色职业</h2>
            </div>
            <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
              <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
                <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
              </div>
            </div>
            <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
              <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;"></ul>
            </div>
            <div data-v-6b09e788="" class="filter-confirm  bg-fff">
              <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff">确定</a>
            </div>
          </div>
        </div>
      </div>
      <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico">
        <!---->
        角色性别
        <!---->
      </div>
      <div data-v-6b09e788="" class="screen-price bg-fff">
        <!---->
        <div data-v-6b09e788="" class="price-type pl-30 pt-30">
          <ul data-v-6b09e788="">
            <li data-v-6b09e788="" class="fl mb-30">
              <a data-v-6b09e788="">
                <span data-v-6b09e788="" class="border f30">男</span>
              </a>
            </li>
            <li data-v-6b09e788="" class="fl mb-30">
              <a data-v-6b09e788="">
                <span data-v-6b09e788="" class="border f30">女</span>
              </a>
            </li>
          </ul>
          <!---->
        </div>
        <!---->
        <div data-v-6b09e788="" style="display: none;">
          <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
          <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
            <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
              <div data-v-6b09e788="" class="top-back">
                <a data-v-6b09e788="">返回</a>
              </div>
              <h2 data-v-6b09e788="" class="f36">角色性别</h2>
            </div>
            <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
              <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
                <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
              </div>
            </div>
            <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
              <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;"></ul>
            </div>
            <div data-v-6b09e788="" class="filter-confirm  bg-fff">
              <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff">确定</a>
            </div>
          </div>
        </div>
      </div>
      <!---->
      <div data-v-6b09e788="" class="screen-price bg-fff">
        <!---->
        <!---->
        <!---->
        <div data-v-6b09e788="" style="display: none;">
          <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
          <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
            <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
              <div data-v-6b09e788="" class="top-back">
                <a data-v-6b09e788="">返回</a>
              </div>
              <h2 data-v-6b09e788="" class="f36">角色等级</h2>
            </div>
            <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
              <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
                <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
              </div>
            </div>
            <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
              <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;"></ul>
            </div>
            <div data-v-6b09e788="" class="filter-confirm  bg-fff">
              <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff">确定</a>
            </div>
          </div>
        </div>
      </div>
      <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico">
        <!---->
        QQ等级
        <!---->
      </div>
      <div data-v-6b09e788="" class="screen-price bg-fff">
        <!---->
        <div data-v-6b09e788="" class="price-type pl-30 pt-30">
          <ul data-v-6b09e788="">
            <li data-v-6b09e788="" class="fl mb-30">
              <a data-v-6b09e788="">
                <span data-v-6b09e788="" class="border f30">QQ等级0级</span>
              </a>
            </li>
            <li data-v-6b09e788="" class="fl mb-30">
              <a data-v-6b09e788="">
                <span data-v-6b09e788="" class="border f30">QQ等级1-5级</span>
              </a>
            </li>
            <li data-v-6b09e788="" class="fl mb-30">
              <a data-v-6b09e788="">
                <span data-v-6b09e788="" class="border f30">QQ等级6-10级</span>
              </a>
            </li>
            <li data-v-6b09e788="" class="fl mb-30">
              <a data-v-6b09e788="">
                <span data-v-6b09e788="" class="border f30">QQ等级11-20级</span>
              </a>
            </li>
            <li data-v-6b09e788="" class="fl mb-30">
              <a data-v-6b09e788="">
                <span data-v-6b09e788="" class="border f30">QQ等级21-30级</span>
              </a>
            </li>
            <li data-v-6b09e788="" class="fl mb-30">
              <a data-v-6b09e788="">
                <span data-v-6b09e788="" class="border f30">QQ等级31-40级</span>
              </a>
            </li>
            <li data-v-6b09e788="" class="fl mb-30">
              <a data-v-6b09e788="">
                <span data-v-6b09e788="" class="border f30">QQ等级40级以上</span>
              </a>
            </li>
          </ul>
          <!---->
        </div>
        <!---->
        <div data-v-6b09e788="" style="display: none;">
          <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
          <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
            <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
              <div data-v-6b09e788="" class="top-back">
                <a data-v-6b09e788="">返回</a>
              </div>
              <h2 data-v-6b09e788="" class="f36">QQ等级</h2>
            </div>
            <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
              <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
                <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
              </div>
            </div>
            <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
              <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;"></ul>
            </div>
            <div data-v-6b09e788="" class="filter-confirm  bg-fff">
              <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff">确定</a>
            </div>
          </div>
        </div>
      </div>
      <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico">
        <!---->
        QQ好友
        <!---->
      </div>
      <div data-v-6b09e788="" class="screen-price bg-fff">
        <!---->
        <div data-v-6b09e788="" class="price-type pl-30 pt-30">
          <ul data-v-6b09e788="">
            <li data-v-6b09e788="" class="fl mb-30">
              <a data-v-6b09e788="">
                <span data-v-6b09e788="" class="border f30">有QQ好友</span>
              </a>
            </li>
            <li data-v-6b09e788="" class="fl mb-30">
              <a data-v-6b09e788="">
                <span data-v-6b09e788="" class="border f30">无QQ好友</span>
              </a>
            </li>
          </ul>
          <!---->
        </div>
        <!---->
        <div data-v-6b09e788="" style="display: none;">
          <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
          <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
            <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
              <div data-v-6b09e788="" class="top-back">
                <a data-v-6b09e788="">返回</a>
              </div>
              <h2 data-v-6b09e788="" class="f36">QQ好友</h2>
            </div>
            <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
              <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
                <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
              </div>
            </div>
            <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
              <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;"></ul>
            </div>
            <div data-v-6b09e788="" class="filter-confirm  bg-fff">
              <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff">确定</a>
            </div>
          </div>
        </div>
      </div>
      <div data-v-6b09e788="" class="screen-titl border-bottom mt-30 px-30 color-000 f32 bg-fff screen-ico">
        <!---->
        历史处罚记录
        <!---->
      </div>
      <div data-v-6b09e788="" class="screen-price bg-fff">
        <!---->
        <div data-v-6b09e788="" class="price-type pl-30 pt-30">
          <ul data-v-6b09e788="">
            <li data-v-6b09e788="" class="fl mb-30">
              <a data-v-6b09e788="">
                <span data-v-6b09e788="" class="border f30">存在5天封号记录</span>
              </a>
            </li>
            <li data-v-6b09e788="" class="fl mb-30">
              <a data-v-6b09e788="">
                <span data-v-6b09e788="" class="border f30">不存在5天封号记录</span>
              </a>
            </li>
          </ul>
          <!---->
        </div>
        <!---->
        <div data-v-6b09e788="" style="display: none;">
          <div data-v-6b09e788="" class="filter-mask" style="height: 100%; bottom: 0px;"></div>
          <div data-v-6b09e788="" class="filter-content bg-fff" style="height: 100%; overflow-y: scroll;">
            <div data-v-6b09e788="" class="top-header border-bottom fixed-top">
              <div data-v-6b09e788="" class="top-back">
                <a data-v-6b09e788="">返回</a>
              </div>
              <h2 data-v-6b09e788="" class="f36">历史处罚记录</h2>
            </div>
            <div data-v-6b09e788="" class="chore-seach mt-97 border-bottom">
              <div data-v-6b09e788="" class="gvst-seach mx-30 my-20 py-10 ">
                <input data-v-6b09e788="" name="" type="text" placeholder="请输入汉字/拼音/首字母" class="server-input f30" />
              </div>
            </div>
            <div data-v-6b09e788="" class="filter-list" style="height: auto; overflow-y: scroll;">
              <ul data-v-6b09e788="" class="manyul" style="overflow-y: scroll;"></ul>
            </div>
            <div data-v-6b09e788="" class="filter-confirm  bg-fff">
              <a data-v-6b09e788="" class="sure text-center f32 fl bg-f54 color-fff">确定</a>
            </div>
          </div>
        </div>
      </div>
      <div data-v-6b09e788="" class="fixed-bottom border-top">
        <div data-v-6b09e788="" class="goodslist-btn px-30 py-30 bg-fff">
          <a data-v-6b09e788="" class="options f32 color-666 fl text-center">清除选项</a>
          <a data-v-6b09e788="" class="purchase f32 bg-f54 color-fff fr text-center">确定</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import "@/assets/content/css/fost-base-min.css";
import "@/assets/content/css/style-min.css";
import "@/assets/css/index.css";
import "@/assets/css/accountlist.css";

let vmdata = {
    waterInfo: {
        loading: false,
        index: 0,
        lastPageIndex: 3,
        loadLock: false,
        isEnd: false
    },
    serverKeyWords: '',
    groupList: ["上海区", "广东区"],
    filterGroupList: [],
    serverList: ["上海1区", "上海2区"],
    filterServerList: [],
    goodsList: [],
    conditionTab: {
        goodsType: false,
        server: false,
        sort: false,
        filter: false
    },
    Pagination: {
        //分页对象
        rows: 10, //每页行数，
        page: 1, //当前页码
        order: "GoodNo", //排序字段
        sord: "asc", //排序类型
        records: 10, //总记录数
        total: 10 //总页数。
    },
    searchModel: {
        goodsTypes: [],
        GameId: 0,
        GameName: "游戏名称",
        GameGroupId: 0, //上海区
        GameGroupName: "",
        GameServerId: 0, //上海一区
        GameServerName: "",
        GoodTypeId: 0, //账号 金币
        GoodTypeName: "", //物品类型
        DlTypeName: "代练类型", //等级 冲杯 段位
        GoodKeyWord: "", //关键字
        AcrossId: 0, //跨区Id
        AcrossName: "跨区"
    },
    searchModelSub: {
        minPrice: "",
        maxPrice:"",
        chooseZQ:false
    }
};

export default {
    name: "goodsList",
    data() {
        return vmdata;
    },
    mounted: function () {
        //this.searchModel.GameName = this.$route.query.gameName;
        this.searchModel.GameId = this.$route.query.gameId;
        //this.searchModel.GoodTypeId = this.$route.query.goodsType;
        this.searchModel.GoodTypeName = this.$route.query.goodsTypeName;
        this.GetGoodsType();
        this.SearchList();
        this.GetGroup();
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed:function(){
            window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll: function () {
            let self = this;
            //  console.log(window.scrollY+document.documentElement.clientHeight)

            // console.log(document.body.clientHeight)  // 网页可见区域高
          //console.log(
          //  'clientHeight:' + (document.body.clientHeight) + ',',
          //  'window.scrollY:' + (window.scrollY) + ',',
          //  'Element.clientHeight:' + (document.documentElement.clientHeight) + ',',
          //  'result:' + (document.body.clientHeight -
          //    window.scrollY -
          //    document.documentElement.clientHeight)
          //);
            console.log(
                document.body.clientHeight -
                window.scrollY -
                document.documentElement.clientHeight
            );
            if (
                document.body.clientHeight -
                window.scrollY -
                document.documentElement.clientHeight <
                10 &&
                !self.waterInfo.loadLock &&
                !self.waterInfo.isEnd
            ) {
                self.waterInfo.loadLock = true;
                console.log("加载");
                self.SearchList(false);
            }
        },
        SearchServer: function () {
            let self = this;
            if (self.serverKeyWords.length == 0) {
                self.filterGroupList = self.groupList;
                self.filterServerList = self.serverList;
                return ;
            }

            self.filterGroupList = self.groupList.filter((group) => {
               return group.Name.indexOf(self.serverKeyWords) >= 0
            });
            self.filterServerList = self.serverList.filter((server) => {
               return server.Name.indexOf(self.serverKeyWords) >= 0
            })
        },
        SearchList: function (isreset = true) {
            let self = this;
            if (!!isreset) {
                self.goodsList = [];
                self.waterInfo.index = 0;
                self.waterInfo.isEnd = false;
            }

            try {
                let data = {};
                data.Param = self.searchModel;
                data.Pagination = self.Pagination;
                self.waterInfo.loading = true;
                //let t= JSON.stringify(data)
                // console.log(t);
                setTimeout(() => {
                    self
                        .$post("/web/api/GoodInfo/GetList", data)
                        .then(function (result) {
                            //this.$post("web/api/GoodInfo/GetList", data).then(function(result) {
                            if (result.result) {
                                for (let data of result.content.datas) {
                                    self.$set(self.goodsList, self.goodsList.length, data);
                                }
                            } else {
                                self.waterInfo.isEnd = true;
                            }

                            self.waterInfo.loadLock = false;
                            self.waterInfo.index++;
                            if (self.waterInfo.index >= self.waterInfo.lastPageIndex) {
                                self.waterInfo.isEnd = true;
                            }
                            self.waterInfo.loading = false;
                            //console.log(self.waterInfo.index);
                            // self.goodsList = result.content.datas;

                            //console.log(result);
                        });
                }, 2000);
            } catch (err) {
                console.log(err);
            }
        },

        ToggleConditionTab: function (type) {
            let status = this.conditionTab[type];
            if (status == false) {
                this.conditionTab.goodsType = false;
                this.conditionTab.server = false;
                this.conditionTab.sort = false;
                this.conditionTab.filter = false;
            }
            this.conditionTab[type] = !this.conditionTab[type];
        },
        GetGoodsType: function () {
            let self = this;
            try {
                this.$get("/web/api/GoodType/GetGoodType", {
                    gameid: self.searchModel.GameId,
                    type: "good"
                }).then(function (result) {
                    self.group = result.content;
                    self.$set(self.searchModel, "goodsTypes", result.content);
                });
            } catch (err) {
                console.log(err);
            }
        },

        GetGroup: function () {
            let self = this;
            try {
                this.$get("/web/api/GameServer/GetGroup", {
                    gameid: self.searchModel.GameId
                }).then(function (result) {
                    self.groupList = result.content;
                    self.filterGroupList=self.groupList;
                });
            } catch (err) {
                console.log(err);
            }
        },
        GetServer: function (groupId) {
            let self = this;
            try {
                this.$get("http://localhost:15786/api/GameServer/GetServer", {
                    parenId: groupId
                }).then(function (result) {
                    self.serverList = result.content;
                    self.filterServerList=self.serverList;
                });
            } catch (err) {
                console.log(err);
            }
        },
        setActive: function (value, type) {
            let self = this;
            let dic = {};
            dic[self.searchModel.GoodTypeName] = true;
            return dic[value] ? "active" : "";
        },
        setValue: function (obj) {
            let self = this;
            for (var key in obj) {
                self.searchModel[key] = obj[key];
            }
        }
    },
    watch: {
        "searchModel.GameGroupId": function (newVal, oldVal) {
            this.GetServer(newVal);
        },
        serverKeyWords:function(newVal){
            this.SearchServer();

        }
    }
};
</script>
