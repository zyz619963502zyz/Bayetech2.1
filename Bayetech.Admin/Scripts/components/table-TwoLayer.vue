import "../../Content/MyStyle.css";

<template id="BaseTable" lang="html">
    <table class="table table-bordered text-center">
        <thead>
            <tr class="success">
				
				<th class="text-center col-md-1">折行操作</th>
                
				<th class="text-center col-md-1">操作</th>
            </tr>
        </thead>
        <tbody v-for="item in twolayerarray">
            <tr>
				<td @click="OpterateAline(item.KeyId)"><input type="button" v-bind:id="'btn_'+item.KeyId" value="+"></td>
                
				<td><input type="radio" name="Operates" @click="startcheck(item)"/></td>
            </tr>
            <tr v-bind:id="'key_'+item.KeyId" class="hide">
                <td colspan="10">
                    <table class="table table-bordered">
                        <thead>
                            <tr class="warning">
                                <th class="text-center">导航标题</th>
                                
								<th class="text-center col-md-1">操作</th>
                            </tr>
                        </thead>
                        <tbody v-for="itemChild in item.ChildNodes">
                            <tr>
                                <td>{{itemChild.NavTitle}}</td>
                               
								<td><input type="radio" name="Operates" @click="startcheck(itemChild)"/></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
let data={
	isActive:false
}

export default{
	data(){
		return data;
	},
    name:'NavigtionTable',
    props:['twolayerarray','startcheck'],
	methods:{
		OpterateAline(id){
			let self = this;
			$("#key_"+id).hasClass("hide")?($("#key_"+id).removeClass("hide"),$("#btn_"+id).val("-"))
			:($("#key_"+id).addClass("hide"),$("#btn_"+id).val("+"));
		}		
	}
}
</script>