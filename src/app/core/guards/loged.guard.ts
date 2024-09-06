import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';



export const logedGuard: CanActivateFn = (route, state) => {

let _Router = inject(Router);

if( typeof localStorage!== 'undefined'){

  if(  localStorage.getItem('userToken')!== null){
    return false


    }

    else{
      return true
    
    _Router.navigate(['/login']);
    }
}
else{
  return false;
}
};
