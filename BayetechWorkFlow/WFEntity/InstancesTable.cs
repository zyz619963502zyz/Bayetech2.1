namespace BayetechWorkFlow.WFEntity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("[System.Activities.DurableInstancing].InstancesTable")]
    public partial class InstancesTable
    {
        public Guid Id { get; set; }

        [Key]
        public long SurrogateInstanceId { get; set; }

        public long? SurrogateLockOwnerId { get; set; }

        public byte[] PrimitiveDataProperties { get; set; }

        public byte[] ComplexDataProperties { get; set; }

        public byte[] WriteOnlyPrimitiveDataProperties { get; set; }

        public byte[] WriteOnlyComplexDataProperties { get; set; }

        public byte[] MetadataProperties { get; set; }

        public byte? DataEncodingOption { get; set; }

        public byte? MetadataEncodingOption { get; set; }

        public long Version { get; set; }

        public DateTime? PendingTimer { get; set; }

        public DateTime CreationTime { get; set; }

        public DateTime? LastUpdated { get; set; }

        public Guid? WorkflowHostType { get; set; }

        public long? ServiceDeploymentId { get; set; }

        [StringLength(450)]
        public string SuspensionExceptionName { get; set; }

        public string SuspensionReason { get; set; }

        public string BlockingBookmarks { get; set; }

        [StringLength(450)]
        public string LastMachineRunOn { get; set; }

        [StringLength(450)]
        public string ExecutionStatus { get; set; }

        public bool? IsInitialized { get; set; }

        public bool? IsSuspended { get; set; }

        public bool? IsReadyToRun { get; set; }

        public bool? IsCompleted { get; set; }

        public long SurrogateIdentityId { get; set; }
    }
}
