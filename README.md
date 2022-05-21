# WebApp support students finding room

Start Time: 11/3/2022 <br>
Completed Time: 30/4/2022

### Description
This is my graduate project. A web app support students finding room on the platform Web.
<br> Use Technology:
- Frontend: React, Redux, Redux Saga, SASS/SCSS, CSS Module
- Backend: Nodejs + ExpressJs, MongoDB
- Third-party Service: Firebase (Authentication)
- Tools: Webstorm, VS Code, Postman, GitHub, Source Tree
- Production: Firebare hosting, heroku

### Deploy
Frontend

Folder được sử dụng cho bản Production là folder build, được chạy với câu lệnh:
```
npm run build

// yarn 

yarn build
```
Trước khi chạy lệnh build, và có gì thay đổi phải được log vào file `CHANGELOG.md` và chỉnh lại version trong file `config.js`

Sau đó, chạy lệnh firebare để deploy lên firebase hosting:
```
firebase deploy
```
Nếu bắt đăng nhập thì chạy lệnh:
```
firebase login
```
Đăng nhập với tài khoản [dongnbas@gmail.com]

Backend:

Sử dụng heroku để triển khai api và server

repo server: [https://github.com/andyngojs/Dobeeroom_Server]

repo đang có remote đến git heroku với branch `master`

thực hiện lệnh git như bình thường

```
git add .
git commit -am "update version"
git push heroku master
```

### Develop by:
Dong Ngo (AndyngoJs)

### Mentors
Nguyễn Thịnh 

Nguyễn Minh

### Tutorial Teacher
Pham Tien Huy

### Reference

Google Map Platform: https://console.cloud.google.com/apis/credentials?authuser=1&project=dobeeroom