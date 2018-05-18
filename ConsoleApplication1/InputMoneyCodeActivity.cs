using System;
using System.Activities;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleApplication1
{

    public sealed class InputMoneyCodeActivity : CodeActivity
    {
        // 定义一个字符串类型的活动输入参数
        //public InArgument<string> Text { get; set; }
        //定义一个Int类型的输出参数
        public OutArgument<int> Money { get; set; }
        // 如果活动返回值，则从 CodeActivity<TResult>
        // 派生并从 Execute 方法返回该值。
        protected override void Execute(CodeActivityContext context)
        {
            // 获取 Text 输入参数的运行时值
            //string text = context.GetValue(this.Text);
            int money;
            var v = Console.ReadLine();
            int.TryParse(v, out money);
            context.SetValue(Money, money);
        }
    }
}
