using BayetechWorkFlow;
using System;
using System.Activities;
using System.Collections.Generic;
using System.Windows.Forms;
using System.Activities.DurableInstancing;

namespace TestForm
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            int str = Convert.ToInt32(conditionText.Text);
            WorkflowApplication app = new WorkflowApplication(new test(), new Dictionary<string, object>() {{"TextInput",str }});
            app.Run();

            //持久化操作的环节 
            string conStr = @"Server=115.159.211.34;database=WF;uid=sa;pwd=sh.1234";
            SqlWorkflowInstanceStore store = new SqlWorkflowInstanceStore(conStr);
            app.InstanceStore = store;
        }

        private void button2_Click(object sender, EventArgs e)
        {

        }
    }
}
