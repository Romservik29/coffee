import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeController } from './coffee/coffee.controller';
import { CoffeeModule } from './coffee/coffee.module';

@Module({
  imports: [CoffeeModule,
    TypeOrmModule.forRoot({
    type:  "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123pass",
    database: "postgres",
    autoLoadEntities: true,
    synchronize: true
  }), 
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
