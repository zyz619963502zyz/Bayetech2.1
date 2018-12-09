using System;
using System.Linq;
using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using System.Linq.Expressions;
using Bayetech.Core.Entity;
using Bayetech.Core;
using System.Collections.Generic;
using System.Data.Entity;

namespace Bayetech.Service
{
    public class BaseService<TEntity> : IBaseService<TEntity> where TEntity : class, new()
    {
        //原先RepositoryBase repository = new RepositoryBase()；IOC报错。

        protected RepositoryBase repository = null;

        public BaseService(DbContext db = null)
        {
            repository = new RepositoryBase(db);
        }

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
        /// 查询单个对象
        /// </summary>
        /// <param name="keyValue"></param>
        /// <returns></returns>
        public TEntity FindEntity(Expression<Func<TEntity, bool>> predicate)
        {
            return repository.FindEntity<TEntity>(predicate);
        }

        /// <summary>
        ///查询集合延迟加载 
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        public IQueryable<TEntity> FindList(Expression<Func<TEntity, bool>> predicate)
        {
            return repository.IQueryable(predicate);
        }

        /// <summary>
        /// 查找集合非延迟加载
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        public List<TEntity> FindList(Expression<Func<TEntity, bool>> predicate,string page)
        {
            return repository.FindList(Pagination.GetDefaultPagination(page), predicate);
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
        //public JObject GetList(Expression<Func<TEntity, bool>> predicate)
        //{
        //    var jObect = new JObject();
        //    var result = repository.IQueryable(predicate).ToList();
        //    return Common.PackageJObect(result.Count > 0, result);
        //}


        /// <summary>
        /// 查询集合带分页对象
        /// </summary>
        /// <param name="page">分页对象</param>
        /// <param name="predicate">lamad表达式</param>
        /// <returns></returns>
        public JObject GetList(Expression<Func<TEntity, bool>> predicate, Pagination page= null)
        {
            var jObect = new JObject();
            var result = repository.FindList(page, out page, predicate);
            return Common.PackageJObect(result.Count > 0, result,page);
        }

        /// <summary>
        /// 查找集合
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        public JObject GetList(Expression<Func<TEntity, bool>> predicate, string page)
        {
            var jObect = new JObject();
            var result = repository.FindList(Pagination.GetDefaultPagination(page), predicate);
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

        //public BayetechEntities GetContext()
        //{
        //    return repository.GetContext();
        //}
        /// <summary>
        /// 获取上下文
        /// </summary>
        /// <returns></returns>
        public BayetechEntities GetContext()
        {
            return new BayetechEntities();
        }
        /// <summary>
        /// 获取oas
        /// </summary>
        /// <returns></returns>
        public oasEntities GetOasContext()
        {
            return new oasEntities();
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
