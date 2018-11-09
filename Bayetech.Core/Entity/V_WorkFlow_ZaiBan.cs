//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Bayetech.Core.Entity
{
    using System;
    using System.Collections.Generic;
    
    public partial class V_WorkFlow_ZaiBan
    {
        public string Title { get; set; }
        public decimal Flow_ID { get; set; }
        public decimal FlowType { get; set; }
        public string Flow_Name { get; set; }
        public Nullable<System.DateTime> FinishTime { get; set; }
        public string ParentID { get; set; }
        public bool IsSigned { get; set; }
        public bool IsWaster_ { get; set; }
        public string CurDealer { get; set; }
        public Nullable<int> SubFinished { get; set; }
        public string ModifyFlag { get; set; }
        public string Windows_Class { get; set; }
        public string HuanJi { get; set; }
        public string MiJi { get; set; }
        public Nullable<decimal> PRESTATUS_TYPE_ID { get; set; }
        public Nullable<decimal> PRESTATUS_ID { get; set; }
        public string PRESTATUS_NAME { get; set; }
        public Nullable<decimal> CURSTATUS_TYPE_ID { get; set; }
        public Nullable<decimal> CURSTATUS_ID { get; set; }
        public string CURSTATUS_NAME { get; set; }
        public Nullable<decimal> DISPOSAL_ID { get; set; }
        public string DISPOSAL_NAME { get; set; }
        public string DISPOSAL_HINT { get; set; }
        public string PageConditionRule { get; set; }
        public long BizEstate { get; set; }
        public string ConditionRule { get; set; }
        public int TransFlag { get; set; }
        public int PassedStatus { get; set; }
        public int VerilyPassedStatus { get; set; }
        public int PassedUserCode { get; set; }
        public System.DateTime PassedUserID { get; set; }
        public int PassedOrgPath { get; set; }
        public string WFRootID { get; set; }
        public string StartFlag { get; set; }
        public string ownerOrgId { get; set; }
        public string ownerUserId { get; set; }
        public System.DateTime ownerUserCode { get; set; }
        public System.DateTime printAddress { get; set; }
        public System.DateTime CpnyIncomeMoney { get; set; }
        public System.DateTime CpnyIncomeType { get; set; }
        public string RootFlowCode { get; set; }
        public long DistrictName { get; set; }
        public decimal ownerOrgCode { get; set; }
        public string ownerOrgName { get; set; }
        public string ownerUserName { get; set; }
        public string ownerName { get; set; }
        public string clientName { get; set; }
        public string estatename { get; set; }
        public string proAddr { get; set; }
        public string ExchangeType { get; set; }
        public string WZB_ID { get; set; }
        public string WFM_ID { get; set; }
        public string Executor { get; set; }
        public string ExecutorName { get; set; }
        public string TRANSACTOR { get; set; }
        public string TRANSACTORNAME { get; set; }
        public string Receiver { get; set; }
        public string ReceiverName { get; set; }
        public int Transact_Type { get; set; }
        public long Transact_Role { get; set; }
        public decimal DEALSTATUS_TYPE_ID { get; set; }
        public string DEALSTATUS_TYPE_NAME { get; set; }
        public Nullable<decimal> DEALSTATUS_ID { get; set; }
        public string DEALSTATUS_NAME { get; set; }
        public System.DateTime dRecordCreationDate { get; set; }
        public string sRecordCreator { get; set; }
        public string sRecordVersion { get; set; }
        public int Disp_ID { get; set; }
        public string PassedStatus_Code { get; set; }
        public string RoleCode { get; set; }
        public int IsFinish { get; set; }
        public System.DateTime CreateTime { get; set; }
        public string Creator { get; set; }
        public decimal Company_ID { get; set; }
        public decimal Dept_ID { get; set; }
        public string Idea { get; set; }
        public string SpeciID { get; set; }
        public Nullable<int> BrachResult { get; set; }
        public System.DateTime UpdateTime { get; set; }
        public string LockUserID { get; set; }
        public Nullable<bool> IS_Pigeonhole { get; set; }
        public string ROLEIDEA { get; set; }
        public System.DateTime FirstCheckOutTime { get; set; }
        public int CheckOutTime { get; set; }
        public int CheckInTime { get; set; }
        public string CheckAction { get; set; }
    }
}