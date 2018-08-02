using BayetechWorkFlow;
using System;
using System.Activities;
using System.Activities.DurableInstancing;
using System.Threading;
using System.Windows.Forms;

namespace TestForm
{
    public partial class WFTest : Form
    {
        public WFTest()
        {
            InitializeComponent();
        }

        static readonly string connStr = "";
        AutoResetEvent syncEvent = new AutoResetEvent(false);

        private void button1_Click(object sender, EventArgs e)
        {
            //取出当前运行的实例并且赋值到流程实例上。
            WorkflowApplication app = new WorkflowApplication(new Accounts());
            SqlWorkflowInstanceStore store = new SqlWorkflowInstanceStore(connStr);
            app.InstanceStore = store;

            AppIdText.Text = app.Id.ToString();
            WorkFlowEvent(app, syncEvent);

            app.Run();

            //方法进入等待状态，然后另外一个线程通过调用AutoResetEvent对象的Set()方法取消等待的状态
            syncEvent.WaitOne();
        }

        private static void WorkFlowEvent(WorkflowApplication app, AutoResetEvent syncEvent)
        {
            #region 工作流生命周期事件
            app.Unloaded = delegate (WorkflowApplicationEventArgs er)
            {
                Console.WriteLine("工作流 {0} 卸载.", er.InstanceId);
            };
            app.Completed = delegate (WorkflowApplicationCompletedEventArgs er)
            {
                Console.WriteLine("工作流 {0} 完成.", er.InstanceId);
                syncEvent.Set();
            };
            app.Aborted = delegate (WorkflowApplicationAbortedEventArgs er)
            {
                Console.WriteLine("工作流 {0} 终止.", er.InstanceId);
            };
            app.Idle = delegate (WorkflowApplicationIdleEventArgs er)
            {
                Console.WriteLine("工作流 {0} 空闲.", er.InstanceId);
                syncEvent.Set(); //这里要唤醒，不让的话，当创建了一个书签之后，界面就卡死了。
            };
            app.PersistableIdle = delegate (WorkflowApplicationIdleEventArgs er)
            {
                Console.WriteLine("持久化");
                return PersistableIdleAction.Unload;
            };
            app.OnUnhandledException = delegate (WorkflowApplicationUnhandledExceptionEventArgs er)
            {
                Console.WriteLine("OnUnhandledException in Workflow {0}\n{1}",
                   er.InstanceId, er.UnhandledException.Message);
                            return UnhandledExceptionAction.Terminate;
            };
            #endregion
        }
    }
}
