export const DEFAULT_AVATAR: string = 'http://placehold.it/32x32';

export interface PartialPerson {
  readonly name: string;
  readonly company: string;
  readonly avatarUrl?: string;
  readonly email: string;
  readonly phone?: string;
  readonly address: string;
  readonly about?: string;
  readonly tags: readonly string[];
}

export interface Person extends PartialPerson {
  readonly id: string;
  readonly createdAt: number;
  readonly avatarUrl: string;
}
