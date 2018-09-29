namespace BayetechWorkFlow.WFEntity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("[System.Activities.DurableInstancing].RunnableInstancesTable")]
    public partial class RunnableInstancesTable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long SurrogateInstanceId { get; set; }

        public Guid? WorkflowHostType { get; set; }

        public long? ServiceDeploymentId { get; set; }

        public DateTime RunnableTime { get; set; }

        public long SurrogateIdentityId { get; set; }
    }
}
