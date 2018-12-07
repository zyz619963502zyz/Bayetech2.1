/*******************************************************************************
 * Copyright © 2017 平台组 版权所有
 * Author: Zhaoyz
 * Description: 快速开发平台
*********************************************************************************/

using Bayetech.Core;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Linq.Expressions;

namespace Bayetech.DAL
{
    /// <summary>
    /// 仓储接口
    /// </summary>
    /// <typeparam name="TEntity">实体类型</typeparam>
    public interface IRepositoryBase<TEntity> where TEntity : class,new()
    {    
        int Insert(TEntity entity);
        int Insert(List<TEntity> entitys);
        int Update(TEntity entity);
        int Delete(TEntity entity);
        int Delete(Expression<Func<TEntity, bool>> predicate);
        TEntity FindEntity(object keyValue);
        TEntity FindEntity(Expression<Func<TEntity, bool>> predicate);
        IQueryable<TEntity> IQueryable();
        IQueryable<TEntity> IQueryable(Expression<Func<TEntity, bool>> predicate);
        List<TEntity> FindList(string strSql);
        List<TEntity> FindList(string strSql, DbParameter[] dbParameter);
        List<TEntity> FindList(Pagination pagination);
        List<TEntity> FindList(Expression<Func<TEntity, bool>> predicate, Pagination pagination);
    }
}
