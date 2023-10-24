import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AudioItem} from "../models/audio-item.model";

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<AudioItem[]> {
    return this.http.get<AudioItem[]>('assets/audio/data/data.json');
  }

}
