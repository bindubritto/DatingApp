using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
        // User registration. 
        Task<User> Register(User user, string password);

        // Login to our api. 
        Task<User> Login(string username, string password);
        
        // To check, if user exist or not. 
        Task<bool> UserExists(string username); 

         
    }
}