using Model;
using System.Collections.Generic;
using Dapper;
using System.Linq;

namespace DataAccessLayer
{
    public class VocableRepos : BaseRepos, IVocableRepos
    {
        public VocableRepos(Settings settings) : base(settings.ConnectionString)
        {
            
        }
        public void AddVocable(Vocable vocable)
        {
            using (var connection = GetConnection())
            {
                connection.Execute("Insert Into vocable (English,Turkish) Values (@English,@Turkish)", vocable);
            }
        }
        public List<Vocable> GetVocables(){
            using (var connection = GetConnection())
            {
                return connection.Query<Vocable>("Select*From vocable").OrderBy(x=>x.Id).ToList();
            }
        }
        public Vocable oneVocable(int input){
            using (var connection = GetConnection()){
                return connection.Query<Vocable>($"Select*From vocable Where Id={input}").FirstOrDefault();
            }
        }
        public Vocable randVocable(){
            using (var connection = GetConnection()){
                return connection.Query<Vocable>($"SELECT TOP 1 Id,English,Turkish From vocable Order By NEWID()").FirstOrDefault();
            }
        }
        public void DeleteVocable(int input){
            using (var connection = GetConnection()){
                connection.Execute($"Delete From vocable Where Id={input}");
            }   
        }
        public void UpdateVocable(Vocable vocable, int input){
            using (var connection = GetConnection()){
                connection.Execute($"Update vocable Set English=@English, Turkish=@Turkish Where Id={input}",vocable);
            }
        }
    }

}