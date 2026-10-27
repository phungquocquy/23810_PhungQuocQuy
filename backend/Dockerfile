# 1. Sử dụng Node.js LTS làm base image
FROM node:18-alpine

# 2. Thiết lập thư mục làm việc trong container
WORKDIR /app

# 3. Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# 4. Cài đặt các thư viện phụ thuộc
RUN npm install --production

# 5. Sao chép toàn bộ mã nguồn Backend vào container
COPY . .

# 6. Mở cổng 5000 cho Backend
EXPOSE 5000

# 7. Khởi chạy ứng dụng Backend
CMD ["node", "server.js"]
