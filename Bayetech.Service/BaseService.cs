using System;
using System.Linq;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using System.Linq.Expressions;
using Bayetech.Core.Entity;
using Bayetech.Core;
using System.Collections.Generic;

namespace Bayetech.Service
{
    public class BaseService<TEntity> : IBaseService<TEntity> where TEntity : class, new()
    {
        protected RepositoryBase repository = new RepositoryBase();

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="keyValue"></param>
        /// <returns></returns>
        public int Delete(object keyValue)
        {
            throw new NotImplementedException();
        }
        /// <summary>
        /// 查询单个对象
        /// </summary>
        /// <param name="keyValue"></param>
        /// <returns></returns>
        public TEntity FindEntity(object keyValue)
        {
            return repository.FindEntity<TEntity>(keyValue);
        }

        /// <summary>
        ///查询集合延迟加载 
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        public IQueryable<TEntity> FindList(Expression<Func<TEntity, bool>> predicate)
        {
            return repository.IQueryable<TEntity>(predicate);
        }

        /// <summary>
        /// 查找集合非延迟加载
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        public List<TEntity> FindList(Expression<Func<TEntity, bool>> predicate,string page)
        {
            return repository.FindList<TEntity>(GetDefaultPagination(page), predicate);
        }

        /// <summary>
        /// 查找单个对象
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        public JObject GetObject(object keyValue)
        {
            var jObect = new JObject();

            var result = repository.FindEntity<TEntity>(keyValue);
            return Common.PackageJObect(result != null, result);
        }

        /// <summary>
        /// 查找集合
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        public JObject GetList(Expression<Func<TEntity, bool>> predicate)
        {
            var jObect = new JObject();
            var result = repository.IQueryable<TEntity>(predicate).ToList();
            return Common.PackageJObect(result.Count > 0, result);
        }

        /// <summary>
        /// 查找集合
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        public JObject GetList(Expression<Func<TEntity, bool>> predicate, string page)
        {
            var jObect = new JObject();
            var result = repository.FindList(GetDefaultPagination(page), predicate);
            return Common.PackageJObect(result.Count > 0, result);
        }

        /// <summary>
        /// 新增
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public int Insert(TEntity entity)
        {
            return repository.Insert(entity);
        }

        /// <summary>
        /// 新增
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public int Insert(List<TEntity> entity)
        {
            return repository.Insert(entity);
        }
        /// <summary>
        /// 更新
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public int Update(TEntity entity)
        {
            return repository.Update(entity);
        }

        /// <summary>
        /// 获取上下文
        /// </summary>
        /// <returns></returns>
        public BayetechEntities GetContext()
        {
            return repository.GetContext();
        }


        /// <summary>
        /// 默认分页参数
        /// </summary>
        /// <param name="sidx">分页字段</param>
        /// <returns></returns>
        public static Pagination GetDefaultPagination(string sidx,string sord ="asc" )
        {
            Pagination pages = new Pagination();
            pages.rows = 9999999;
            pages.page = 1;
            pages.order = sidx;
            pages.sord = sord;
            pages.records = 9999999;
            return pages;
        }

        public bool BulkInsert(List<TEntity> list)
        {
            return repository.BulkInsert(list);
        }
    }
}
