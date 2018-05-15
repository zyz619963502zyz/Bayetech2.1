let BaseTable = 
    `<table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center hide">单据类型(select判断)</th>
                <th class="text-center">商品编号</th>
                <th class="text-center">游戏名称</th>
                <th class="text-center">交易类型</th>
                <th class="text-center">关键词</th>
                <th class="text-center">商品标题</th>
                <th class="text-center">审核商品</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in goodinfoarray">
                <td>{{item.GoodNo}}</td>
                <td>{{item.GameName}}</td>
                <td>{{item.GoodTypeName}}</td>
                <td>{{item.GoodKeyWord}}</td>
                <td>{{item.GoodTitle}}</td>
                <td class="text-center"><input type="button" v-bind:flag="item.Status" class="btn btn-primary" v-bind:value="(item.Status=='PutOnsale'||item.Status=='PutDownsale')?'查看':'审核商品'" @click="startcheck(item.GoodNo)"></td>
            </tr>
        </tbody>
    </table>`

export default{
    name:'BaseTable',
    template:BaseTable,
    props:['pagetype','goodinfoarray','startcheck']
}
