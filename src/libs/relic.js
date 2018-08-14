var auth = {
  id: '',
  name: '',
  img: '',
  sex: '',
  sexuality: '',
  phone: '',
  tel: '',
  mail: '',
  dept_id: '',
  dept: '',
  post_id: '',
  post: '',
  uid: '',
  token: ''
};

// function verify() {
//   $.get('verify', data => {
//     var t = parseInt(data);
//     if(!isNaN(t)) {
//       sessionStorage.oo = t;
//     }
//   });
// }

const relic = {
  setUser(ob) {
    auth.id = ob.id;
    auth.name = ob.name;
    // auth.img = ob.img;
    auth.sex = ob.sex;
    auth.dept_id = ob.departmentId;
    auth.dept = ob.departmentName;
    auth.phone = ob.phoneNumber;
    auth.post_id = ob.postId;
    auth.post = ob.postName;
    auth.tel = ob.telephoneNumber;
    auth.mail = ob.eMail;
    auth.uid = ob.workNumber;
    auth.token = ob.token;
    localStorage.ELPSYCONGROO = window.btoa(window.encodeURIComponent(JSON.stringify(ob))).split('T').map(function(i){ return i.split('').reverse().join('');}).join('T');
  },
  clear() {
    localStorage.removeItem('ELPSYCONGROO');
    auth.id = '';
    auth.name = '';
    auth.img = '';
    auth.sex = '';
    auth.sexuality = '';
    auth.phone = '';
    auth.tel = '';
    auth.mail = '';
    auth.dept_id = '';
    auth.dept = '';
    auth.post_id = '';
    auth.post = '';
    auth.uid = '';
    auth.token = '';
  },
  get isLogin() {
    if(auth.name && auth.token && auth.id) {
      // if(sessionStorage.oo) {
      //   var t = parseInt(sessionStorage.oo);
      //   var n = +(new Date());
      //   if(isNaN(t)) return false;
      //   if(t > n || n - t > 3600000) {
      //     verify();
      //   }
      // }else {
      //   verify();
      // }
      return true;
    }else {
      return false;
    }
  },
  get id() {return auth.uid; },
  get name() {return auth.name; },
  get token() {return auth.token; }
};

if(localStorage.ELPSYCONGROO) {
  var cache = JSON.parse(window.decodeURIComponent(window.atob(localStorage.ELPSYCONGROO.split('T').map(function(i){ return i.split('').reverse().join('');}).join('T'))));
  relic.setUser(cache);
}

export default relic;