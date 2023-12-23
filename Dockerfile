FROM node:18-alpine

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

COPY . .

# RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile
RUN npm install --production


EXPOSE 3000

CMD ["npm", "run", "start:prod"]

# docker build -t app .
# docker run -dp 127.0.0.1:3000:3000 app
# docker ps 