using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace Bayetech.Service
{
    public interface IBaseService<TEntity>
    {
        /// <summary>
        /// 新增
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        int Insert(TEntity entity);

        /// <summary>
        /// 更新
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        int Update(TEntity entity);

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="keyValue"></param>
        /// <returns></returns>
        int Delete(object keyValue);

        /// <summary>
        /// 查询单个对象
        /// </summary>
        /// <param name="keyValue"></param>
        /// <returns></returns>
        TEntity FindEntity(object keyValue);

        /// <summary>
        ///查询集合 
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        IQueryable<TEntity> FindList(Expression<Func<TEntity, bool>> predicate);
    }
}
