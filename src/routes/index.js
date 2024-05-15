// Import layout
import { HeaderOnly } from '~/components/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

// những route không đăng nhập cũng vào được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

//những route phải đăng nhâp mới vào được
const privateRoutes = [

];

export { publicRoutes, privateRoutes };