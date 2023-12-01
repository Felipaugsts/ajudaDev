import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "../Firebase/FirebaseConfig";

export async function FetchJobs() {
  try {
    let jobs = [];
    await db
      .collection("Jobs")
      .orderBy("created", "desc")
      .get()
      .then((response) => {
        if (!response.empty) {
          response.docs.forEach((element) => {
            jobs.push(element.data());
          });
        }
      });
    return Promise.resolve({ error: null, result: jobs });
  } catch (err) {
    return Promise.resolve({ error: err.message, result: null });
  }
}

export async function getJobId(ID) {
  try {
    let job = null;
    await db
      .collection("Jobs")
      .doc(`/${ID}`)
      .get()
      .then((res) => {
        if (res.exists) {
          job = res.data();
        }
      });
    return Promise.resolve({ error: null, result: job });
  } catch (err) {
    return Promise.resolve({ error: err.message, result: null });
  }
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
  postCollection,
  deleteJob,
};
