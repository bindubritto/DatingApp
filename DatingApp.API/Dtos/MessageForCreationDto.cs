using System;

namespace DatingApp.API.Dtos
{
    public class MessageForCreationDto
    {
        public int SenderId { get; set; }
        public int RecipientId { get; set; }
        public DateTime MessageSent { get; set; }
        public string Context { get; set; }
        public MessageForCreationDto()
        {
            MessageSent = DateTime.Now;
        }
    }
}