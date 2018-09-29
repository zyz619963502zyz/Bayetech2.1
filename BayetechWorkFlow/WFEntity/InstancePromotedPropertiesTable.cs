namespace BayetechWorkFlow.WFEntity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("[System.Activities.DurableInstancing].InstancePromotedPropertiesTable")]
    public partial class InstancePromotedPropertiesTable
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long SurrogateInstanceId { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(400)]
        public string PromotionName { get; set; }

        public byte[] Value33 { get; set; }

        public byte[] Value34 { get; set; }

        public byte[] Value35 { get; set; }

        public byte[] Value36 { get; set; }

        public byte[] Value37 { get; set; }

        public byte[] Value38 { get; set; }

        public byte[] Value39 { get; set; }

        public byte[] Value40 { get; set; }

        public byte[] Value41 { get; set; }

        public byte[] Value42 { get; set; }

        public byte[] Value43 { get; set; }

        public byte[] Value44 { get; set; }

        public byte[] Value45 { get; set; }

        public byte[] Value46 { get; set; }

        public byte[] Value47 { get; set; }

        public byte[] Value48 { get; set; }

        public byte[] Value49 { get; set; }

        public byte[] Value50 { get; set; }

        public byte[] Value51 { get; set; }

        public byte[] Value52 { get; set; }

        public byte[] Value53 { get; set; }

        public byte[] Value54 { get; set; }

        public byte[] Value55 { get; set; }

        public byte[] Value56 { get; set; }

        public byte[] Value57 { get; set; }

        public byte[] Value58 { get; set; }

        public byte[] Value59 { get; set; }

        public byte[] Value60 { get; set; }

        public byte[] Value61 { get; set; }

        public byte[] Value62 { get; set; }

        public byte[] Value63 { get; set; }

        public byte[] Value64 { get; set; }
    }
}
