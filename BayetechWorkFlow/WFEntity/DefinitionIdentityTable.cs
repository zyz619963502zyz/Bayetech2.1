namespace BayetechWorkFlow.WFEntity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("[System.Activities.DurableInstancing].DefinitionIdentityTable")]
    public partial class DefinitionIdentityTable
    {
        [Key]
        public long SurrogateIdentityId { get; set; }

        public Guid DefinitionIdentityHash { get; set; }

        public Guid DefinitionIdentityAnyRevisionHash { get; set; }

        public string Name { get; set; }

        public string Package { get; set; }

        public long? Build { get; set; }

        public long? Major { get; set; }

        public long? Minor { get; set; }

        public long? Revision { get; set; }
    }
}
