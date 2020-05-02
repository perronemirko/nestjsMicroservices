import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MathService {

    private logger = new Logger('AppController');

    public accumulate(data: number[]): number {

        this.logger.log('accumulate' + data.toString()); // Log something on evry call

        return (data || []).reduce((a, b) =>{return Number(a) + Number(b)}); 
    }
}
