import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

// Create a logger instance
const logger = new Logger('Main');
////// NORMAL TCP PROTOCOL ///////
// //Create the microservice_options object 
// const microserviceOptions = {
//   transport: Transport.TCP,
//   options: {
//     host:'127.0.0.1',
//     port: 8877
//   }
// }
// // This is serverside
// async function bootstrap() {
//   // const app = await NestFactory.create(AppModule);
//   // await app.listen(6000);

//   const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
//   await app.listen(()=>{
//     logger.log(`Microservice is listening ... on ${microserviceOptions.options.host}:${microserviceOptions.options.port}`)
//   });
// }
// bootstrap();


///// USING REDIS INSTEAD ///////
//Create the microservice_options object 
// const microserviceOptions = {
//   transport: Transport.REDIS,
//   options: {
//     host:'127.0.0.1',
//     port: 6379
//   }
// }

//// USING GRPC PROTOBUF ////
const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package:'app',
    protoPath: join(__dirname, '../src/app.proto'),
  }
}



// This is serverside
async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(6000);

  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  await app.listen(()=>{
    logger.log(`Microservice GRPC is listening ...`)
  });
}
bootstrap();