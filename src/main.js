import Vue from 'vue';
import App from '@/app';
import './styles/common.scss';
import './styles/table.scss';

async function a() {
    await new Promise(resolve => {
        resolve('sdsdgs');
    }).then(res => {
        console.log(res);
    });
    console.log('haha');
}
a();

new Vue({
    el: '#app',
    render: h => h(App),
});
