<template>
  <div data-v-4a678b7c="" id="wrapper" class="pb-125">
   
    <div class="appdownload hide" data-v-4a678b7c="">
      <div class="appload-conn fl">
        <div class="appload-close fl">
          <a href="javascript:void(0);" class="appclose"></a>
        </div>
        <div class="appload-ico fl pt-15">
          <img src="@/assets/content/images/5173app-ico.png" />
        </div>
        <div class="appload-info fl pt-15">
          <div class="appinfo-titl f28 color-fff">下载5173APP</div>
          <div class="appinfo-text f22 color-fff">安全 便捷 随时随地</div>
        </div>
      </div>
      <div class="appload-btn fr">
        <a href="javascript:;" class="appbtn f30 color-fff">立即下载</a>
      </div>
    </div>
    <div data-v-4a678b7c="" class="index-header">
      <div data-v-4a678b7c="" class="index-header-logo">
        <img data-v-4a678b7c="" src="@/assets/content/images/logo.png" alt="5173游戏交易平台" class="img-responsive" />
      </div>
      <router-link :to="{ name: 'gameSearch', params: { userId: 123 }}">
        <div data-v-4a678b7c="" class="index-header-search">
  <div data-v-4a678b7c="" class="text-input">
    <span data-v-4a678b7c="" class="f30">搜索游戏</span>
  </div>
