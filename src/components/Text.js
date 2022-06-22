import styled from '@emotion/styled'

const Text = styled.div`
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
    color: ${({theme}) => theme.palette.text.primary};

    ${({ theme }) => theme.breakpoints.down('md')} {
        font-size: 16px;
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
        font-size: 20px;
    }

`

export default Text