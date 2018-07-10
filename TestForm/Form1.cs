using BayetechWorkFlow;
using System;
using System.Activities;
using System.Collections.Generic;
using System.Windows.Forms;

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
            WorkflowApplication app = new WorkflowApplication(new Accounts(), new Dictionary<string, object>() {
            {"TextInput",str }
            });
            app.Run();
        }

        private void button2_Click(object sender, EventArgs e)
        {

        }
    }
}
