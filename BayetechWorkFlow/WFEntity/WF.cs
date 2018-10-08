namespace BayetechWorkFlow.WFEntity
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class WF : DbContext
    {
        public WF()
            : base("name=WF")
        {
        }

        public virtual DbSet<DefinitionIdentityTable> DefinitionIdentityTable { get; set; }
        public virtual DbSet<IdentityOwnerTable> IdentityOwnerTable { get; set; }
        public virtual DbSet<InstanceMetadataChangesTable> InstanceMetadataChangesTable { get; set; }
        public virtual DbSet<InstancePromotedPropertiesTable> InstancePromotedPropertiesTable { get; set; }
        public virtual DbSet<InstancesTable> InstancesTable { get; set; }
        public virtual DbSet<KeysTable> KeysTable { get; set; }
        public virtual DbSet<LockOwnersTable> LockOwnersTable { get; set; }
        public virtual DbSet<RunnableInstancesTable> RunnableInstancesTable { get; set; }
        public virtual DbSet<ServiceDeploymentsTable> ServiceDeploymentsTable { get; set; }
        public virtual DbSet<SqlWorkflowInstanceStoreVersionTable> SqlWorkflowInstanceStoreVersionTable { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
