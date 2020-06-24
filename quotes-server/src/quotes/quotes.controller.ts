import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { Quote } from './interfaces/quote.interface';
import { ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('quotes')
@Controller('quotes')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}
  @Get() // localhost:3000/quotes
  getQuotes(): Promise<Quote[]> {
    return this.quotesService.getQuotes();
  }
  @ApiParam({ name: 'id' })
  @Get(':id')
  getQuote(@Param('id') id): Promise<Quote> {
    return this.quotesService.getQuote(id);
  }
  @Post()
  CreateQuote(@Body() createQuoteDto: CreateQuoteDto): Promise<Quote> {
    return this.quotesService.createQuote(createQuoteDto);
  }

  @ApiParam({ name: 'id' })
  @Put(':id')
  updateQuote(
    @Param('id') id,
    @Body() updateQuoteDto: CreateQuoteDto,
  ): Promise<Quote> {
    return this.quotesService.updateQuote(id, updateQuoteDto);
  }

  @ApiParam({ name: 'id' })
  @Delete(':id')
  deleteQuote(@Param('id') id): Promise<any> {
    return this.quotesService.deleteQuote(id);
  }
}
