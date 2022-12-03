import pinoLogger from 'pino';

export default pinoLogger({
  level: process.env.LOG_LEVEL || 'info',
  formatters: {
    level: (label) => {
      return { level: label };
    },
  },
});
