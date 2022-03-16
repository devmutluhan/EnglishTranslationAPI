using Model;
using DataAccessLayer;
using System.Collections.Generic;

namespace BusinessLayer{
    public class VocableManager
    {
        private readonly IVocableRepos VocableRepos;

        public VocableManager(IVocableRepos vocableRepos)
        {
            this.VocableRepos = vocableRepos;
        }
        public void AddVocable(Vocable vocable){
            VocableRepos.AddVocable(vocable);
        }
        public List<Vocable> GetVocables()
        {
            return VocableRepos.GetVocables();
        }
        public Vocable oneVocable(int input)
        {
            return VocableRepos.oneVocable(input);
        }
        public Vocable randVocable()
        {
            return VocableRepos.randVocable();
        }
        public void DeleteVocable(int input)
        {
            VocableRepos.DeleteVocable(input);
        }
        public void UpdateVocable(Vocable vocable, int input)
        {
            VocableRepos.UpdateVocable(vocable,input);
        }
    }
}