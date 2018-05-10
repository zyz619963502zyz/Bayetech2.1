let BaseTable = 
    `<table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center"  v-for="item in goodtitlearray">{{item}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in goodinfoarray">
                <td>{{item.GoodNo}}</td>
                <td>{{item.GameName}}</td>
                <td>{{item.GoodTypeName}}</td>
                <td>{{item.GoodKeyWord}}</td>
                <td>{{item.GoodTitle}}</td>
                <td class="text-center"><input type="button" class="btn btn-primary" v-bind:value="pagetype=='processed'?'查看':'审核商品'" @click="startcheck(item.GoodNo)"></td>
            </tr>
        </tbody>
    </table>`

export default{
    name:'BaseTable',
    template:BaseTable,
    props:['pagetype','goodtitlearray','goodinfoarray','startcheck']
}
