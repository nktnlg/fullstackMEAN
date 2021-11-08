import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Message, Position} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  constructor(private http: HttpClient) {}

  fetch(categoryId: string): Observable<Position[]> {
    return this.http.get<Position[]>(`/api/positions/${categoryId}`)
  }

  create(position: Position): Observable<Position> {
    return this.http.post<Position>('/api/positions', position)
  }
  update(position: Position): Observable<Position> {
    return this.http.patch<Position>(`/api/positions/${position._id}`, position)
  }
  delete(position: Position): Observable<Message> {
    return this.http.delete<Message>(`/api/positions/${position._id}`)
  }

}
