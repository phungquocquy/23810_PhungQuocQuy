# # HỆ THỐNG QUẢN LÝ NHÂN SỰ (HR MANAGEMENT SYSTEM)

## I. THÔNG TIN SINH VIÊN
- **Họ và tên:** Phùng Quốc Quy
- **Mã số sinh viên (MSSV):** 238120
- **Lớp:** ĐH Điện toán Đám mây

---

## II. MÔ TẢ HỆ THỐNG
Hệ thống Quản lý nhân sự cho phép thực hiện các thao tác quản lý thông tin nhân viên bao gồm: xem danh sách nhân viên, xem chi tiết, thêm mới nhân viên, cập nhật thông tin, xóa hồ sơ nhân viên và tìm kiếm theo mã nhân viên hoặc họ tên.

---

## III. CÔNG NGHỆ SỬ DỤNG
- **Frontend:** React, JavaScript, HTML5, CSS3
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose)
- **Quản lý mã nguồn:** Git & GitHub
- **Đóng gói ứng dụng:** Docker & Docker Hub
- **Triển khai ứng dụng:** Render

---

## IV. HƯỚNG DẪN CHẠY ỨNG DỤNG Ở MÔI TRƯỜNG PHÁT TRIỂN (LOCAL DEV)

### 1. Khởi chạy Backend
```bash
cd backend
npm install
# Tạo file .env từ file .env.example và điền thông tin PORT, MONGODB_URI
npm start
## IV. DOCKER DEPLOYMENT

* **Backend Docker Hub Repository:** https://hub.docker.com/r/phungquocquy238120/backend
* **Image Tag:** `phungquocquy238120/backend:latest`

### Lệnh chạy Container Backend:
```bash
docker run -d -p 5000:5000 --name backend-app \
  -e MONGODB_URI="<chuoi_ket_noi_mongodb_atlas>" \
  -e PORT=5000 \
   phungquocquy238120/backend:latest
'''
## V. DOCKER DEPLOYMENT

* **Backend Docker Hub Repository:** https://hub.docker.com/r/phungquocquy238120/backend
* **Frontend Docker Hub Repository:** https://hub.docker.com/r/phungquocquy238120/frontend
* **Image Tags:** `phungquocquy238120/backend:latest`, `phungquocquy238120/frontend:latest`

### Lệnh chạy Container:
```bash
# 1. Khởi chạy Backend Container
docker run -d -p 5000:5000 --name backend-app \
  -e MONGODB_URI="<chuoi_ket_noi_mongodb_atlas>" \
  -e PORT=5000 \
  phungquocquy238120/backend:latest

# 2. Khởi chạy Frontend Container
docker run -d -p 8080:80 --name frontend-app \
  phungquocquy238120/frontend:latest
