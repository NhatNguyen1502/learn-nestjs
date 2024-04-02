import { Controller, Get, Req, Res, Param, Query, Session, HostParam, Redirect } from '@nestjs/common';
import { Request, Response, } from 'express'; 

@Controller('home/:id/:name')
export class HomeController {
    @Get('')
    getHome(@Req() req: Request, @Res() res: Response, @Param() params: object, @Query() query: string, @Session() session: Record<string, any>, @HostParam() host: string) {
        // route: /home/1/nhat?a=1&b=2
        console.log('param:', params); //param: { id: '1', name: 'nhat' }
        console.log('param id:', params['id']); //param id: 1
        console.log('query:', query); //query: { a: '1', b: '2' }
        console.log('session:', session);     
        console.log('host:', host); 
        return res.send('Welcome to homepage');
    }

    @Get('about')
    @Redirect('https://nestjs.com', 301)
    getAbout(){
        return 'About page';
    }
}
