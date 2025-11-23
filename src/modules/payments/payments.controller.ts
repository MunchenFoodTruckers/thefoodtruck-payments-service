import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { UpaymentsService } from "./payments.service";

@Controller()
export class UpaymentsController {
  constructor(private readonly service: UpaymentsService) {}

  @Get("/api/payments/health")
  health() {
    return { ok: true, service: "payments" };
  }

  @Get("/api/payments")
  findAll() {
    return this.service.findAll();
  }

  @Get("/api/payments/:id")
  findOne(@Param("id") id: string) {
    return this.service.findOne(id);
  }

  @Post("/api/payments")
  create(@Body() dto: any) {
    return this.service.create(dto);
  }
}
