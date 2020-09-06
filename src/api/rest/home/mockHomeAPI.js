import { mocksAxios } from "../mockAPI";
import star from '../../../images/star.svg';
import productImg from '../../../images/14.png';
import arrow from '../../../images/arrow.svg';
import productImg2 from '../../../images/71.png';

export const mockHomeAPI = {
    getProductList: () =>
        mocksAxios.onGet("/").reply(200, [
            {
                img: {star},
                productImg: productImg,
                arrow: {arrow},
                data: 'Mar 2019',
                manufacturer: 'Bitmain',
                model: 'S9i',
                hash: '10.5-14.5 th/s',
                algorithm: 'SHA-256',
                efficiency: '8.00j/H/s',
                profit: '$122.8/day',
                price: '$137-$217'

            }, {
                img: {star},
                productImg: productImg2,
                arrow: {arrow},
                data: 'Mar 2019',
                manufacturer: 'Bitmain',
                model: 'S8',
                hash: '13.5-14.5 th/s',
                algorithm: 'SHA-256',
                efficiency: '10.00j/H/s',
                profit: '$172.8/day',
                price: '$197-$217'

            }, {
                img: {star},
                productImg: productImg2,
                arrow: {arrow},
                data: 'Mar 2019',
                manufacturer: 'Bitmain',
                model: 'S9i',
                hash: '10.5-14.5 th/s',
                algorithm: 'SHA-256',
                efficiency: '8.00j/H/s',
                profit: '$122.8/day',
                price: '$137-$217'

            }, {
                img: {star},
                productImg: productImg2,
                arrow: {arrow},
                data: 'Mar 2019',
                manufacturer: 'Bitmainer',
                model: 'S4',
                hash: '10.5-14.5 th/s',
                algorithm: 'SHA-256',
                efficiency: '8.00j/H/s',
                profit: '$122.8/day',
                price: '$137-$217'

            }, {
                img: {star},
                productImg: productImg2,
                arrow: {arrow},
                data: 'Mar 2019',
                manufacturer: 'Bitmainer',
                model: 'S1',
                hash: '10.5-14.5 th/s',
                algorithm: 'SHA-256',
                efficiency: '8.00j/H/s',
                profit: '$122.8/day',
                price: '$137-$217'

            }, {
                img: {star},
                productImg: productImg2,
                arrow: {arrow},
                data: 'Mar 2019',
                manufacturer: 'Bitmain',
                model: 'S9i',
                hash: '10.5-14.5 th/s',
                algorithm: 'SHA-256',
                efficiency: '8.00j/H/s',
                profit: '$122.8/day',
                price: '$137-$217'

            }, {
                img: {star},
                productImg: productImg2,
                arrow: {arrow},
                data: 'Mar 2019',
                manufacturer: 'Bitmainer',
                model: 'S9t',
                hash: '10.5-14.5 th/s',
                algorithm: 'SHA-256',
                efficiency: '8.00j/H/s',
                profit: '$122.8/day',
                price: '$137-$217'

            }
        ])
};
