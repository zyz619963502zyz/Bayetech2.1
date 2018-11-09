namespace Bayetech.Service.Model
{
    public class EngineInfo
    {
        //流程ID 必填
        public string Flow_Id { get; set; }
        //实例主键，送审必填
        public string Wfm_Id { get; set; }
        //发送人
        public string Sender_Id { get; set; }

        /// <summary>
        /// 发送人工号
        /// </summary>
        public string Sender_Code { get; set; }
        //接收人
        public string Reciever_Id { get; set; }
        /// <summary>
        /// 接收人工号
        /// </summary>
        public string Reciever_Code { get; set; }
        //当前环节
        public string Cur_Status_Id { get; set; }
        //新环节
        public string New_Status_Id { get; set; }
        //流程线ID
        public string Disposal_Id { get; set; }
        //发送日期
        public string Send_Time { get; set; }

       
     
    }
}
