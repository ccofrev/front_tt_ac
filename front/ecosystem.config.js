module.exports = {
  apps: [
    {
      name: 'Front',
      script: 'serve',
      args: '-s build -l 8000', // Esto sirve los archivos en el puerto 3000
      env: {
        PM2_SERVE_PATH: './build',
        PM2_SERVE_PORT: 8000,
      }
    }
  ]
};
