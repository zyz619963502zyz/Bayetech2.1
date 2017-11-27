﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class BayetechEntities : DbContext
    {
        public BayetechEntities()
            : base("name=BayetechEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Account> Account { get; set; }
        public virtual DbSet<Article> Article { get; set; }
        public virtual DbSet<ArticleContent> ArticleContent { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Game> Game { get; set; }
        public virtual DbSet<GameRequirements> GameRequirements { get; set; }
        public virtual DbSet<Login> Login { get; set; }
        public virtual DbSet<MallGoodInfo> MallGoodInfo { get; set; }
        public virtual DbSet<MallOrder> MallOrder { get; set; }
        public virtual DbSet<MallOrderStatus> MallOrderStatus { get; set; }
        public virtual DbSet<MallType> MallType { get; set; }
        public virtual DbSet<Module> Module { get; set; }
        public virtual DbSet<Relationship> Relationship { get; set; }
        public virtual DbSet<Server> Server { get; set; }
        public virtual DbSet<GoodAndDescription> GoodAndDescription { get; set; }
        public virtual DbSet<vw_LoginInfo> vw_LoginInfo { get; set; }
        public virtual DbSet<GameInfoDescription> GameInfoDescription { get; set; }
        public virtual DbSet<vw_MallGoodInfo> vw_MallGoodInfo { get; set; }
    }
}