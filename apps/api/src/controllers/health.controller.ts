import os from 'os';

export async function getHealth() {
  return {
    status: 'ok',
    uptime: process.uptime(), 
    timestamp: new Date().toISOString(),
    hostname: os.hostname(),
    memoryUsage: process.memoryUsage(),
  };
}
