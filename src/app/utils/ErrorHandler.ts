import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
export class ErrorHandler {
    public handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead

          // TODO: better job of transforming error for user consumption
          // this.log(`${operation} failed: ${error.message}`);

          return of(result as T);
        };
      }
}
