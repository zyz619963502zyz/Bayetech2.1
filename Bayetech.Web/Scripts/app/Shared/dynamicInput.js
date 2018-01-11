define([], function () {
    var html=`<div>
        <input v-if="data.type==string||data.type==int" type="text" class ="common-input h-30" :name="data.Value" id="data.Value" placeholder="'请输入'+data.Name" valid="data.Flag">
        <input v-else -if="data.type==password" type="password" class ="common-input h-30" name="data.Value" id="data.Value" placeholder="'请输入'+data.Name" valid="data.Flag">
        <select v-else -if="data.type==select" id="data.Value" name="data.Value" valid="data.Flag">
            <option value="">请选择</option>
            <option v-for="item in data.Remark" value="item">item</option>
        </select>
        </div>`;

    var data={
        object: [],
    };

    var components={
        name: "dynamicInput",
        props: ['data'],
        template: html,
        data() {
            return data;
        },
    };
    return components;
});
