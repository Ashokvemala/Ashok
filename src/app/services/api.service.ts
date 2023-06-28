import { Injectable } from '@angular/core' ;
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

baseurl="http://localhost:3000"

  constructor(private httpClient:HttpClient) { }
 
getData(endPoint: string){
  return this.httpClient.get(this.baseurl+endPoint)
}
addvalues(body:any,endpoint:string){
  return this.httpClient.post(this.baseurl+endpoint,body)
}
update(body:any,endPoint:string){
  console.log(body);
  
  return this.httpClient.put(this.baseurl+endPoint,body)
}
deleat(endPoint:string){
  return this.httpClient.delete(this.baseurl+endPoint)
}
  
}
