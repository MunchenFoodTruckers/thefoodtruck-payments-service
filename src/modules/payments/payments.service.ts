import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { InMemoryStorage } from "../../storage/in-memory.service";

@Injectable()
export class UpaymentsService {
  private inMemory: InMemoryStorage = new InMemoryStorage();
  private useInMemory: boolean = false;

  constructor(private prisma: PrismaService) {
    this.checkConnection();
  }

  private async checkConnection() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      this.useInMemory = false;
    } catch {
      this.useInMemory = true;
      console.log("📦 Using in-memory storage for payments service");
    }
  }

  async findAll() {
    if (this.useInMemory) {
      return this.inMemory.findAll();
    }
    return this.prisma.payment.findMany();
  }

  async findOne(id: string) {
    if (this.useInMemory) {
      return this.inMemory.findById(id);
    }
    return this.prisma.payment.findUnique({ where: { id } });
  }

  async create(data: any) {
    if (this.useInMemory) {
      return this.inMemory.create(data);
    }
    return this.prisma.payment.create({ data });
  }
}
