import {Button} from "antd";
import Typography from "antd/es/typography/Typography";
export const Navbar = () => {
    return<>
        <div className={'flex items-center p-3 py-5 justify-between container mx-auto'}>
            <img className={'w-[150px] h-[60px] object-cover'} src={'https://st2.depositphotos.com/1010751/6391/v/450/depositphotos_63913547-stock-illustration-leaf-house-logo.jpg'}/>

            <div>
                <ul className={'flex items-center gap-7'}>
                    <li className={''}><a href={'#'}>Turar joylar</a></li>
                    <li className={''}><a href={'#'}>Noturar joylar</a></li>
                    <li className={''}><a href={'#'}>Biz haqimizda</a></li>
                    <li className={''}><a href={'#'}>Yangiliklar</a></li>
                    <li className={''}><a href={'#'}>Aloqa</a></li>
                </ul>
            </div>
                <Typography className={'font-bold hover:scale-125'}><a href={'#'}>+998 93 803-24-75</a></Typography>
            <div>
                <Button>Kirish</Button>
            </div>
        </div>
    </>
}