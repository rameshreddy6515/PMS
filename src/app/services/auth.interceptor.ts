import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: string = 'DUMMY_TOKEN';
  intercept(req: HttpRequest<any>, res: HttpHandler) {
    console.log('I am Interceptor');

    let updatedReq = req.clone({
      setHeaders: {
        token: this.token,
      },
    });

    return res.handle(updatedReq).pipe((res) => {
      console.log('Response iccoming inside system');

      return res;
    });
  }
}
