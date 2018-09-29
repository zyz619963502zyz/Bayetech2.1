namespace BayetechWorkFlow.WFEntity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("[System.Activities.DurableInstancing].InstanceMetadataChangesTable")]
    public partial class InstanceMetadataChangesTable
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long SurrogateInstanceId { get; set; }

        [Key]
        [Column(Order = 1)]
        public long ChangeTime { get; set; }

        public byte EncodingOption { get; set; }

        [Required]
        public byte[] Change { get; set; }
    }
}
