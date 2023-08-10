import { Body, Controller, Get, Header, HttpCode, Param, Post, Req } from '@nestjs/common';
import { CreateTaskDto } from './create-task.dto';

@Controller('task')
export class TaskController {
    @Get()
    findAll(@Req() request: Request): string{
        return 'This action returns all cats';
    }

    @Get('ab*cd')
    findWild(): string{
        return 'This route uses a wildcard';
    }

    @Post()
    create(): string {
        return 'This action adds a new cat';
    }
    
    @Post('status')
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    createHttp() {
    return 'This action adds a new cat status';
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
    }

    @Post('create')
    async createDTO(@Body() createCatDto: CreateTaskDto) {
        console.log(createCatDto)
    return 'Created Successfully';
    }
    
}
