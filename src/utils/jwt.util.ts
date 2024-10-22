import { sign, verify, VerifyErrors, Secret } from 'jsonwebtoken';

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface EncodedData {
  id: string;
}

export interface Token extends EncodedData {
  expiresIn: number;
}

/**
 * Signs the given `data` as a JSON web token asynchronously.
 *
 * @param data - data to sign ({@link EncodedData}).
 * @param duration - signed token's duration in seconds, default duration one day.
 * @returns Promise resolving to signed token and token's expiry in seconds.
 */
export async function createAccessToken(data: EncodedData, duration?: number): Promise<TokenData> {
  const defaultDurationInMinutes = +process.env.ACCESS_TOKEN_EXPIRATION_MINUTES!;
  const defaultDuration = 60 * defaultDurationInMinutes;
  const expiresIn = duration || defaultDuration;

  return new Promise((resolve, reject) => {
    sign(data, process.env.ACCESS_TOKEN_SECRET as Secret, { expiresIn }, (err, token) => {
      if (err) return reject(err);
      if (!token) return reject(new Error('AccessToken generation failed'));
      resolve({ expiresIn, token });
    });
  });
}

export async function createRefreshToken(data: EncodedData, duration?: number): Promise<TokenData> {
  const defaultDurationInMinutes = +process.env.REFRESH_TOKEN_EXPIRATION_MINUTES!;
  const defaultDuration = 60 * defaultDurationInMinutes;
  const expiresIn = duration || defaultDuration;

  return new Promise((resolve, reject) => {
    sign(data, process.env.REFRESH_TOKEN_SECRET as Secret, { expiresIn }, (err, token) => {
      if (err) return reject(err);
      if (!token) return reject(new Error('RefreshToken generation failed'));
      resolve({ expiresIn, token });
    });
  });
}

/**
 * Verifies if the given string is a valid jwt string.
 *
 * @param token - The string to verify.
 * @throws a jwt error if token is invalid.
 * @returns payload {@link Token}.
 */
export async function verifyAccessToken(token: string): Promise<VerifyErrors | Token> {
  return new Promise((resolve, reject) => {
    verify(token, process.env.JWT_SECRET as Secret, (err, payload) => {
      if (err) return reject(err);

      resolve(payload as Token);
    });
  });
}

export async function verifyRefreshToken(token: string): Promise<VerifyErrors | Token> {
  return new Promise((resolve, reject) => {
    verify(token, process.env.REFRESH_TOKEN_SECRET as Secret, (err, payload) => {
      if (err) return reject(err);

      resolve(payload as Token);
    });
  });
}
