let auth_ck = Cookies.get("ck");

if(auth_ck){
  window.location.replace("/page/dashboard.html");
}else{
  
}