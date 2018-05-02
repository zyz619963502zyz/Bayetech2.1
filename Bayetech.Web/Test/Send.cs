using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RabbitMQ.Client;
using System.Text;

namespace Bayetech.Web.Test
{
    public class Send
    {
        public static void Main()
        {
            var factory = new ConnectionFactory { HostName = "localhost" };
            using (var connection = factory.CreateConnection())
            {
                using (var channel = connection.CreateModel())
                {
                    channel.QueueDeclare(
                        queue: "hello",
                        durable: false,
                        exclusive: false,
                        autoDelete: false,
                        arguments: null
                        );

                    string message = "Hello World!";
                    var body = Encoding.UTF8.GetBytes(message);

                    channel.BasicPublish(
                        exchange: "",
                        routingKey: "hello",
                        basicProperties: null,
                        body: body);

                    Console.WriteLine("{x} send {0}", message);
                    Console.ReadLine();
                }
            }
        }
    }
}