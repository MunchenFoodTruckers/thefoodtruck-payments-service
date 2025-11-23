import { Module } from "@nestjs/common";
import { UpaymentsController } from "./payments.controller";
import { UpaymentsService } from "./payments.service";
import { PrismaService } from "../prisma.service";

@Module({
  controllers: [UpaymentsController],
  providers: [UpaymentsService, PrismaService],
  exports: [UpaymentsService]
})
export class UpaymentsModule {}
