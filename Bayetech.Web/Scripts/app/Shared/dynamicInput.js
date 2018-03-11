define([], function () {
    //var html=`<div>
    //    <input v-if="data.Flag=='password'" type="password" class ="common-input h-30" :name="data.Key" :id="data.Id" :placeholder="'请输入'+data.Name" :valid="data.Flag">
    //    <select v-else-if="data.Flag=='select'" :id="data.Id" :name="data.Key" :valid="data.Flag">
    //        <option value="">请选择</option>
    //        <option v-for="item in data.Value" :value="item.Value">{{item.Value}}</option>
    //    </select>
    //    <input v-else type="text" class ="common-input h-30" :name="data.Key" :id="data.Id" :placeholder="'请输入'+data.Name" :valid="data.Flag">
    // </div>`;

    var html = `<div class ="col-md-3">
                <input v-if="data.Flag=='password'" type="password" :name="data.Key" :id="data.Id" :placeholder="'请输入'+data.Name" :valid="data.Flag" class="form-control" />
                <select v-else-if="data.Flag=='select'" :id="data.Id" :name="data.Key" :valid="data.Flag" class="form-control">
                    <option value="">请选择</option>
                    <option v-for="item in data.Value" :value="item.Value">{{item.Value}}</option>
                </select>
                <input v-else type="text" class="form-control" :name="data.Key" :id="data.Id" :placeholder="'请输入'+data.Name" :valid="data.Flag">
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
