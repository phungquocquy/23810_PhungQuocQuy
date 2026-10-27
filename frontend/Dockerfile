# Giai đoạn 1: Build ứng dụng React
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Biến môi trường API tĩnh mặc định khi build
ARG REACT_APP_API_URL=https://api-23810.onrender.com/api/employees
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

# Giai đoạn 2: Phục vụ Web bằng Nginx
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
