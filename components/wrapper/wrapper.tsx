import React, { FC, ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

const Wrapper: FC<Props> = ({ children }) => {
    return (
        <div className='sm:px-9 md:px-9 lg:px-14 xl:px-16 2xl:px-24 py-8 bg-main-bg-color'>
            {children}
        </div>
    )
}

export default Wrapper



