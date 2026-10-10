FROM node:22-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY backend/package*.json ./
RUN npm install --omit=dev
COPY backend/server.js ./server.js
COPY --from=frontend-build /app/frontend/dist ./public
EXPOSE 3000
CMD ["node", "server.js"]
