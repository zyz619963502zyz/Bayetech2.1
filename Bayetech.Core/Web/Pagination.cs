/*******************************************************************************
 * Copyright © 2016 NFine.Framework 版权所有
 * Author: NFine
 * Description: NFine快速开发平台
 * Website：http://www.nfine.cn
*********************************************************************************/

namespace Bayetech.Core
{
    /// <summary>
    /// 非泛型分页
    /// </summary>
    public class Pagination
    {
        /// <summary>
        /// 每页行数
        /// </summary> 
        public int rows { get; set; }
        /// <summary>
        /// 当前页
        /// </summary>
        public int page { get; set; }
        /// <summary>
        /// 排序列
        /// </summary>
        public string order { get; set; }
        /// <summary>
        /// 排序类型
        /// </summary>
        public string sord { get; set; }
        /// <summary>
        /// 总记录数
        /// </summary>
        public int records { get; set; }
        /// <summary>
        /// 总页数
        /// </summary>
        public int total
        {
            get
            {
                if (records > 0)
                {
                    return records % this.rows == 0 ? records / this.rows : records / this.rows + 1;
                }
                else
                {
                    return 0;
                }
            }
        }


        /// <summary>
        /// 默认分页参数
        /// </summary>
        /// <param name="sidx">分页字段</param>
        /// <returns></returns>
        public static Pagination GetDefaultPagination(string sidx, string sord = "asc")
        {
            Pagination pages = new Pagination();
            pages.rows = 9999999;
            pages.page = 1;
            pages.order = sidx;
            pages.sord = sord;
            pages.records = 9999999;
            return pages;
        }
    }

    /// <summary>
    /// 泛型分页类
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class PaginationResult<T> where T : class
    {
        /// <summary>
        /// 泛型实体
        /// </summary>
        public T datas { get; set; }

        public Pagination pagination { get; set; }
    }

}
