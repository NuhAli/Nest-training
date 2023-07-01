import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
class AuthService {
  constructor(private prismaService: PrismaService) {}
  login() {
    return 'I am logged in';
  }
  register() {
    return 'I am registered';
  }
}

export default AuthService;
