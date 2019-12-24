import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AngularModule } from './angular/angular.module';

@Module({
  imports: [
    AngularModule.forRoot({
      rootPath: 'pizza-store/dist/pizza-store'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
