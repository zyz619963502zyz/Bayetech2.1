<template>
  <div>
    <!--http://localhost:15786-->
    <el-upload action="/web/api/Upload/AddUploadFile"
               list-type="picture-card"
               :on-preview="handlePictureCardPreview"
               :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
  
</template>

<script>
  import { Button, Dialog, Upload } from 'element-ui';
  
  export default {
    name: 'FileUpload',
    data() {
      return {
        visible: false,
        dialogImageUrl: '',
        dialogVisible: false };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
    components: {
      "el-button": Button,
      "el-dialog": Dialog,
      "el-upload": Upload
    }

  }
</script>
<style>
  @import url(../assets/css/elementUI.css);
</style>

