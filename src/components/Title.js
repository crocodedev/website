import styled from '@emotion/styled'

const Title = styled.h1`
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
    color: ${({theme}) => theme.palette.text.primary};

    ${({ theme }) => theme.breakpoints.down('md')} {
        font-size: 40px;
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
        font-size: 60px;    
    }

`

export default Title