import { FirestoreService, IVisitInfo } from "./firestore.service";

export class UserInfoService {
  static async getInfo() {
    try {
      const prevVisit = localStorage.getItem("userInfo");
      const res = await fetch("https://api-bdc.net/data/client-info");
      const data = await res.json();

      if (prevVisit && JSON.parse(prevVisit).ip === data.ipString) return;

      const geoRes = await fetch(
        `https://api-bdc.net/data/ip-geolocation-with-confidence?ip=${data.ipString}&localityLanguage=en&key=${process.env.REACT_APP_BIG_DATA_KEY}`
      );
      const geoData = await geoRes.json();
      const noData = "unknown";
      const visitInfo: IVisitInfo = {
        ip: data?.ipString || noData,
        date: Date(),
        city: geoData?.location?.city || noData,
        localityName: geoData?.location?.localityName || noData,
        country: geoData?.country?.name || noData,
        isMobile: data?.isMobile || noData,
        device: data?.device || noData,
        os: data?.os || noData,
      };
      FirestoreService.addVisit(visitInfo);
      localStorage.setItem("userInfo", JSON.stringify(visitInfo));
    } catch (error) {
      console.error(error);
    }
  }
}
