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
    
    public partial class T_WorkFlow_Diffluence
    {
        public string WFM_ID { get; set; }
        public string ParentID { get; set; }
        public string RootID { get; set; }
        public string DiffluenceCode { get; set; }
        public decimal DISPOSAL_ID { get; set; }
        public int DiffluenceEnd { get; set; }
        public System.DateTime dRecordCreationDate { get; set; }
        public string sRecordCreator { get; set; }
        public string sRecordVersion { get; set; }
        public int ParentDisp_ID { get; set; }
        public int parentEnd { get; set; }
    }
}
