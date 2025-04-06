import { Module } from '@nestjs/common';

export const ID_PROVIDER = 'ID_PROVIDER';

export const IdProvider = {
  provide: ID_PROVIDER,
  useValue: () => Math.random().toString(36).substring(2, 10),
};

@Module({ providers: [IdProvider], exports: [IdProvider] })
export class UtilsModule {}
