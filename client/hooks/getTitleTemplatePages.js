import { useRouter } from 'next/router'
const getTitle = () => {
    const router = useRouter()
    let title = ''
    if (router.pathname === '/blog') {
        title = 'Блог'
    } else if (router.pathname === '/news') {
        title = 'Новости'
    } else {
        title = 'Видеоматериалы'
    }
    return title
}

export default getTitle