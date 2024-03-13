# Use a imagem oficial do Node.js como base
FROM node:14

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos do aplicativo para o contêiner
COPY package.json package-lock.json ./

# Instale as dependências do aplicativo
RUN npm install

# Copie o restante dos arquivos do aplicativo
COPY . .

# Exponha a porta do aplicativo (substitua a porta pelo valor apropriado)
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD [node server.js]
