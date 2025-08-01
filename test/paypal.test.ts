import { generateAccessToken } from '@/lib/paypal';

// Test to generate access token from paypal
test('generate token paypal', async () => {
  const tokenResponse = await generateAccessToken();
  console.log(tokenResponse);
  expect(typeof tokenResponse).toBe('string');
  expect(tokenResponse.length).toBeGreaterThan(0);
});

console.log(process.env.PAYPAL_CLIENT_ID); // Debería mostrar tu ID
console.log(process.env.PAYPAL_APP_SECRET); // Debería mostrar tu secreto
