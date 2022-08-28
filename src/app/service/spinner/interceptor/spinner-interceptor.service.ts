import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {finalize, Observable} from "rxjs";
import {SpinnerHandlerService} from "../handler/spinner-handler.service";

@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptorService implements HttpInterceptor {

  totalRequests = 0;
  requestsCompleted = 0;

  constructor(private spinner : SpinnerHandlerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    this.spinner.show();
    this.totalRequests++;

    return next.handle(request).pipe(
      finalize(() => {

        this.requestsCompleted++;

        if (this.requestsCompleted === this.totalRequests) {
          this.spinner.hide();
          this.totalRequests = 0;
          this.requestsCompleted = 0;
        }
      })
    );
  }
}
