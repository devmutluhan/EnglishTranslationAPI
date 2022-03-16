using System.Data;
using System.Data.SqlClient;

namespace DataAccessLayer
{
    public class BaseRepos
    {
        private readonly string ConnectionString;
        public BaseRepos(string connectionString)
        {
            this.ConnectionString = connectionString;
        }
        public IDbConnection GetConnection()
        {
            return new SqlConnection(ConnectionString);
        }
    }
}