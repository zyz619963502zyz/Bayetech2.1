using Newtonsoft.Json.Linq;
using Bayetech.DAL;
using Newtonsoft.Json;
using Bayetech.Core.Entity;
using System;
using Bayetech.Core;
using Bayetech.Service.IServices;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Bayetech.Service
{
    public class UserService : IUserService
    {
        public bool CheckAccount(string account)
        {
            throw new NotImplementedException();
        }

        public JObject CheckLogin(JObject json)
        {
            throw new NotImplementedException();
        }

        public bool CreatAccount(JObject json)
        {
            throw new NotImplementedException();
        }

        public int Delete(object keyValue)
        {
            throw new NotImplementedException();
        }

        public User FindEntity(object keyValue)
        {
            throw new NotImplementedException();
        }

        public IQueryable<User> FindList(Expression<Func<User, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public List<User> FindList(Expression<Func<User, bool>> predicate, string order = "")
        {
            throw new NotImplementedException();
        }

        public bool GetVerificationLogion(string userName, string passWord)
        {
            throw new NotImplementedException();
        }

        public int Insert(User entity)
        {
            throw new NotImplementedException();
        }

        public int Update(User entity)
        {
            throw new NotImplementedException();
        }
    }
}
