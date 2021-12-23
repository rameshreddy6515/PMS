import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Auth2Interceptor implements HttpInterceptor {
  token: string = 'DUMMY_TOKEN';

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('I am Interceptor C2');

    return next.handle(req).pipe((res) => {
      console.log('Response iccoming inside system C2');

      return res;
    });
  }
}
