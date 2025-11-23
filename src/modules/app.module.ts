import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UpaymentsModule } from "./payments/payments.module";
import { PrismaService } from "./prisma.service";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UpaymentsModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class AppModule { }
