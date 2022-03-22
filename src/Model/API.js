import firebase from './FirebaseSetup'

 function FetchJobs() {
     
   return firebase.db.collection('Jobs')
    .get()
    .then((data) => { 
        if (data.empty == false) { 
            const results = []
            data.docs.forEach(element => {
                results.push(element.data())
            });
            return results
        }
    })
  };
  

  export default {
    FetchJobs
  };