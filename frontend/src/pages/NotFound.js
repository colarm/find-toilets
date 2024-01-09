
import './css/NotFound.css';

let language = navigator.language;

const text = {
    'en': {
        Title: '404 Not Found',
        description: 'Sorry, the page you are looking for does not exists. '
    },
    'en-GB': {
        Title: '404 Not Found',
        description: 'Sorry, the page you are looking for does not exists. '
    },
    'zh-CN': {
        Title: '404 Not Found',
        description: '对不起，您要查找的页面不存在。'
    },
    'zh-TW': {
        Title: '404 Not Found',
        description: '對不起，您要查找的頁面不存在。'
    }
}

if (text[language] === undefined) {
    language = 'en';
}

function NotFound() {
    return (
        <div className='NotFound'>
            <h1>{text[language].Title }</h1>
            <p>{text[language].description }</p>
        </div>
    )
}

export default NotFound