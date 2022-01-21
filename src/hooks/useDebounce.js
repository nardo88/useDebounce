import { useRef } from 'react'

const useDebounce = (fn, ms) => {
    const timeOut = useRef()
    return function () {
        // создаем функцию которой передадим все аргументы обертки
        const fnCall = () => fn.apply(null, arguments)
        // очищаем setTimeOut который храним в замкнутой ref ссылке
        clearTimeout(timeOut.current)
        // сохраняем в ref id setTimeout
        timeOut.current = setTimeout(fnCall, ms)
    }
    // fnCall каждый раз попадает в seTimeOut который прерывается если
    // не остановится на ms милисекунд
}

export default useDebounce;

