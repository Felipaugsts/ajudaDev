import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { db } from "./FirebaseSetup";
function FetchJobs() {
  return db
    .collection("Jobs")
    .orderBy("created", "desc")
    .get()
    .then((data) => {
      if (data.empty === false) {
        const results = [];
        data.docs.forEach((element) => {
          results.push(element.data());
        });
        return results;
      }
    });
}

function getJobId(ID) {
  return db
    .collection("Jobs")
    .doc(`/${ID}`)
    .get()
    .then((res) => {
      if (res.exists) {
        return res.data();
      }
    });
}

function deleteJob(ID) {
  return db
    .collection("Jobs")
    .doc(`/${ID}`)
    .delete()
    .then((res) => {
      return res;
    });
}

const postCollection = async (job, params) => {
  const url = await getImage(job.Tech).then((url) => {
    return url;
  });
  var id = null;
  if (params != undefined) {
    id = db.collection("Jobs").doc(`${params}`);
  } else {
    id = db.collection("Jobs").doc();
  }
  return id
    .set({
      uid: job.uid,
      jobID: id.id,
      title: job.title,
      location: job.location,
      field: job.field,
      remote: job.remote,
      Tech: job.Tech,
      link: job.link,
      level: job.level,
      country: job.country,
      created: new Date(),
      description: job.description,
      url: url,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

const getImage = async (tech) => {
  const image = tech.toLowerCase();
  const storage = getStorage();
  const starsRef = ref(storage, `Images/${image}.png`);

  return await getDownloadURL(starsRef)
    .then((url) => {
      return url;
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export default {
  FetchJobs,
  postCollection,
  getJobId,
  deleteJob,
};
