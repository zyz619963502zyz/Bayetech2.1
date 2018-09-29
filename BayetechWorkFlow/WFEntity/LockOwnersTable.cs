namespace BayetechWorkFlow.WFEntity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("[System.Activities.DurableInstancing].LockOwnersTable")]
    public partial class LockOwnersTable
    {
        public Guid Id { get; set; }

        [Key]
        public long SurrogateLockOwnerId { get; set; }

        public DateTime LockExpiration { get; set; }

        public Guid? WorkflowHostType { get; set; }

        [Required]
        [StringLength(128)]
        public string MachineName { get; set; }

        public bool EnqueueCommand { get; set; }

        public bool DeletesInstanceOnCompletion { get; set; }

        public byte[] PrimitiveLockOwnerData { get; set; }

        public byte[] ComplexLockOwnerData { get; set; }

        public byte[] WriteOnlyPrimitiveLockOwnerData { get; set; }

        public byte[] WriteOnlyComplexLockOwnerData { get; set; }

        public byte? EncodingOption { get; set; }

        public byte WorkflowIdentityFilter { get; set; }
    }
}
