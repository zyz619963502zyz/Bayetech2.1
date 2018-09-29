namespace BayetechWorkFlow.WFEntity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("[System.Activities.DurableInstancing].KeysTable")]
    public partial class KeysTable
    {
        public Guid Id { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long SurrogateKeyId { get; set; }

        public long? SurrogateInstanceId { get; set; }

        public byte? EncodingOption { get; set; }

        public byte[] Properties { get; set; }

        public bool? IsAssociated { get; set; }
    }
}
