let BaseTable = `<template>
    <table class="table table-bordered">
        <thead>
            <tr class="success">
                <th class="text-center"  v-for="item in GoodTitleArray">{{item.value}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in GoodInfoArray">
                <td>{{item.GoodNo}}</td>
                <td>{{item.GameName}}</td>
                <td>{{item.GoodTypeName}}</td>
                <td>{{item.GoodKeyWord}}</td>
                <td>{{item.GoodTitle}}</td>
                <td class="text-center"><input type="button" class="btn btn-primary" value="审核商品" @click="StartCheck(item.GoodNo)"></td>
            </tr>
        </tbody>
    </table>
</template>`

export default{
    name:'BaseTable',
    template:BaseTable,
    props:['GoodTitleArray','GoodInfoArray','StartCheck']
}
