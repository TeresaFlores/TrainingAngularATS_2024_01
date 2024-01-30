import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  private formControlsUrl = 'assets/form-controls.json';

  constructor(private http: HttpClient) {}

  getFormControls(allowedPermissions: string[]): Observable<any[]> {
    return this.http.get<any[]>(this.formControlsUrl)
      .pipe(
        map(formControls => formControls.filter(control => this.hasPermission(control.permissions, allowedPermissions)))
      );
  }

  private hasPermission(controlPermissions: string[], allowedPermissions: string[]): boolean {
    return controlPermissions.some(permission => allowedPermissions.includes(permission));
  }
}