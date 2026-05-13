import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { token, functionsVersion, appBaseUrl } = appParams;

//Create a client with authentication required
export const base44 = createClient({
  appId: '69b958ccec4c782c15841246',
  token,
  functionsVersion,
  serverUrl: 'https://api.base44.app',
  requiresAuth: false,
  appBaseUrl
});