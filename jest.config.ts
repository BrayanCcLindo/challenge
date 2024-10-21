module.exports = {
  preset: "ts-jest", // Si usas TypeScript
  testEnvironment: "jsdom", // Asegúrate de que esto esté configurado
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Para TypeScript
    "^.+\\.jsx?$": "babel-jest", // Para JSX
  },
};
