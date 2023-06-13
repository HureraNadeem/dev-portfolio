import React, {FC, ReactNode} from "react";

interface SocialIconWrappperProps {
    children: ReactNode
    bgcolor: String
}

const SocialIconWrappper: FC<SocialIconWrappperProps> = ({ children, bgcolor }: SocialIconWrappperProps) => {
    return (
        <>
            <span style={{
                borderRadius: '2.6rem',
                cursor: 'pointer',
                fontSize: '1.3rem',
                lineHeight: '2.9rem',
                position: 'relative',
                textAlign: 'center',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                userSelect: 'none',
                width: '42px',
                height: '42px',
                margin: '0 5px 10px',
                backgroundColor: `${bgcolor}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {children}
            </span>
        </>
    );
}

export default SocialIconWrappper;