using Model;
using System.Collections.Generic;

namespace DataAccessLayer
{
    public interface IVocableRepos
    {
        public void AddVocable(Vocable vocable);
        public List<Vocable> GetVocables();
        public Vocable oneVocable(int Input);

        public Vocable randVocable();
        public void DeleteVocable(int Input);
        public void UpdateVocable(Vocable vocable, int Input);
    }
}


