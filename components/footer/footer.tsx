import Link from 'next/link'
import Wrapper from '../wrapper/wrapper'


function Footer() {
    return (
        <>
            <footer className='text-center py-3 tertiary-text bg-main-bg-color'>
                {"Made with 🖤 by "}
                <span className='tertiary-text underline' >
                    <Link href="https://www.linkedin.com/in/iamhurera/" passHref={true} target='_blank'>Hurera</Link>
                </span>
            </footer>
        </>
    )
}

export default Footer