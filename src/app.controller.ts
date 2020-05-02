import { Controller, Logger} from '@nestjs/common';
import { MathService } from './mathservice/math.service';
import { GrpcMethod } from '@nestjs/microservices';

interface INumberArray {
  data: number[];
}

interface ISumOfNumberArray {
  sum: number;
}

@Controller()
export class AppController{
  private logger = new Logger('GRPC APP CONTROLLER');

  constructor(private mathService: MathService){}

  @GrpcMethod('AppController', 'Accumulate') // Mapping the protofile to the controller, If you match the name you can define like this @GrpcMethod()
  accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray{
    this.logger.log('Adding' + numberArray.data.toString());
    return {sum: this.mathService.accumulate(numberArray.data)}
  }
}
////// TCP/REDIS
// @Controller()
// export class AppController {
//   //Create a logger instance 
//   private logger = new Logger('AppController');

//   // Inject the math service
//   constructor(private readonly appService: AppService,
//     private mathService: MathService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }

//   // Map the 'POST /add' route to this method
//   //@Post('add')
//   //async accumulate(@Body('data') data: number[]){

//   //Define the message paterrn for this method
//   @MessagePattern('add')
//   //@EventPattern('add')
//   async accumulate(data: number[]){
//     this.logger.log('adding' + data.toString()); // Log something on evry call
//     return await this.mathService.accumulate(data);; // use math service to calc result & return
//   }
// }
