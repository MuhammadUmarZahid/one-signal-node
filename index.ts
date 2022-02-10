const ONESIGNAL_BASE_URL = "https://onesignal.com:443";
const ONESIGNAL_APP_ID = "";
const ONESIGNAL_KEY = "";
const axios = require("axios");

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Authorization": "Basic "+ONESIGNAL_KEY,
};

const oneSignalAxios = axios.create({
  baseURL: ONESIGNAL_BASE_URL,
  headers,
});


const createNotification = async (recipients, subject, content, url, data) => {
    const notiRequest = {
      app_id: ONESIGNAL_APP_ID,
      headings: {
        'en': subject
      },
      contents: {
        'en': content,
      },
      include_external_user_ids: recipients,
      channel_for_external_user_ids: "push",
      data: data,
      web_url: url,
    };
    try{
    const res = await oneSignalAxios.post("/api/v1/notifications", notiRequest);
    console.log(">>>res",res)
    }
    catch(e){
      console.log(">>>err res",e.response)
    }

  }



  createNotification(['abc'],"test","test 1","",{});


    