</div></router-link>
      
      <a data-v-4a678b7c="" rel="nofollow" href="http://www.5173.com/home" title="返回5173主站" class="toPc">
        <img data-v-4a678b7c="" src="@/assets/content/images/pc.png" />
      </a>
    </div>
    <div data-v-4a678b7c="" class=""></div>
    <div data-v-4a678b7c="" class="newhmban">
      <div class="swiper-container index-banner swiper-container-horizontal swiper-container-autoheight" data-v-4a678b7c="">
        <div class="swiper-wrapper" style="height: 146px; transform: translate3d(-3072px, 0px, 0px); transition-duration: 0ms;">
          <div class="swiper-slide" data-v-4a678b7c="" style="width: 375px;">
            <img data-v-4a678b7c="" src="@/assets/content/images/89b143feec4646b68f8c49722e27a660.jpg" />
          </div>
          <div class="swiper-slide" data-v-4a678b7c="" style="width: 375px;">
            <img data-v-4a678b7c="" src="@/assets/content/images/b55482e51de3458885385fc7b05d403d.jpg" />
          </div>
          <div class="swiper-slide" data-v-4a678b7c="" style="width: 375px;">
            <img data-v-4a678b7c="" src="@/assets/content/images/fbc0ca1405b94f41b11aafb7cf9eb4c3.jpg" />
          </div>
          <div class="swiper-slide swiper-slide-prev" data-v-4a678b7c="" style="width: 375px;">
            <img data-v-4a678b7c="" src="@/assets/content/images/a29ec62d89bf4a6eb3ae850205cf30c2.jpg" />
          </div>
          <div class="swiper-slide swiper-slide-active" data-v-4a678b7c="" style="width: 375px;">
            <img data-v-4a678b7c="" src="@/assets/content/images/f2b03764ce81476291e41bd5c27df2b4.jpg" />
          </div>
        </div>
        <div data-v-4a678b7c="" class="swiper-pagination swiper-pagination-bullets">
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
        </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>
    <div data-v-4a678b7c="" class="index-swiper bg-fff border-bottom py-30 mb-20">
      <div data-v-4a678b7c="" class="swiper-slide fl text-center">
        <router-link :to="{ path: '/gameSearch', query:{goodsType:1,typeName:'游戏币'}}">
            <span data-v-4a678b7c="" class="class01"></span>
            <p data-v-4a678b7c="" class="f28 color-000 mt-10">游戏币</p>
          </router-link>
       
      </div>
      <div data-v-4a678b7c="" class="swiper-slide fl text-center">
        <router-link :to="{ path: '/gameSearch' ,query:{goodsType:3}}">
          <span data-v-4a678b7c="" class="class02"></span>
          <p data-v-4a678b7c="" class="f28 color-000 mt-10">帐号</p>
        </router-link>
      </div>
      <div data-v-4a678b7c="" class="swiper-slide fl text-center">
        <router-link :to="{ path: '/hotGameSearch', query: { goodsType: 0}}">
          <span data-v-4a678b7c="" class="class03"></span>
          <p data-v-4a678b7c="" class="f28 color-000 mt-10">手游充值</p>
        </router-link>
      </div>
      <div data-v-4a678b7c="" class="swiper-slide fl text-center">
        <router-link :to="{ name: 'gameSearch', query: { goodsType: 5}}">
          <span data-v-4a678b7c="" class="class04"></span>
          <p data-v-4a678b7c="" class="f28 color-000 mt-10">代练</p>
        </router-link>
      </div>
      <div data-v-4a678b7c="" class="swiper-slide fl text-center">
        <router-link :to="{name:'gameSearch',query:{goodsType:2}}">
            <span data-v-4a678b7c="" class="class05"></span>
            <p data-v-4a678b7c="" class="f28 color-000 mt-10">装备</p>
        </router-link> 
            
      </div>
    </div>
    <!--搜索游戏-->
    <div data-v-4a678b7c="" class="search-game-tab bg-fff border-top mb-20 border-bottom hide">
      <div data-v-4a678b7c="" class="tab">
        <div data-v-4a678b7c="" class="tab-head">
          <ul data-v-4a678b7c="" class="tab-nav">
            <li data-v-4a678b7c="" class="active">
              <a data-v-4a678b7c="">
                <span data-v-4a678b7c="" class="sj">热门手游</span>
              </a>
            </li>
            <li data-v-4a678b7c="" class="">
              <a data-v-4a678b7c="">
                <span data-v-4a678b7c="" class="dn">热门端游</span>
              </a>
            </li>
          </ul>
        </div>
        <div data-v-4a678b7c="" class="tab-body">
          <div data-v-4a678b7c="" class="tab-panel">
            <div data-v-4a678b7c="" class="tab-class01">
              <ul data-v-4a678b7c="">
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/dnf.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">地下城与勇士</p>
                  </a>
                </li>
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/lol.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">英雄联盟</p>
                  </a>
                </li>
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/625.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">剑侠情缘Ⅲ</p>
                  </a>
                </li>
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/558.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">天涯明月刀</p>
                  </a>
                </li>
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/666.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">穿越火线</p>
                  </a>
                </li>
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/ms2.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">魔兽世界(国服)</p>
                  </a>
                </li>
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/038.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">绝地求生</p>
                  </a>
                </li>
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/610.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">流放之路</p>
                  </a>
                </li>
              </ul>
            </div>
            <a data-v-4a678b7c="" href="https://m.5173.com/vue/gameList/1">
              <div data-v-4a678b7c="" class="tab-more border-top">
                <a data-v-4a678b7c="" class="more f30 color-666">更多游戏</a>
              </div>
            </a>
          </div>
          <div data-v-4a678b7c="" class="tab-panel active">
            <div data-v-4a678b7c="" class="tab-class01">
              <ul data-v-4a678b7c="">
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/2453.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">王者荣耀</p>
                  </a>
                </li>
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/1711.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">QQ飞车手游</p>
                  </a>
                </li>
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/2806.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">阴阳师</p>
                  </a>
                </li>
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/0187.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">穿越火线(手机游戏)</p>
                  </a>
                </li>
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/1371.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">梦幻西游(手机游戏)</p>
                  </a>
                </li>
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/SgKowFsggG8AAAAAAAE-nGdbboo58.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">征途2手游</p>
                  </a>
                </li>
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/1168.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">炉石传说</p>
                  </a>
                </li>
                <li data-v-4a678b7c="">
                  <a data-v-4a678b7c="">
                    <center data-v-4a678b7c="">
                      <img data-v-4a678b7c="" src="@/assets/content/images/0052.jpg" />
                    </center>
                    <p data-v-4a678b7c="" class="f28 color-000">崩坏3</p>
                  </a>
                </li>
              </ul>
            </div>
            <a data-v-4a678b7c="" href="https://m.5173.com/vue/gameList/2">
              <div data-v-4a678b7c="" class="tab-more border-top">
                <a data-v-4a678b7c="" class="more f30 color-666">更多游戏</a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="hot-sale">
      <h2 class="tit">特卖专场</h2>
      <div class="sale-goods">

        <a href="http://search.m.7881.com/201612382309802.html">
          <img src="http://pic.7881.com/m7881/hotsale/56.jpg" width="100%" />
        </a>

        <a href="/appstoreCard.html">
          <img src="http://pic.7881.com/m7881/hotsale/47.jpg" width="100%" />
        </a>

        <a href="http://search.m.7881.com/201612382490711.html">
          <img src="http://pic.7881.com/m7881/hotsale/57.jpg" width="100%" />
        </a>

        <a href="http://search.m.7881.com/toGoodsList.html?pageNum=1&amp;gameId=A5167&amp;gtid=100106">
          <img src="http://pic.7881.com/m7881/hotsale/46.jpg" width="100%" />
        </a>

      </div>
    </div>
    <!--热门推荐-->
    <div data-v-50d7ab26="" class="index-record bg-fff mb-20 border-top border-bottom pt-30 hide">
      <div data-v-50d7ab26="" class="record-titl f34 color-333 text-center fontbold px-30 ">热门推荐</div>
      <ul data-v-50d7ab26="">
        <li data-v-50d7ab26="" class="record-conn px-30">
          <div data-v-50d7ab26="" class="demolist border-top py-30">
            <div data-v-50d7ab26="" class="mbgmes-img fl mt-10">
              <img data-v-50d7ab26="" src="@/assets/content/images/5072c398eb6a4b019baeff8b78823c78.jpg" />
              <div data-v-50d7ab26="" class="img_bj bg-000"></div>
              <div data-v-50d7ab26="" class="img-text f24 color-fff text-center">精品帐号</div>
            </div>
            <div data-v-50d7ab26="" class="mbgmes-con-index mbgmes-ico">
              <div data-v-50d7ab26="" class="mbl-title f32 color-000">王者荣耀(手游)精品帐号</div>
              <div data-v-50d7ab26="" class="mbl-cper">
                <div data-v-50d7ab26="" class="mbl-money color-m1 f30 fl">最新发布4621件</div>
              </div>
              <div data-v-50d7ab26="" class="mbl-parea color-666 f26">全区全服</div>
            </div>
          </div>
        </li>
        <li data-v-50d7ab26="" class="record-conn px-30">
          <div data-v-50d7ab26="" class="demolist border-top py-30">
            <div data-v-50d7ab26="" class="mbgmes-img fl mt-10">
              <img data-v-50d7ab26="" src="@/assets/content/images/2ef0f13216e241959708237db555b62c.jpg" />
              <div data-v-50d7ab26="" class="img_bj bg-000"></div>
              <div data-v-50d7ab26="" class="img-text f24 color-fff text-center">精品帐号</div>
            </div>
            <div data-v-50d7ab26="" class="mbgmes-con-index mbgmes-ico">
              <div data-v-50d7ab26="" class="mbl-title f32 color-000">阴阳师(手游)精品帐号</div>
              <div data-v-50d7ab26="" class="mbl-cper">
                <div data-v-50d7ab26="" class="mbl-money color-m1 f30 fl">最新发布2808件</div>
              </div>
              <div data-v-50d7ab26="" class="mbl-parea color-666 f26">全区全服</div>
            </div>
          </div>
        </li>
        <li data-v-50d7ab26="" class="record-conn px-30">
          <div data-v-50d7ab26="" class="demolist border-top py-30">
            <div data-v-50d7ab26="" class="mbgmes-img fl mt-10">
              <img data-v-50d7ab26="" src="@/assets/content/images/beb4f3f8e9b741ddbff1649b051befc4.jpg" />
              <div data-v-50d7ab26="" class="img_bj bg-000"></div>
              <div data-v-50d7ab26="" class="img-text f24 color-fff text-center">精品帐号</div>
            </div>
            <div data-v-50d7ab26="" class="mbgmes-con-index mbgmes-ico">
              <div data-v-50d7ab26="" class="mbl-title f32 color-000">地下城与勇士精品帐号</div>
              <div data-v-50d7ab26="" class="mbl-cper">
                <div data-v-50d7ab26="" class="mbl-money color-m1 f30 fl">最新发布28827件</div>
              </div>
              <div data-v-50d7ab26="" class="mbl-parea color-666 f26">全区全服</div>
            </div>
          </div>
        </li>
        <li data-v-50d7ab26="" class="record-conn px-30">
          <div data-v-50d7ab26="" class="demolist border-top py-30">
            <div data-v-50d7ab26="" class="mbgmes-img fl mt-10">
              <img data-v-50d7ab26="" src="@/assets/content/images/ecb27993cfe440979e5a4f8cc7b266d4.jpg" />
              <div data-v-50d7ab26="" class="img_bj bg-000"></div>
              <div data-v-50d7ab26="" class="img-text f24 color-fff text-center">精品帐号</div>
            </div>
            <div data-v-50d7ab26="" class="mbgmes-con-index mbgmes-ico">
              <div data-v-50d7ab26="" class="mbl-title f32 color-000">英雄联盟精品帐号</div>
              <div data-v-50d7ab26="" class="mbl-cper">
                <div data-v-50d7ab26="" class="mbl-money color-m1 f30 fl">最新发布59707件</div>
              </div>
              <div data-v-50d7ab26="" class="mbl-parea color-666 f26">全区全服</div>
            </div>
          </div>
        </li>
        <li data-v-50d7ab26="" class="record-conn px-30">
          <div data-v-50d7ab26="" class="demolist border-top py-30">
            <div data-v-50d7ab26="" class="mbgmes-img fl mt-10">
              <img data-v-50d7ab26="" src="@/assets/content/images/beb4f3f8e9b741ddbff1649b051befc4.jpg" />
              <div data-v-50d7ab26="" class="img_bj bg-000"></div>
              <div data-v-50d7ab26="" class="img-text f24 color-fff text-center">游戏币</div>
            </div>
            <div data-v-50d7ab26="" class="mbgmes-con-index mbgmes-ico">
              <div data-v-50d7ab26="" class="mbl-title f32 color-000">地下城与勇士游戏币</div>
              <div data-v-50d7ab26="" class="mbl-cper">
                <div data-v-50d7ab26="" class="mbl-money color-m1 f30 fl">1元=49万金币</div>
              </div>
              <div data-v-50d7ab26="" class="mbl-parea color-666 f26">广东区/广东1区</div>
            </div>
          </div>
        </li>
      </ul>
      <div data-v-50d7ab26="" class="tab-more border-top" style="display: none;">
        <a data-v-50d7ab26="" class="pend-more"></a>
      </div>
    </div>
    <div data-v-979c35b8="" data-v-4a678b7c="">
      <div data-v-979c35b8="" class="index-proving bg-fff border-bottom border-top mb-20">
        <div data-v-979c35b8="" class="prov-titl text-center py-20 border-bottom">
          <h2 data-v-979c35b8="" class="f34 color-333 fontbold">验证中心</h2>
          <p data-v-979c35b8="" class="f28 color-666 ">输入客服QQ号，可以为您验证是否为5173官方客服</p>
        </div>
        <div data-v-979c35b8="" class="prov-conn px-30 py-15">
          <input data-v-979c35b8="" type="tel" placeholder="请输入客服QQ号" minlength="5" maxlength="11" class="prov-input color-333 f32" />
          <a data-v-979c35b8="" class="prov-btn color-fff f32 bg-f54 fr text-center">立即验证</a>
        </div>
      </div>
      <div data-v-979c35b8="" class="dialog-box bg-fff" style="display: none;">
        <div data-v-979c35b8="" class="dialog-main">
          <div data-v-979c35b8="" class="dialog-body">
            <h2 data-v-979c35b8="" class=" color-000">
              经验证，QQ客服
              <em data-v-979c35b8="" class="color-m1"></em>为假客服
            </h2>
            <p data-v-979c35b8="" class="f28 color-666">若您有疑问，请点击下方在线咨询进行解答</p>
          </div>
          <div data-v-979c35b8="" class="dialog-foot">
            <a data-v-979c35b8="" class="dialog_close border-right">在线咨询</a>
            <a data-v-979c35b8="" class="dialog_close color-000">取消</a>
          </div>
        </div>
      </div>
      <div data-v-979c35b8="" class="dialog-box bg-fff" style="display: none;">
        <div data-v-979c35b8="" class="dialog-main">
          <div data-v-979c35b8="" class="dialog-body">
            经验证，QQ客服
            <em data-v-979c35b8="" class="color-m1"></em>为真客服
          </div>
          <div data-v-979c35b8="" class="dialog-foot">
            <a data-v-979c35b8="" class="dialog_close">知道了</a>
          </div>
        </div>
      </div>
    </div>
    <div data-v-4a678b7c="" class="index-feedback bg-fff border-bottom border-top">
      <div data-v-4a678b7c="" class="fdback-titl text-center f34 color-333 fontbold border-bottom">问题反馈</div>
      <div data-v-4a678b7c="" class="fdback-conn">
        <ul data-v-4a678b7c="">
          <a data-v-4a678b7c="" href="http://sc.5173.com/?question/ask/41.html">
            <li data-v-4a678b7c="" class="fl border-right">
              <span data-v-4a678b7c="" class="zhix f28 color-666">咨询</span>
            </li>
          </a>
          <a data-v-4a678b7c="" href="http://sc.5173.com/?question/complain/41.html">
            <li data-v-4a678b7c="" class="fl border-right">
              <span data-v-4a678b7c="" class="tous f28 color-666">投诉</span>
            </li>
          </a>
          <a data-v-4a678b7c="" href="http://sc.5173.com/?question/suggest/41.html">
            <li data-v-4a678b7c="" class="fl">
              <span data-v-4a678b7c="" class="jiany f28 color-666">建议</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
    <!---->
    <div data-v-4a678b7c="">
      <div data-style="fixed-bottom" class="newfooter fixed-bottom">
        <ul>
          <a href="https://m.5173.com/" class="foot-home">
            <li class="active">
              <span class="i_home">主页</span>
            </li>
          </a>
          <a href="https://m.5173.com/vue/gameList/2" class="foot-home">
            <li class="">
              <span class="i_mybuy">我要买</span>
            </li>
          </a>
          <a href="https://m.5173.com/vue/sell-home/1" class="foot-home">
            <li class="">
              <span class="i_mysell">我要卖</span>
            </li>
          </a>
          <a href="https://m.5173.com/vue/message" class="foot-message">
            <li class="">
              <span class="i_message">消息</span>
            </li>
          </a>
          <a href="https://m.5173.com/vue/center" class="foot-home">
            <li class="">
              <span class="i_tx">我的</span>
              <!---->
            </li>
          </a>

        </ul>

      </div>
      <!---->
    </div>
    <!---->
    <!---->
  </div>

</template>

<script>
  import '@/assets/content/css/fost-base-min.css'
  import '@/assets/content/css/style-min.css'
  import '@/assets/css/index.css'
  let vmdata = new Object();

  export default {
    name: "index",
    data() {
      return vmdata;
    },
    mounted:function(){
      console.log(this.$get)
    },
    methods:{
    
    }
  };
</script>
