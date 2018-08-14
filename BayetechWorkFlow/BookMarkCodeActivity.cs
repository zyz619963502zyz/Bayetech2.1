using System.Activities;

namespace BayetechWorkFlow
{
    public class BookMarkCodeActivity : NativeActivity
    {
        //public InArgument<string> BookMarkName { get; set; }

        //public OutArgument<string> condition{ get; set; }

        protected override void Execute(NativeActivityContext context)
        {
            context.CreateBookmark("当前流程名称", new BookmarkCallback(BookMarkCallBack));
        }

        /// <summary>
        /// 注意，一定要记得注意重写此属性，并返回true，否则后面运行会报错
        /// </summary>
        protected override bool CanInduceIdle
        {
            get
            {
                return true;// base.CanInduceIdle;
            }
        }

        public void BookMarkCallBack(NativeActivityContext context, Bookmark bookmark, object value) {
            //context.SetValue(Num, Convert.ToInt32(value));
        }
    }
}
