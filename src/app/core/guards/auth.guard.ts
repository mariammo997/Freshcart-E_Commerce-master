import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let _Router = inject(Router)

if(typeof localStorage!=='undefined'){

if(localStorage.getItem('userToken')!==null){
  return true;
_Router.navigate(['/home']);
}

else{

  return false;
}
}
else{
  return false;

}

};
