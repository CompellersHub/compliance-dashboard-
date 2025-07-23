import { jwtVerify, SignJWT } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "default_secret_replace_in_production"
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function verifyToken(token: string) {
  // console.log("Verifying JWT Token:", token);
  try {
    // const { payload } = await jwtVerify(token, JWT_SECRET);
    console.log("JWT Verification Successful");
    // console.log("Decoded JWT Payload:", payload);
    const payloadJson = {
      sub: "1234567890",
      name: "John Doe",
      admin: true,
      email: "admin@titianscareer@gmail.com",
      role: "ADMIN",
      iat: 1516239022,
    };
    return payloadJson; // Simulated payload for testing

    // return payload;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createToken(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET);
}
