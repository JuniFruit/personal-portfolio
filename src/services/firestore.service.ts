import { addDoc, collection } from "firebase/firestore";
import db from "../firestore.init";

export interface IVisitInfo {
  ip: string;
  date: string;
  country: string;
  city: string;
  localityName: string;
  os: string;
  isMobile: boolean;
  device: string;
}

export interface IProjectInfo extends IVisitInfo {
  projectTitle: string;
}

export class FirestoreService {
  static async addVisit(visitInfo: IVisitInfo) {
    try {
      await addDoc(collection(db, "visits"), visitInfo);
    } catch (e: any) {
      console.error(e);
    }
  }
  static async addProjectClick(projectInfo: IProjectInfo) {
    try {
      await addDoc(collection(db, "projectClicks"), projectInfo);
    } catch (e: any) {
      console.error(e);
    }
  }
}
